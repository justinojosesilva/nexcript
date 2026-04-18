import { Injectable, Logger, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import {
  DimensionScoreValues,
  IScoreDimensionService,
  ScoreCalculationResult,
  ScoreClassification,
} from '@nexvideo/shared';
import { gapAnalysisPrompt } from '@nexvideo/prompts';
import type { IYouTubePort } from '../adapters/interfaces/youtube.port';
import type { IOpenAIPort } from '../adapters/interfaces/openai.port';

/**
 * Input for QualityGapScorer calculateDimensions
 */
export interface QualityGapScorerInput {
  /** Search keyword to analyze quality gaps for */
  keyword: string;
  /** Geographic region code (ISO 3166-1 alpha-2, e.g., 'BR', 'US') */
  geo: string;
}

/**
 * OpenAI gap analysis response structure
 */
interface GapAnalysisResponse {
  /** Gap score (0-100): 0 = saturated market, 100 = many gaps */
  gapScore: number;
  /** Array of identified content gaps */
  gaps: Array<{
    title: string;
    description: string;
    opportunity: string;
    searchVolume: 'baixa' | 'média' | 'alta';
  }>;
  /** Optional suggested content angles */
  suggestedAngles?: Array<{
    angle: string;
    format: string;
    targetAudience: string;
    competitionLevel: string;
    estimatedViews: string;
  }>;
  /** Strategy summary */
  summary?: string;
}

/**
 * Quality Gap Scorer Service
 *
 * Analyzes content quality gaps by examining existing YouTube videos via GPT-4o.
 * Uses the gap analysis prompt to identify opportunities in the market.
 *
 * Process:
 * 1. Fetch top 10 videos for the keyword from YouTube
 * 2. Send titles + descriptions to GPT-4o via gapAnalysisPrompt
 * 3. Parse the JSON response to extract gapScore (0-100)
 * 4. Cache result with 24h TTL to avoid repeated OpenAI calls
 *
 * Cache: Redis with 24h TTL on key quality-gap:{keyword}
 * Fallback: Returns 50 (neutral EVALUATE) if OpenAI/YouTube unavailable
 * Cost control: max_tokens = 500 per OpenAI call
 */
@Injectable()
export class QualityGapScorer implements IScoreDimensionService {
  private readonly logger = new Logger(QualityGapScorer.name);

  /** Cache TTL in seconds (24 hours) */
  private static readonly CACHE_TTL = 24 * 60 * 60;

  /** Cache key prefix */
  private static readonly CACHE_PREFIX = 'quality-gap:';

  /** Neutral fallback score when data is unavailable */
  private static readonly FALLBACK_SCORE = 50;

  /** Max tokens for OpenAI call — controls cost */
  private static readonly MAX_TOKENS = 500;

  /** Number of top videos to analyze */
  private static readonly VIDEOS_TO_ANALYZE = 10;

  constructor(
    @Inject('REDIS_INSTANCE') private readonly redis: Redis,
    @Inject('IYouTubePort') private readonly youtubePort: IYouTubePort,
    @Inject('IOpenAIPort') private readonly openaiPort: IOpenAIPort,
  ) {}

  /**
   * Calculate quality gap dimension score for a keyword
   *
   * @param input Must contain 'keyword' and 'geo' properties
   * @returns DimensionScoreValues with gapScore in dimension1
   */
  async calculateDimensions(
    input: Record<string, unknown>,
  ): Promise<DimensionScoreValues> {
    const { keyword, geo } = input as unknown as QualityGapScorerInput;

    if (!keyword || !geo) {
      throw new Error('QualityGapScorer requires "keyword" and "geo" in input');
    }

    // Cache key uses only keyword (gap analysis is not geo-specific)
    const cacheKey = `${QualityGapScorer.CACHE_PREFIX}${keyword}`;

    const cached = await this.redis.get(cacheKey);
    if (cached) {
      this.logger.debug(`Cache hit for quality-gap score: ${cacheKey}`);
      return JSON.parse(cached) as DimensionScoreValues;
    }

    const gapScore = await this.computeGapScore(keyword);

    const dimensions: DimensionScoreValues = {
      dimension1: gapScore,
      dimension2: 50, // Not used in quality-gap scoring
      dimension3: 50, // Not used in quality-gap scoring
      dimension4: 50, // Not used in quality-gap scoring
    };

    await this.redis.setex(
      cacheKey,
      QualityGapScorer.CACHE_TTL,
      JSON.stringify(dimensions),
    );

    return dimensions;
  }

  /**
   * Calculate the final quality gap score from dimension values
   *
   * @param dimensions Individual dimension scores (uses dimension1 only)
   * @returns Score calculation result
   */
  calculateScore(dimensions: DimensionScoreValues): ScoreCalculationResult {
    return {
      score: dimensions.dimension1,
      classification:
        dimensions.dimension1 >= 75
          ? ScoreClassification.PUBLISH
          : dimensions.dimension1 >= 50
            ? ScoreClassification.EVALUATE
            : ScoreClassification.AVOID,
      dimensionScores: dimensions,
      weights: {
        dimension1: 1,
        dimension2: 0,
        dimension3: 0,
        dimension4: 0,
      },
    };
  }

  /**
   * Clear cached quality gap scores
   * @param cacheKey Optional keyword to clear specific cache entry
   */
  async clearCache(cacheKey?: string): Promise<void> {
    if (cacheKey) {
      await this.redis.del(`${QualityGapScorer.CACHE_PREFIX}${cacheKey}`);
    } else {
      const keys = await this.redis.keys(`${QualityGapScorer.CACHE_PREFIX}*`);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    }
  }

  /**
   * Compute gap score by fetching YouTube videos and calling GPT-4o
   * Falls back to FALLBACK_SCORE if any service is unavailable
   */
  private async computeGapScore(keyword: string): Promise<number> {
    try {
      const videos = await this.youtubePort.searchVideos(
        keyword,
        QualityGapScorer.VIDEOS_TO_ANALYZE,
      );

      if (!videos || videos.length === 0) {
        this.logger.warn(
          `No YouTube results for "${keyword}", using fallback score`,
        );
        return QualityGapScorer.FALLBACK_SCORE;
      }

      const prompt = gapAnalysisPrompt({
        keyword,
        videos: videos.map((v) => ({
          title: v.title,
          description: v.description,
          duration: Math.round(v.duration / 60), // Convert seconds to minutes
          viewCount: v.views,
        })),
      });

      const responseText = await this.openaiPort.complete(
        prompt,
        QualityGapScorer.MAX_TOKENS,
      );

      return this.parseGapScore(responseText, keyword);
    } catch (error) {
      this.logger.warn(
        `Failed to compute gap score for "${keyword}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return QualityGapScorer.FALLBACK_SCORE;
    }
  }

  /**
   * Parse the OpenAI JSON response and extract gapScore
   * Returns FALLBACK_SCORE if parsing fails
   */
  private parseGapScore(responseText: string, keyword: string): number {
    try {
      const parsed = JSON.parse(responseText) as GapAnalysisResponse;

      if (typeof parsed.gapScore !== 'number') {
        this.logger.warn(
          `Invalid gapScore in OpenAI response for "${keyword}": ${responseText}`,
        );
        return QualityGapScorer.FALLBACK_SCORE;
      }

      const score = Math.min(100, Math.max(0, parsed.gapScore));
      this.logger.debug(
        `Gap score for "${keyword}": ${score} (gaps found: ${parsed.gaps?.length ?? 0})`,
      );

      return score;
    } catch (error) {
      this.logger.warn(
        `Failed to parse OpenAI response for "${keyword}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return QualityGapScorer.FALLBACK_SCORE;
    }
  }
}
