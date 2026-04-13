import { ConfigService } from '@nestjs/config';
import { PexelsAdapter } from './pexels.adapter';
import { ICachePort } from '../../cache/interfaces/cache.port';

describe('PexelsAdapter', () => {
  let adapter: PexelsAdapter;
  let configService: Partial<ConfigService>;
  let cachePort: Partial<ICachePort>;

  beforeEach(() => {
    configService = {
      get: jest.fn((key: string) => {
        if (key === 'PEXELS_API_KEY') {
          return 'test-pexels-key';
        }
        return undefined;
      }),
    };

    cachePort = {
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn().mockResolvedValue(undefined),
    };

    adapter = new PexelsAdapter(
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
        page: 1,
        per_page: 15,
        total_results: 100,
        photos: [
          {
            id: 1,
            width: 1920,
            height: 1080,
            url: 'https://example.com',
            photographer: 'John Doe',
            photographer_url: 'https://example.com',
            photographer_id: 1,
            avg_color: '#333',
            src: {
              original: 'https://example.com/full.jpg',
              large2x: 'https://example.com/large2x.jpg',
              large: 'https://example.com/large.jpg',
              medium: 'https://example.com/medium.jpg',
              small: 'https://example.com/small.jpg',
              portrait: 'https://example.com/portrait.jpg',
              landscape: 'https://example.com/landscape.jpg',
              tiny: 'https://example.com/tiny.jpg',
            },
            liked: false,
            alt: 'test',
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
        url: 'https://example.com/full.jpg',
        thumbnailUrl: 'https://example.com/medium.jpg',
        provider: 'pexels',
        license: 'commercial',
        type: 'image',
      });
    });

    it('should cache results for 6 hours', async () => {
      const mockResponse = {
        page: 1,
        per_page: 15,
        total_results: 0,
        photos: [],
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
          provider: 'pexels' as const,
          license: 'commercial' as const,
          type: 'image' as const,
        },
      ];

      (cachePort.get as jest.Mock).mockResolvedValueOnce(cachedResults);

      const result = await adapter.searchImages('cached query', 1);

      expect(result).toEqual(cachedResults);
      expect(global.fetch).not.toHaveBeenCalled();
    });

    it('should include authorization header in request', async () => {
      const mockResponse = { page: 1, per_page: 15, total_results: 0, photos: [] };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('test', 1);

      const fetchCall = (global.fetch as jest.Mock).mock.calls[0];
      expect(fetchCall[1].headers.Authorization).toBe('test-pexels-key');
    });

    it('should throw error on API failure', async () => {
      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: false,
        statusText: 'Unauthorized',
      } as Response);

      await expect(adapter.searchImages('test')).rejects.toThrow(
        'Pexels API error',
      );
    });
  });

  describe('searchVideos', () => {
    it('should fetch videos and return formatted assets', async () => {
      const mockResponse = {
        page: 1,
        per_page: 15,
        total_results: 100,
        videos: [
          {
            id: 1,
            width: 1920,
            height: 1080,
            duration: 120,
            full_res: true,
            tags: ['test'],
            url: 'https://example.com',
            image: 'https://example.com/thumb.jpg',
            video_files: [
              {
                id: 1,
                quality: 'hd',
                type: 'video/mp4',
                width: 1920,
                height: 1080,
                link: 'https://example.com/hd.mp4',
              },
            ],
            video_pictures: [],
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
        url: 'https://example.com/hd.mp4',
        thumbnailUrl: 'https://example.com/thumb.jpg',
        provider: 'pexels',
        license: 'commercial',
        type: 'video',
        duration: 120,
      });
    });

    it('should prefer HD video quality', async () => {
      const mockResponse = {
        page: 1,
        per_page: 15,
        total_results: 1,
        videos: [
          {
            id: 1,
            width: 1920,
            height: 1080,
            duration: 60,
            full_res: true,
            tags: [],
            url: 'https://example.com',
            image: 'https://example.com/thumb.jpg',
            video_files: [
              {
                id: 2,
                quality: 'sd',
                type: 'video/mp4',
                width: 640,
                height: 360,
                link: 'https://example.com/sd.mp4',
              },
              {
                id: 1,
                quality: 'hd',
                type: 'video/mp4',
                width: 1920,
                height: 1080,
                link: 'https://example.com/hd.mp4',
              },
            ],
            video_pictures: [],
          },
        ],
      };

      global.fetch = jest.fn().mockResolvedValueOnce({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      const result = await adapter.searchVideos('test', 1);

      expect(result[0].url).toBe('https://example.com/hd.mp4');
    });
  });

  describe('cache key generation', () => {
    it('should generate consistent cache keys', async () => {
      const mockResponse = { page: 1, per_page: 15, total_results: 0, photos: [] };
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

    it('should generate different keys for different queries and pages', async () => {
      const mockResponse = { page: 1, per_page: 15, total_results: 0, photos: [] };
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      } as Response);

      await adapter.searchImages('query1', 1);
      const key1 = (cachePort.set as jest.Mock).mock.calls[0][0];

      await adapter.searchImages('query2', 1);
      const key2 = (cachePort.set as jest.Mock).mock.calls[1][0];

      await adapter.searchImages('query1', 2);
      const key3 = (cachePort.set as jest.Mock).mock.calls[2][0];

      expect(key1).not.toBe(key2);
      expect(key1).not.toBe(key3);
    });
  });
});
