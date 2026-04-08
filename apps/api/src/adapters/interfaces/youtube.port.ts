import { YouTubeVideo } from '@nexcript/shared';

/**
 * Port interface for YouTube API integration
 * Defines the contract for YouTube data operations
 */
export interface IYouTubePort {
  /**
   * Search for videos on YouTube
   * @param query Search query term
   * @param maxResults Maximum number of results to return (default: 10)
   * @returns Array of YouTubeVideo objects matching the search
   * @throws {YouTubeApiError} If API call fails or quota is exceeded
   */
  searchVideos(query: string, maxResults?: number): Promise<YouTubeVideo[]>;

  /**
   * Get detailed statistics for a specific video
   * @param videoId YouTube video ID
   * @returns YouTubeVideo object with stats (views, likes, comments)
   * @throws {YouTubeApiError} If video not found or API call fails
   */
  getVideoStats(videoId: string): Promise<YouTubeVideo>;
}
