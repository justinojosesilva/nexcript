import { Injectable, Inject } from '@nestjs/common';
import Redis from 'ioredis';
import {
  DimensionScoreValues,
  IScoreDimensionService,
  ScoreCalculationResult,
  ScoreCalculator,
} from '@nexvideo/shared';
import { NicheCategory, RpmTier } from '@nexvideo/shared';

/**
 * RPM (Revenue Per Mille) range for each niche category
 * Maps niche to average RPM tier for monetization assessment
 */
interface NicheRpmData {
  /** Average RPM tier for the niche */
  tier: RpmTier;
  /** Relative competitiveness (0-100) */
  competitiveness: number;
  /** Audience size potential (0-100) */
  audiencePotential: number;
  /** Monetization ease (0-100) */
  monetizationEase: number;
}

/**
 * Monetization Scorer Service
 *
 * Calculates monetization risk score based on niche category and historical RPM data.
 * Uses Redis caching with 7-day TTL to avoid repeated calculations.
 *
 * Scoring formula:
 * - dimension1: RPM tier potential (0-100)
 * - dimension2: Market competitiveness risk (inverted, 0-100)
 * - dimension3: Audience size opportunity (0-100)
 * - dimension4: Monetization ease factor (0-100)
 */
@Injectable()
export class MonetizationScorer implements IScoreDimensionService {
  /** Cache TTL in seconds (7 days) */
  private static readonly CACHE_TTL = 60 * 60 * 24 * 7;

  /** Cache key prefix */
  private static readonly CACHE_PREFIX = 'monetization_scorer:';

  /**
   * Static mapping of niche categories to RPM and scoring data
   * Based on historical YouTube monetization data and market analysis
   */
  private static readonly NICHE_RPM_MAP: Record<NicheCategory, NicheRpmData> = {
    [NicheCategory.FINANCE]: {
      tier: RpmTier.TIER_4,
      competitiveness: 85,
      audiencePotential: 75,
      monetizationEase: 80,
    },
    [NicheCategory.TECHNOLOGY]: {
      tier: RpmTier.TIER_3,
      competitiveness: 80,
      audiencePotential: 85,
      monetizationEase: 75,
    },
    [NicheCategory.PRODUCTIVITY]: {
      tier: RpmTier.TIER_3,
      competitiveness: 75,
      audiencePotential: 70,
      monetizationEase: 78,
    },
    [NicheCategory.LIFESTYLE]: {
      tier: RpmTier.TIER_2,
      competitiveness: 70,
      audiencePotential: 80,
      monetizationEase: 65,
    },
    [NicheCategory.EDUCATION]: {
      tier: RpmTier.TIER_2,
      competitiveness: 60,
      audiencePotential: 75,
      monetizationEase: 70,
    },
    [NicheCategory.ENTERTAINMENT]: {
      tier: RpmTier.TIER_1,
      competitiveness: 95,
      audiencePotential: 90,
      monetizationEase: 50,
    },
    [NicheCategory.BUSINESS]: {
      tier: RpmTier.TIER_3,
      competitiveness: 78,
      audiencePotential: 72,
      monetizationEase: 77,
    },
    [NicheCategory.HEALTH]: {
      tier: RpmTier.TIER_3,
      competitiveness: 82,
      audiencePotential: 78,
      monetizationEase: 72,
    },
    [NicheCategory.PERSONAL_DEVELOPMENT]: {
      tier: RpmTier.TIER_2,
      competitiveness: 72,
      audiencePotential: 68,
      monetizationEase: 68,
    },
    [NicheCategory.OTHER]: {
      tier: RpmTier.TIER_0,
      competitiveness: 50,
      audiencePotential: 40,
      monetizationEase: 45,
    },
  };

  private scoreCalculator: ScoreCalculator;

  constructor(@Inject('REDIS_INSTANCE') private redis: Redis) {
    // Use default weights for monetization scoring
    this.scoreCalculator = new ScoreCalculator();
  }

