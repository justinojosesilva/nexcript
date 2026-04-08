import { Injectable, Logger, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import {
  DimensionScoreValues,
  IScoreDimensionService,
  ScoreCalculationResult,
  ScoreClassification,
} from '@nexcript/shared';
import type { IYouTubePort } from '../adapters/interfaces/youtube.port';

/**
 * Input for SaturationScorer calculateDimensions
 */
export interface SaturationScorerInput {
  /** Search keyword to analyze saturation for */
  keyword: string;
  /** Geographic region code (ISO 3166-1 alpha-2, e.g., 'BR', 'US') */
  geo: string;
}

/**
 * Saturation Scorer Service
 *
 * Analyzes market saturation based on:
 * - Penalizes nichos with many videos published in the last 7 days (recent competition)
 * - Penalizes if large channels dominate the top 10 (market control)
 * - Bonuses if older videos rank high (opportunity to compete with quality)
 *
 * Scoring formula:
 * - Base: 100
 * - Penalize recent videos: -1 point per video published in last 7 days
 * - Penalize large channels: -2 points per channel with >100k views in top 10
 * - Bonus old videos: +2 points per video >30 days old in top 10
 *
 * Cache: Redis with 1h TTL on key saturation:{keyword}:{geo}
 * Fallback: Returns 50 (neutral) if YouTube is unavailable
 */
@Injectable()
export class SaturationScorer implements IScoreDimensionService {
  private readonly logger = new Logger(SaturationScorer.name);

  /** Cache TTL in seconds (1 hour) */
  private static readonly CACHE_TTL = 60 * 60;

  /** Cache key prefix */
  private static readonly CACHE_PREFIX = 'saturation:';

  /** Neutral fallback score when data is unavailable */
  private static readonly FALLBACK_SCORE = 50;

  /** Number of videos to analyze for saturation */
  private static readonly VIDEOS_TO_ANALYZE = 20;

  /** Recent publication threshold in days */
  private static readonly RECENT_DAYS = 7;

  /** Old publication threshold in days (for bonus) */
  private static readonly OLD_DAYS = 30;

  /** View threshold for large channels */
  private static readonly LARGE_CHANNEL_VIEWS = 100000;

  constructor(
    @Inject('REDIS_INSTANCE') private readonly redis: Redis,
    @Inject('IYouTubePort') private readonly youtubePort: IYouTubePort,
  ) {}

  /**
   * Calculate saturation dimension scores for a keyword/geo combination
   *
   * @param input Must contain 'keyword' and 'geo' properties
   * @returns DimensionScoreValues with single dimension (dimension1) containing saturation score
   */
  async calculateDimensions(
    input: Record<string, unknown>,
  ): Promise<DimensionScoreValues> {
    const { keyword, geo } = input as unknown as SaturationScorerInput;

    if (!keyword || !geo) {
      throw new Error('SaturationScorer requires "keyword" and "geo" in input');
    }

    const cacheKey = `${SaturationScorer.CACHE_PREFIX}${keyword}:${geo}`;

    // Check Redis cache first
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      this.logger.debug(`Cache hit for saturation score: ${cacheKey}`);
      return JSON.parse(cached) as DimensionScoreValues;
    }

    const saturationScore = await this.computeSaturationScore(keyword, geo);

    const dimensions: DimensionScoreValues = {
      dimension1: saturationScore,
      dimension2: 50, // Not used in saturation, but required by interface
      dimension3: 50, // Not used in saturation, but required by interface
      dimension4: 50, // Not used in saturation, but required by interface
    };

    // Cache the result with 1h TTL
    await this.redis.setex(cacheKey, SaturationScorer.CACHE_TTL, JSON.stringify(dimensions));

    return dimensions;
  }

  /**
   * Calculate the final saturation score from dimension values
   * This scorer uses only dimension1, so just return it as-is
   *
   * @param dimensions Individual dimension scores
   * @returns Score calculation result with saturation score
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
   * Clear cached saturation scores
   * @param cacheKey Optional "keyword:geo" string to clear specific entry
   */
  async clearCache(cacheKey?: string): Promise<void> {
    if (cacheKey) {
      await this.redis.del(`${SaturationScorer.CACHE_PREFIX}${cacheKey}`);
    } else {
      const keys = await this.redis.keys(`${SaturationScorer.CACHE_PREFIX}*`);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    }
  }

  /**
   * Compute saturation score based on YouTube video analysis
   * Returns FALLBACK_SCORE if service is unavailable
   */
  private async computeSaturationScore(keyword: string, geo: string): Promise<number> {
    // Geo parameter kept for interface consistency, not used in saturation analysis
    void geo;

    try {
      const videos = await this.youtubePort.searchVideos(
        keyword,
        SaturationScorer.VIDEOS_TO_ANALYZE,
      );

      if (!videos || videos.length === 0) {
        this.logger.warn(`No YouTube results for "${keyword}", using fallback`);
        return SaturationScorer.FALLBACK_SCORE;
      }

      const now = new Date();
      const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
      const thirtyDaysAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);

      // Analyze recent videos (published in last 7 days)
      const recentVideos = videos.filter((v) => v.publishedAt >= sevenDaysAgo);

      // Analyze channels (views as proxy for channel size)
      const largeChannelCount = videos.filter((v) => v.views >= SaturationScorer.LARGE_CHANNEL_VIEWS)
        .length;

      // Analyze old videos (published >30 days ago) in top 10
      const oldVideosInTop10 = videos
        .slice(0, 10)
        .filter((v) => v.publishedAt < thirtyDaysAgo).length;

      // Calculate saturation score
      // Base: 100 (low saturation = high score)
      // Penalize: -1 per recent video (max -20 for all videos being recent)
      // Penalize: -2 per large channel in results (max -40 for all large channels)
      // Bonus: +2 per old video in top 10 (max +20 for all old videos)

      let score = 100;
      score -= Math.min(recentVideos.length, 20); // Penalize recent videos
      score -= Math.min(largeChannelCount * 2, 40); // Penalize large channels
      score += Math.min(oldVideosInTop10 * 2, 20); // Bonus old videos in top 10

      // Clamp to 0-100
      return Math.min(100, Math.max(0, score));
    } catch (error) {
      this.logger.warn(
        `Failed to get saturation score for "${keyword}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return SaturationScorer.FALLBACK_SCORE;
    }
  }
}
