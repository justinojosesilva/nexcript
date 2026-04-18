import { MediaAsset } from '@nexvideo/shared';

/**
 * Port interface for Pexels API integration
 * Defines the contract for Pexels media operations
 */
export interface IPexelsPort {
  /**
   * Search for images on Pexels
   * @param query Search query term
   * @param page Page number for pagination (default: 1)
   * @returns Array of MediaAsset objects (images only)
   * @throws {PexelsApiError} If API call fails
   */
  searchImages(query: string, page?: number): Promise<MediaAsset[]>;

  /**
   * Search for videos on Pexels
   * @param query Search query term
   * @param page Page number for pagination (default: 1)
   * @returns Array of MediaAsset objects (videos only)
   * @throws {PexelsApiError} If API call fails
   */
  searchVideos(query: string, page?: number): Promise<MediaAsset[]>;
}

/**
 * Port interface for Pixabay API integration
 * Defines the contract for Pixabay media operations
 */
export interface IPixabayPort {
  /**
   * Search for images on Pixabay
   * @param query Search query term
   * @param page Page number for pagination (default: 1)
   * @returns Array of MediaAsset objects (images only)
   * @throws {PixabayApiError} If API call fails
   */
  searchImages(query: string, page?: number): Promise<MediaAsset[]>;

  /**
   * Search for videos on Pixabay
   * @param query Search query term
   * @param page Page number for pagination (default: 1)
   * @returns Array of MediaAsset objects (videos only)
   * @throws {PixabayApiError} If API call fails
   */
  searchVideos(query: string, page?: number): Promise<MediaAsset[]>;
}
