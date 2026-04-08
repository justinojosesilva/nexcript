import {
  ScoreCalculationResult,
  DimensionScoreValues,
} from "./score-calculation.js";

/**
 * Interface for dimension-based score calculation services
 * Different dimensions are scored independently, then combined
 */
export interface IScoreDimensionService {
  /**
   * Calculate score for specific dimensions based on context
   * @param input Context-specific input for scoring
   * @returns Dimension scores ready for final calculation
   */
  calculateDimensions(
    input: Record<string, unknown>,
  ): Promise<DimensionScoreValues>;

  /**
   * Calculate final score from dimensions
   * @param dimensions Individual dimension scores
   * @returns Complete score calculation result
   */
  calculateScore(dimensions: DimensionScoreValues): ScoreCalculationResult;

  /**
   * Clear cached results
   * @param cacheKey Optional key to clear specific cache entry
   */
  clearCache(cacheKey?: string): Promise<void>;
}