  /**
   * Calculate dimension scores for a specific niche
   * @param input Must contain 'niche' property with NicheCategory value
   * @returns Dimension scores for the niche
   */
  async calculateDimensions(
    input: Record<string, unknown>,
  ): Promise<DimensionScoreValues> {
    const niche = input.niche as NicheCategory;

    if (!niche || !this.isValidNiche(niche)) {
      throw new Error(`Invalid or missing niche category: ${niche}`);
    }

    // Check cache first
    const cacheKey = `${MonetizationScorer.CACHE_PREFIX}${niche}`;
    const cached = await this.redis.get(cacheKey);

    if (cached) {
      return JSON.parse(cached);
    }

    // Calculate dimensions for this niche
    const dimensions = this.scoreDimensions(niche);

    // Cache the result
    await this.redis.setex(
      cacheKey,
      MonetizationScorer.CACHE_TTL,
      JSON.stringify(dimensions),
    );

    return dimensions;
  }

  /**
   * Calculate final score from dimensions
   * @param dimensions Individual dimension scores
   * @returns Complete score calculation result
   */
  calculateScore(dimensions: DimensionScoreValues): ScoreCalculationResult {
    return this.scoreCalculator.calculate(dimensions);
  }

  /**
   * Clear cache for a specific niche or all monetization scores
   * @param cacheKey Optional niche category to clear specific cache
   */
  async clearCache(cacheKey?: string): Promise<void> {
    if (cacheKey) {
      const key = `${MonetizationScorer.CACHE_PREFIX}${cacheKey}`;
      await this.redis.del(key);
    } else {
      // Clear all monetization scorer cache
      const pattern = `${MonetizationScorer.CACHE_PREFIX}*`;
      const keys = await this.redis.keys(pattern);
      if (keys.length > 0) {
        await this.redis.del(...keys);
      }
    }
  }

  /**
   * Calculate dimension scores based on niche RPM data
   * @param niche The niche category to score
   * @returns Dimension scores (0-100 each)
   */
  private scoreDimensions(niche: NicheCategory): DimensionScoreValues {
    const data = MonetizationScorer.NICHE_RPM_MAP[niche];

    // Dimension 1: RPM tier potential (maps TIER_0-4 to 20-100)
    const rpmTierValue = this.rpmTierToScore(data.tier);

    // Dimension 2: Competitiveness (will be inverted by ScoreCalculator)
    const competitiveness = data.competitiveness;

    // Dimension 3: Audience size potential
    const audiencePotential = data.audiencePotential;

    // Dimension 4: Monetization ease
    const monetizationEase = data.monetizationEase;

    return {
      dimension1: rpmTierValue,
      dimension2: competitiveness,
      dimension3: audiencePotential,
      dimension4: monetizationEase,
    };
  }

  /**
   * Convert RPM tier enum to score (0-100)
   * @param tier The RPM tier
   * @returns Score value 0-100
   */
  private rpmTierToScore(tier: RpmTier): number {
    const tierScores: Record<RpmTier, number> = {
      [RpmTier.TIER_0]: 20,
      [RpmTier.TIER_1]: 40,
      [RpmTier.TIER_2]: 60,
      [RpmTier.TIER_3]: 80,
      [RpmTier.TIER_4]: 100,
    };
    return tierScores[tier];
  }

  /**
   * Validate if niche is a valid NicheCategory
   * @param niche The niche value to validate
   * @returns true if valid, false otherwise
   */
  private isValidNiche(niche: unknown): niche is NicheCategory {
    return Object.values(NicheCategory).includes(niche as NicheCategory);
  }

  /**
   * Get RPM data for a specific niche
   * Useful for testing and debugging
   * @param niche The niche category
   * @returns RPM and scoring data
   */
  static getRpmData(niche: NicheCategory): NicheRpmData {
    return MonetizationScorer.NICHE_RPM_MAP[niche];
  }

  /**
   * Get all niche RPM mappings
   * Useful for configuration and analysis
   * @returns Complete mapping of niches to RPM data
   */
  static getAllRpmData(): Record<NicheCategory, NicheRpmData> {
    return { ...MonetizationScorer.NICHE_RPM_MAP };
  }
}
