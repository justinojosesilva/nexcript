/**
 * Custom error for YouTube API operations
 * Includes rate limit detection and clear messaging
 */
export class YouTubeApiError extends Error {
  readonly isRateLimited: boolean;
  readonly statusCode?: number;

  constructor(message: string, isRateLimited = false, statusCode?: number) {
    super(message);
    this.name = 'YouTubeApiError';
    this.isRateLimited = isRateLimited;
    this.statusCode = statusCode;

    // Maintain proper stack trace for where error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, YouTubeApiError);
    }
  }
}
