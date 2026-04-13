import { ConfigService } from '@nestjs/config';
import { PixabayAdapter } from './pixabay.adapter';
import { ICachePort } from '../../cache/interfaces/cache.port';

describe('PixabayAdapter', () => {
  let adapter: PixabayAdapter;
  let configService: Partial<ConfigService>;
  let cachePort: Partial<ICachePort>;

  beforeEach(() => {
    configService = {
      get: jest.fn((key: string) => {
        if (key === 'PIXABAY_API_KEY') {
          return 'test-pixabay-key';
        }
        return undefined;
      }),
    };

    cachePort = {
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn().mockResolvedValue(undefined),
    };

    adapter = new PixabayAdapter(
      configService as ConfigService,
      cachePort as ICachePort,
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('searchImages', () => {
    it('should fetch images and return formatted assets', async () => {
      const mockResponse = {
        total: 100,
        totalHits: 100,
        hits: [
          {
            id: 1,
            pageURL: 'https://example.com',
            type: 'photo',
            tags: 'test',
            previewURL: 'https://example.com/preview.jpg',
            previewWidth: 150,
            previewHeight: 150,
            webformatURL: 'https://example.com/webformat.jpg',
            webformatWidth: 640,
            webformatHeight: 640,
            largeImageURL: 'https://example.com/large.jpg',
            imageWidth: 1920,
            imageHeight: 1920,
            imageSize: 512000,
            views: 1000,
            downloads: 100,
            collections: 10,
            likes: 50,
            comments: 5,
            user_id: 1,
            user: 'testuser',
            userImageURL: 'https://example.com/user.jpg',
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const result = await adapter.searchImages('test query', 1);

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        id: '1',
        url: 'https://example.com/large.jpg',
        thumbnailUrl: 'https://example.com/webformat.jpg',
        provider: 'pixabay',
        license: 'commercial',
        type: 'image',
      });
    });

    it('should cache results for 6 hours', async () => {
      const mockResponse = {
        total: 0,
        totalHits: 0,
        hits: [],
      };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('query', 1);

      expect(cachePort.set).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(Array),
        6 * 60 * 60,
      );
    });

    it('should return cached results when available', async () => {
      const cachedResults = [
        {
          id: 'cached-1',
          url: 'https://cached.jpg',
          thumbnailUrl: 'https://cached-thumb.jpg',
          provider: 'pixabay' as const,
          license: 'commercial' as const,
          type: 'image' as const,
        },
      ];

      (cachePort.get as jest.Mock).mockResolvedValueOnce(cachedResults);

      const result = await adapter.searchImages('cached query', 1);

      expect(result).toEqual(cachedResults);
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('should include safesearch in request', async () => {
      const mockResponse = { total: 0, totalHits: 0, hits: [] };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('test', 1);

      const url = (global.fetch as jest.Mock).mock.calls[0][0] as string;
      expect(url).toContain('safesearch=true');
      expect(url).toContain('image_type=photo');
    });

    it('should throw error on API failure', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        statusText: 'Unauthorized',
      } as Response);

      await expect(adapter.searchImages('test')).rejects.toThrow(
        'Pixabay API error',
      );
    });
  });

  describe('searchVideos', () => {
    it('should fetch videos and return formatted assets', async () => {
      const mockResponse = {
        total: 100,
        totalHits: 100,
        hits: [
          {
            id: 1,
            pageURL: 'https://example.com',
            type: 'video',
            tags: 'test',
            duration: 120,
            videos: {
              large: {
                url: 'https://example.com/large.mp4',
                width: 1920,
                height: 1080,
                size: 5120000,
              },
              medium: {
                url: 'https://example.com/medium.mp4',
                width: 1280,
                height: 720,
                size: 2560000,
              },
            },
            thumbnail: 'https://example.com/thumb.jpg',
            views: 1000,
            downloads: 100,
            likes: 50,
            comments: 5,
            user_id: 1,
            user: 'testuser',
            userImageURL: 'https://example.com/user.jpg',
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const result = await adapter.searchVideos('test query', 1);

      expect(result).toHaveLength(1);
      expect(result[0]).toMatchObject({
        id: '1',
        url: 'https://example.com/large.mp4',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        provider: 'pixabay',
        license: 'commercial',
        type: 'video',
        duration: 120,
      });
    });

    it('should prefer largest video quality', async () => {
      const mockResponse = {
        total: 1,
        totalHits: 1,
        hits: [
          {
            id: 1,
            pageURL: 'https://example.com',
            type: 'video',
            tags: 'test',
            duration: 60,
            videos: {
              small: {
                url: 'https://example.com/small.mp4',
                width: 640,
                height: 360,
                size: 1024000,
              },
              large: {
                url: 'https://example.com/large.mp4',
                width: 1920,
                height: 1080,
                size: 5120000,
              },
            },
            thumbnail: 'https://example.com/thumb.jpg',
            views: 1000,
            downloads: 100,
            likes: 50,
            comments: 5,
            user_id: 1,
            user: 'testuser',
            userImageURL: 'https://example.com/user.jpg',
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const result = await adapter.searchVideos('test', 1);

      expect(result[0].url).toBe('https://example.com/large.mp4');
    });

    it('should handle missing video qualities gracefully', async () => {
      const mockResponse = {
        total: 1,
        totalHits: 1,
        hits: [
          {
            id: 1,
            pageURL: 'https://example.com',
            type: 'video',
            tags: 'test',
            duration: 60,
            videos: {
              tiny: {
                url: 'https://example.com/tiny.mp4',
                width: 320,
                height: 180,
                size: 256000,
              },
            },
            thumbnail: 'https://example.com/thumb.jpg',
            views: 1000,
            downloads: 100,
            likes: 50,
            comments: 5,
            user_id: 1,
            user: 'testuser',
            userImageURL: 'https://example.com/user.jpg',
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const result = await adapter.searchVideos('test', 1);

      expect(result[0].url).toBe('https://example.com/tiny.mp4');
    });
  });

  describe('request parameters', () => {
    it('should include API key and pagination in request', async () => {
      const mockResponse = { total: 0, totalHits: 0, hits: [] };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('test query', 3);

      const url = (global.fetch as jest.Mock).mock.calls[0][0] as string;
      expect(url).toContain('key=test-pixabay-key');
      expect(url).toContain('q=test+query');
      expect(url).toContain('page=3');
      expect(url).toContain('per_page=20');
    });
  });

  describe('cache key generation', () => {
    it('should generate consistent cache keys', async () => {
      const mockResponse = { total: 0, totalHits: 0, hits: [] };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('same query', 1);
      const firstCall = (cachePort.set as jest.Mock).mock.calls[0][0];

      jest.clearAllMocks();
      (cachePort.get as jest.Mock).mockResolvedValue(null);
      (cachePort.set as jest.Mock).mockResolvedValue(undefined);
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('same query', 1);
      const secondCall = (cachePort.set as jest.Mock).mock.calls[0][0];

      expect(firstCall).toBe(secondCall);
    });

    it('should generate different keys for different queries', async () => {
      const mockResponse = { total: 0, totalHits: 0, hits: [] };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('query1', 1);
      const key1 = (cachePort.set as jest.Mock).mock.calls[0][0];

      await adapter.searchImages('query2', 1);
      const key2 = (cachePort.set as jest.Mock).mock.calls[1][0];

      expect(key1).not.toBe(key2);
    });
  });
});
