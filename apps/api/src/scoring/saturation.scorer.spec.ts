import { Test, TestingModule } from '@nestjs/testing';
import { SaturationScorer } from './saturation.scorer';
import {
  YouTubeVideo,
  NicheCategory,
  Platform,
  ScoreClassification,
} from '@nexvideo/shared';

describe('SaturationScorer', () => {
  let scorer: SaturationScorer;
  let mockRedis: any;
  let mockYouTubePort: any;

  beforeEach(async () => {
    mockRedis = {
      get: jest.fn(),
      setex: jest.fn(),
      del: jest.fn(),
      keys: jest.fn(),
    };

    mockYouTubePort = {
      searchVideos: jest.fn(),
      getVideoStats: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SaturationScorer,
        { provide: 'REDIS_INSTANCE', useValue: mockRedis },
        { provide: 'IYouTubePort', useValue: mockYouTubePort },
      ],
    }).compile();

    scorer = module.get<SaturationScorer>(SaturationScorer);
  });

  describe('calculateDimensions', () => {
    it('should throw error if keyword is missing', async () => {
      await expect(scorer.calculateDimensions({ geo: 'US' })).rejects.toThrow(
        'SaturationScorer requires "keyword" and "geo" in input',
      );
    });

    it('should throw error if geo is missing', async () => {
      await expect(
        scorer.calculateDimensions({ keyword: 'test' }),
      ).rejects.toThrow(
        'SaturationScorer requires "keyword" and "geo" in input',
      );
    });

    it('should return cached result if available', async () => {
      const cached = {
        dimension1: 75,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };
      mockRedis.get.mockResolvedValueOnce(JSON.stringify(cached));

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result).toEqual(cached);
      expect(mockRedis.get).toHaveBeenCalledWith('saturation:test:US');
      expect(mockYouTubePort.searchVideos).not.toHaveBeenCalled();
    });

    it('should compute saturation score and cache result', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(10, 'now');
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBeGreaterThanOrEqual(0);
      expect(result.dimension1).toBeLessThanOrEqual(100);
      expect(mockRedis.setex).toHaveBeenCalledWith(
        'saturation:test:US',
        3600,
        expect.any(String),
      );
    });
  });

  describe('calculateScore', () => {
    it('should return PUBLISH classification for score >= 75', () => {
      const dimensions = {
        dimension1: 75,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };

      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBe(75);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('should return EVALUATE classification for score between 50-74', () => {
      const dimensions = {
        dimension1: 60,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };

      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBe(60);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('should return AVOID classification for score < 50', () => {
      const dimensions = {
        dimension1: 40,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };

      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBe(40);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });
  });

  describe('clearCache', () => {
    it('should clear specific cache entry when cacheKey provided', async () => {
      mockRedis.del.mockResolvedValueOnce(1);

      await scorer.clearCache('test:US');

      expect(mockRedis.del).toHaveBeenCalledWith('saturation:test:US');
    });

    it('should clear all saturation cache entries when no cacheKey provided', async () => {
      mockRedis.keys.mockResolvedValueOnce([
        'saturation:test1:US',
        'saturation:test2:BR',
      ]);
      mockRedis.del.mockResolvedValueOnce(2);

      await scorer.clearCache();

      expect(mockRedis.keys).toHaveBeenCalledWith('saturation:*');
      expect(mockRedis.del).toHaveBeenCalledWith(
        'saturation:test1:US',
        'saturation:test2:BR',
      );
    });

    it('should handle empty cache keys array', async () => {
      mockRedis.keys.mockResolvedValueOnce([]);

      await scorer.clearCache();

      expect(mockRedis.keys).toHaveBeenCalledWith('saturation:*');
      expect(mockRedis.del).not.toHaveBeenCalled();
    });
  });

  describe('saturation score computation', () => {
    it('should return fallback score if YouTube returns no videos', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce([]);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50); // Fallback score
    });

    it('should return fallback score if YouTube throws error', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockRejectedValueOnce(
        new Error('API Error'),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50); // Fallback score
    });

    it('should penalize recent videos (all videos published today)', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(10, 'now');
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      // Base 100 - 10 (recent penalty) = 90
      // No large channels, no old videos in top 10
      expect(result.dimension1).toBeLessThanOrEqual(90);
    });

    it('should penalize large channels (>100k views)', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      // Create recent videos with large channels to see actual penalty
      const videos = createMockVideos(10, 'now', 150000); // Recent + large channel views
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      // Base 100 - 10 (recent) - 20 (large channels) = 70
      expect(result.dimension1).toBeLessThanOrEqual(70);
    });

    it('should bonus old videos in top 10', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(10, '60-days-ago', 50000);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      // Old videos (>30 days) get bonus +2 per video in top 10
      // Score should be higher due to opportunity (older content still ranking)
      expect(result.dimension1).toBeGreaterThan(50);
    });

    it('should calculate mixed saturation (recent + old videos)', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = [
        ...createMockVideos(5, 'now', 100000), // Recent + large channels
        ...createMockVideos(5, '60-days-ago', 50000), // Old videos
      ];
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      // Should be balanced between penalties and bonuses
      expect(result.dimension1).toBeGreaterThanOrEqual(0);
      expect(result.dimension1).toBeLessThanOrEqual(100);
    });

    it('should handle edge case: all 20 recent videos with large channels', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(20, 'now', 200000);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      // Base 100 - 20 (max recent) - 40 (max large channels) = 40
      expect(result.dimension1).toBeLessThanOrEqual(40);
    });

    it('should clamp score to 0-100 range', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(10, '60-days-ago', 50000);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBeGreaterThanOrEqual(0);
      expect(result.dimension1).toBeLessThanOrEqual(100);
    });

    it('should cache result with correct TTL', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(5, '30-days-ago', 50000);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockRedis.setex.mockResolvedValueOnce('OK');

      await scorer.calculateDimensions({
        keyword: 'python',
        geo: 'BR',
      });

      expect(mockRedis.setex).toHaveBeenCalledWith(
        'saturation:python:BR',
        3600, // 1 hour TTL
        expect.any(String),
      );
    });
  });

  describe('weight validation', () => {
    it('should use dimension1 weight of 1 and others as 0', () => {
      const dimensions = {
        dimension1: 60,
        dimension2: 80,
        dimension3: 70,
        dimension4: 90,
      };

      const result = scorer.calculateScore(dimensions);

      expect(result.weights).toEqual({
        dimension1: 1,
        dimension2: 0,
        dimension3: 0,
        dimension4: 0,
      });
      expect(result.score).toBe(60); // Only dimension1 matters
    });
  });
});

/**
 * Helper function to create mock videos
 */
function createMockVideos(
  count: number,
  dateType: 'now' | '30-days-ago' | '60-days-ago',
  views: number = 50000,
): YouTubeVideo[] {
  const now = new Date();
  let publishedAt = now;

  if (dateType === '30-days-ago') {
    publishedAt = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
  } else if (dateType === '60-days-ago') {
    publishedAt = new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000);
  }

  return Array.from({ length: count }, (_, i) => ({
    videoId: `video-${i}`,
    title: `Test Video ${i}`,
    description: 'Test description',
    thumbnailUrl: 'https://example.com/thumb.jpg',
    url: `https://youtube.com/watch?v=video-${i}`,
    publishedAt,
    duration: 600,
    views,
    likes: Math.floor(views * 0.05),
    comments: Math.floor(views * 0.01),
    niche: NicheCategory.FINANCE,
    platform: Platform.YOUTUBE,
  }));
}
