import { Injectable, Logger } from '@nestjs/common';
import { TrendsDataPoint } from '@nexvideo/shared';
import { ITrendsPort } from '../interfaces/trends.port';
import { RequestRateLimiter } from '../utils/request-rate-limiter';

/**
 * Google Trends API response types (from google-trends-api)
 */
interface GoogleTrendsInterestOverTime {
  timelineData: Array<{
    time: string;
    value: number[];
    hasData: boolean[];
    isPartial?: boolean;
  }>;
}

interface GoogleTrendsRelatedQueries {
  relatedQueries: Array<{
    queries: Array<{
      query: string;
      value: number;
    }>;
  }>;
}

/**
 * Google Trends adapter using unofficial google-trends-api
 * Implements graceful degradation - returns empty arrays on failure
 */
@Injectable()
export class GoogleTrendsAdapter implements ITrendsPort {
  private readonly logger = new Logger(GoogleTrendsAdapter.name);
  private readonly rateLimiter = new RequestRateLimiter(1000); // 1 second minimum delay

  /**
   * Get interest over time for a search query
   * Returns empty array if service is unavailable
   */
  async getInterestOverTime(
    query: string,
    region: string,
  ): Promise<TrendsDataPoint[]> {
    try {
      await this.rateLimiter.waitIfNeeded();

      this.logger.debug(
        `Fetching interest over time for query: "${query}" in region: ${region}`,
      );

      const result = await this.fetchInterestOverTime(query, region);

      if (!result) {
        return [];
      }

      return this.parseInterestOverTimeResponse(result, query, region);
    } catch (error) {
      this.logger.warn(
        `Google Trends unavailable for query "${query}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      // Graceful fallback - return empty array instead of throwing
      return [];
    }
  }

  /**
   * Get related queries for a search term
   * Returns empty array if service is unavailable
   */
  async getRelatedQueries(
    query: string,
    region: string,
  ): Promise<TrendsDataPoint[]> {
    try {
      await this.rateLimiter.waitIfNeeded();

      this.logger.debug(
        `Fetching related queries for: "${query}" in region: ${region}`,
      );

      const result = await this.fetchRelatedQueries(query, region);

      if (!result) {
        return [];
      }

      return this.parseRelatedQueriesResponse(result, query, region);
    } catch (error) {
      this.logger.warn(
        `Google Trends unavailable for query "${query}": ${error instanceof Error ? error.message : 'Unknown error'}`,
      );
      // Graceful fallback - return empty array instead of throwing
      return [];
    }
  }

  /**
   * Fetch interest over time data from Google Trends
   * This would be replaced with actual google-trends-api call in production
   */
  private async fetchInterestOverTime(
    query: string,
    region: string,
  ): Promise<GoogleTrendsInterestOverTime | null> {
    // In production, this would use:
    // const googleTrends = require('google-trends-api');
    // return googleTrends.interestOverTime({ keyword: query, startTime: new Date(...) })
    //
    // For now, we return null to be mocked in tests
    void query;
    void region;
    return null;
  }

  /**
   * Fetch related queries from Google Trends
   * This would be replaced with actual google-trends-api call in production
   */
  private async fetchRelatedQueries(
    query: string,
    region: string,
  ): Promise<GoogleTrendsRelatedQueries | null> {
    // In production, this would use:
    // const googleTrends = require('google-trends-api');
    // return googleTrends.relatedQueries({ keyword: query, startTime: new Date(...) })
    //
    // For now, we return null to be mocked in tests
    void query;
    void region;
    return null;
  }

  /**
   * Parse interest over time response into TrendsDataPoint array
   */
  private parseInterestOverTimeResponse(
    response: GoogleTrendsInterestOverTime,
    query: string,
    region: string,
  ): TrendsDataPoint[] {
    const { timelineData } = response;

    if (!timelineData || timelineData.length === 0) {
      return [];
    }

    return timelineData.map((dataPoint) => {
      const timestamp = new Date(parseInt(dataPoint.time, 10) * 1000);
      const interest = dataPoint.value[0] || 0;

      return {
        timestamp,
        term: query,
        interest,
        region,
      };
    });
  }

  /**
   * Parse related queries response into TrendsDataPoint array
   */
  private parseRelatedQueriesResponse(
    response: GoogleTrendsRelatedQueries,
    _parentQuery: string,
    region: string,
  ): TrendsDataPoint[] {
    const { relatedQueries } = response;

    if (!relatedQueries || relatedQueries.length === 0) {
      return [];
    }

    const dataPoints: TrendsDataPoint[] = [];

    for (const queryGroup of relatedQueries) {
      if (!queryGroup.queries || queryGroup.queries.length === 0) {
        continue;
      }

      for (const relatedQuery of queryGroup.queries) {
        dataPoints.push({
          timestamp: new Date(),
          term: relatedQuery.query,
          interest: relatedQuery.value,
          region,
        });
      }
    }

    return dataPoints;
  }
}
