import { TrendsDataPoint } from '@nexcript/shared';

/**
 * Port interface for Google Trends API integration
 * Defines the contract for trends data operations
 */
export interface ITrendsPort {
  /**
   * Get interest over time for a search query
   * @param query Search query term
   * @param region Region code (ISO 3166-1 alpha-2, e.g., 'BR', 'US')
   * @returns Array of TrendsDataPoint objects with interest data over time
   * @remarks Returns empty array if service unavailable (graceful fallback)
   */
  getInterestOverTime(
    query: string,
    region: string,
  ): Promise<TrendsDataPoint[]>;

  /**
   * Get related queries for a search term
   * @param query Search query term
   * @param region Region code (ISO 3166-1 alpha-2, e.g., 'BR', 'US')
   * @returns Array of TrendsDataPoint objects for related queries
   * @remarks Returns empty array if service unavailable (graceful fallback)
   */
  getRelatedQueries(query: string, region: string): Promise<TrendsDataPoint[]>;
}
