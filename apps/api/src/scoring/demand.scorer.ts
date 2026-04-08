import { Injectable, Logger, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import {
  DimensionScoreValues,
  IScoreDimensionService,
  ScoreCalculationResult,
  ScoreCalculator,
  ScoreClassification,
} from '@nexcript/shared';
import type { IYouTubePort } from '../adapters/interfaces/youtube.port';
import type { ITrendsPort } from '../adapters/interfaces/trends.port';

/**
 * Input for DemandScorer calculateDimensions
 */
export interface DemandScorerInput {
  /** Search keyword to analyze demand for */
  keyword: string;
  /** Geographic region code (ISO 3166-1 alpha-2, e.g., 'BR', 'US') */
  geo: string;
}

/**
 * Demand Scorer Service
 *
 * Calculates market demand score based on:
 * - Google Trends interest (40%)
 * - YouTube video views normalized logarithmically (35%)
 * - Trend momentum over 30 days (25%)
 *
 * Logarithmic normalization: 1M views = 100, 10k views ≈ 33
 * Formula: 33.5 * log10(views) - 101 (clamped to 0-100)
 *
 * Cache: Redis with 6h TTL on key demand:{keyword}:{geo}
 * Fallback: Returns 50 (neutral) if any external service is unavailable
 */
@Injectable()
export class DemandScorer implements IScoreDimensionService {
  private readonly logger = new Logger(DemandScorer.name);

  /** Cache TTL in seconds (6 hours) */
  private static readonly CACHE_TTL = 6 * 60 * 60;

  /** Cache key prefix */
  private static readonly CACHE_PREFIX = 'demand:';

  /** Neutral fallback score when data is unavailable */
  private static readonly FALLBACK_SCORE = 50;

  /** ScoreCalculator with custom weights: Trends 40%, YouTube 35%, Momentum 25%, unused 0% */
  private readonly scoreCalculator = new ScoreCalculator({
    dimension1: 0.4, // Trends interest
    dimension2: 0.0, // unused (inversion artifact of ScoreCalculator formula)
    dimension3: 0.35, // YouTube views
    dimension4: 0.25, // Momentum 30 days
  });

  constructor(
    @Inject('REDIS_INSTANCE') private readonly redis: Redis,
    @Inject('IYouTubePort') private readonly youtubePort: IYouTubePort,
    @Inject('ITrendsPort') private readonly trendsPort: ITrendsPort,
  ) {}

  /**
   * Calculate demand dimension scores for a keyword/geo combination
   *
   * @param input Must contain 'keyword' and 'geo' properties
   * @returns DimensionScoreValues with demand scores per dimension
   */
  async calculateDimensions(
    input: Record<string, unknown>,
  ): Promise<DimensionScoreValues> {
    const { keyword, geo } = input as unknown as DemandScorerInput;

    if (!keyword || !geo) {
      throw new Error('DemandScorer requires "keyword" and "geo" in input');
    }

    const cacheKey = `${DemandScorer.CACHE_PREFIX}${keyword}:${geo}`;

    // Check Redis cache first
    const cached = await this.redis.get(cacheKey);
    if (cached) {
      this.logger.debug(`Cache hit for demand score: ${cacheKey}`);
      return JSON.parse(cached) as DimensionScoreValues;
    }

    const dimensions = await this.computeDimensions(keyword, geo);

    // Cache the result with 6h TTL
    await this.redis.setex(
      cacheKey,
      DemandScorer.CACHE_TTL,
      JSON.stringify(dimensions),
    );

    return dimensions;
  }

  /**
   * Calculate the final demand score from dimension values
   * Uses custom weights: Trends 40%, YouTube 35%, Momentum 25%
   *
   * @param dimensions Individual dimension scores
   * @returns Complete score calculation result with final score and classification
   */
  calculateScore(dimensions: DimensionScoreValues): ScoreCalculationResult {
    // When dimension2 weight is 0, we still need a valid value (0-100)
    // The ScoreCalculator formula: D1×w1 + (100−D2)×w2 + D3×w3 + D4×w4
    // With w2=0, D2 is irrelevant — but must be in range
    return this.scoreCalculator.calculate(dimensions);
  }

  /**
   * Clear cached demand scores
   * @param cacheKey Optional "keyword:geo" string to clear specific entry
   */
  async clearCache(cacheKey?: string): Promise<void> {
    if (cacheKey) {
      await this.redis.del(`${DemandScorer.CACHE_PREFIX}${cacheKey}`);
    } else {
      const keys = await this.redis.keys(`${DemandScorer.CACHE_PREFIX}*`);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    }
  }

  /**
   * Compute dimension scores by querying external services
   * Falls back to neutral score (50) if any service is unavailable
   */
  private async computeDimensions(
    keyword: string,
    geo: string,
  ): Promise<DimensionScoreValues> {
    const [trendsScore, youtubeScore, momentumScore] = await Promise.all([
      this.computeTrendsScore(keyword, geo),
      this.computeYouTubeScore(keyword),
      this.computeMomentumScore(keyword, geo),
    ]);

    return {
      dimension1: trendsScore,
      dimension2: 0, // Unused dimension (weight 0) — must be valid 0-100
      dimension3: youtubeScore,
      dimension4: momentumScore,
    };
  }

  /**
   * Compute Trends interest score (0-100)
   * Returns FALLBACK_SCORE if service is unavailable
   */
  private async computeTrendsScore(
    keyword: string,
    geo: string,
  ): Promise<number> {
    try {
      const dataPoints = await this.trendsPort.getInterestOverTime(
        keyword,
        geo,
      );

      if (!dataPoints || dataPoints.length === 0) {
        this.logger.warn(
          `No trends data for "${keyword}" in ${geo}, using fallback`,
        );
        return DemandScorer.FALLBACK_SCORE;
      }

      // Use the average of recent data points (last 4 weeks)
      const recent = dataPoints.slice(-4);
      const avgInterest =
        recent.reduce((sum, p) => sum + p.interest, 0) / recent.length;

      return Math.min(100, Math.max(0, avgInterest));
    } catch (error) {
      this.logger.warn(
        `Failed to get trends score for "${keyword}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return DemandScorer.FALLBACK_SCORE;
    }
  }

  /**
   * Compute YouTube views score using logarithmic normalization (0-100)
   * Formula: 33.5 × log10(views) − 101 (clamped to 0-100)
   * Reference: 1M views = 100, 10k views ≈ 33
   *
   * Returns FALLBACK_SCORE if service is unavailable
   */
  private async computeYouTubeScore(keyword: string): Promise<number> {
    try {
      const videos = await this.youtubePort.searchVideos(keyword, 5);

      if (!videos || videos.length === 0) {
        this.logger.warn(`No YouTube results for "${keyword}", using fallback`);
        return DemandScorer.FALLBACK_SCORE;
      }

      // Use the average views from top results
      const avgViews =
        videos.reduce((sum, v) => sum + v.views, 0) / videos.length;

      return DemandScorer.normalizeViewsLogarithmically(avgViews);
    } catch (error) {
      this.logger.warn(
        `Failed to get YouTube score for "${keyword}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return DemandScorer.FALLBACK_SCORE;
    }
  }

  /**
   * Compute trend momentum score based on 30-day change (0-100)
   * Compares recent trend interest vs 30 days ago
   * Score of 50 = stable, >50 = growing, <50 = declining
   *
   * Returns FALLBACK_SCORE if service is unavailable
   */
  private async computeMomentumScore(
    keyword: string,
    geo: string,
  ): Promise<number> {
    try {
      const dataPoints = await this.trendsPort.getInterestOverTime(
        keyword,
        geo,
      );

      if (!dataPoints || dataPoints.length < 2) {
        this.logger.warn(
          `Insufficient trends data for momentum "${keyword}", using fallback`,
        );
        return DemandScorer.FALLBACK_SCORE;
      }

      // Split into recent (last 4 points) and older (previous 4 points)
      const recent = dataPoints.slice(-4);
      const older =
        dataPoints.length >= 8
          ? dataPoints.slice(-8, -4)
          : dataPoints.slice(0, Math.ceil(dataPoints.length / 2));

      const recentAvg =
        recent.reduce((sum, p) => sum + p.interest, 0) / recent.length;
      const olderAvg =
        older.reduce((sum, p) => sum + p.interest, 0) / older.length;

      if (olderAvg === 0) {
        // No past data — assume stable
        return DemandScorer.FALLBACK_SCORE;
      }

      // Momentum: percentage change mapped to 0-100 scale
      // +100% growth = 100, -100% decline = 0, stable = 50
      const percentageChange = (recentAvg - olderAvg) / olderAvg;
      const momentumScore = 50 + percentageChange * 50;

      return Math.min(100, Math.max(0, momentumScore));
    } catch (error) {
      this.logger.warn(
        `Failed to get momentum score for "${keyword}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      return DemandScorer.FALLBACK_SCORE;
    }
  }

  /**
   * Normalize YouTube view count to 0-100 scale using logarithmic formula
   * Formula derived from: f(1,000,000) = 100, f(10,000) = 33
   * Linear system: a × log10(x) + b where a=33.5, b=-101
   *
   * @param views Raw view count
   * @returns Normalized score (0-100)
   */
  static normalizeViewsLogarithmically(views: number): number {
    if (views <= 0) return 0;

    const score = 33.5 * Math.log10(Math.max(1, views)) - 101;
    return Math.min(100, Math.max(0, score));
  }

  /**
   * Compute score from raw components without caching
   * Useful for testing the scoring logic in isolation
   */
  static computeDirectScore(
    trendsScore: number,
    youtubeScore: number,
    momentumScore: number,
  ): number {
    const score =
      trendsScore * 0.4 + youtubeScore * 0.35 + momentumScore * 0.25;

    return Math.min(100, Math.max(0, score));
  }

  /**
   * Classify a direct demand score without going through dimension calculation
   */
  static classifyScore(score: number): ScoreClassification {
    if (score >= 75) return ScoreClassification.PUBLISH;
    if (score >= 50) return ScoreClassification.EVALUATE;
    return ScoreClassification.AVOID;
  }
}
