import { Test, TestingModule } from '@nestjs/testing';
import { QualityGapScorer } from './quality-gap.scorer';
import { ScoreClassification, NicheCategory, Platform } from '@nexcript/shared';
import { YouTubeVideo } from '@nexcript/shared';

describe('QualityGapScorer', () => {
  let scorer: QualityGapScorer;
  let mockRedis: any;
  let mockYouTubePort: any;
  let mockOpenAIPort: any;

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

    mockOpenAIPort = {
      complete: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        QualityGapScorer,
        { provide: 'REDIS_INSTANCE', useValue: mockRedis },
        { provide: 'IYouTubePort', useValue: mockYouTubePort },
        { provide: 'IOpenAIPort', useValue: mockOpenAIPort },
      ],
    }).compile();

    scorer = module.get<QualityGapScorer>(QualityGapScorer);
  });

  describe('calculateDimensions', () => {
    it('should throw error if keyword is missing', async () => {
      await expect(scorer.calculateDimensions({ geo: 'US' })).rejects.toThrow(
        'QualityGapScorer requires "keyword" and "geo" in input',
      );
    });

    it('should throw error if geo is missing', async () => {
      await expect(
        scorer.calculateDimensions({ keyword: 'test' }),
      ).rejects.toThrow(
        'QualityGapScorer requires "keyword" and "geo" in input',
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
      // Cache key should use only keyword (not geo)
      expect(mockRedis.get).toHaveBeenCalledWith('quality-gap:test');
      expect(mockYouTubePort.searchVideos).not.toHaveBeenCalled();
      expect(mockOpenAIPort.complete).not.toHaveBeenCalled();
    });

    it('should compute gap score and cache with 24h TTL', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 70, gaps: [], summary: 'test' }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'python',
        geo: 'BR',
      });

      expect(result.dimension1).toBe(70);
      expect(mockRedis.setex).toHaveBeenCalledWith(
        'quality-gap:python',
        86400, // 24h TTL
        expect.any(String),
      );
    });

    it('should pass keyword and video data to OpenAI prompt', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      const videos = createMockVideos(3);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(videos);
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 65, gaps: [] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      await scorer.calculateDimensions({ keyword: 'invest', geo: 'US' });

      const promptArg = mockOpenAIPort.complete.mock.calls[0][0] as string;
      expect(promptArg).toContain('invest');
      expect(promptArg).toContain(videos[0].title);
    });

    it('should call OpenAI with max_tokens 500', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 60, gaps: [] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      await scorer.calculateDimensions({ keyword: 'test', geo: 'US' });

      expect(mockOpenAIPort.complete).toHaveBeenCalledWith(
        expect.any(String),
        500, // max_tokens
      );
    });

    it('should request 10 videos from YouTube', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(10));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 60, gaps: [] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      await scorer.calculateDimensions({ keyword: 'test', geo: 'US' });

      expect(mockYouTubePort.searchVideos).toHaveBeenCalledWith('test', 10);
    });
  });

  describe('calculateScore', () => {
    it('should return PUBLISH classification for score >= 75', () => {
      const dimensions = {
        dimension1: 80,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };
      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBe(80);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('should return EVALUATE classification for 50 <= score < 75', () => {
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
        dimension1: 30,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };
      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBe(30);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });

    it('should set dimension1 weight to 1 and others to 0', () => {
      const dimensions = {
        dimension1: 70,
        dimension2: 80,
        dimension3: 90,
        dimension4: 100,
      };
      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBe(70); // Only dimension1 matters
      expect(result.weights).toEqual({
        dimension1: 1,
        dimension2: 0,
        dimension3: 0,
        dimension4: 0,
      });
    });
  });

  describe('clearCache', () => {
    it('should clear specific keyword cache entry', async () => {
      mockRedis.del.mockResolvedValueOnce(1);

      await scorer.clearCache('python');

      expect(mockRedis.del).toHaveBeenCalledWith('quality-gap:python');
    });

    it('should clear all quality-gap cache entries when no key provided', async () => {
      mockRedis.keys.mockResolvedValueOnce([
        'quality-gap:python',
        'quality-gap:react',
      ]);
      mockRedis.del.mockResolvedValueOnce(2);

      await scorer.clearCache();

      expect(mockRedis.keys).toHaveBeenCalledWith('quality-gap:*');
      expect(mockRedis.del).toHaveBeenCalledWith(
        'quality-gap:python',
        'quality-gap:react',
      );
    });

    it('should not call del if no keys found', async () => {
      mockRedis.keys.mockResolvedValueOnce([]);

      await scorer.clearCache();

      expect(mockRedis.del).not.toHaveBeenCalled();
    });
  });

  describe('gap score computation — fallback behavior', () => {
    it('should return fallback score (50) if YouTube returns no videos', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce([]);
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50);
      expect(mockOpenAIPort.complete).not.toHaveBeenCalled();
    });

    it('should return fallback score (50) if YouTube throws', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockRejectedValueOnce(
        new Error('API quota exceeded'),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50);
    });

    it('should return fallback score (50) if OpenAI throws', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockRejectedValueOnce(
        new Error('OpenAI unavailable'),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50);
    });

    it('should return fallback score (50) if OpenAI returns invalid JSON', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce('not valid json {{{');
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50);
    });

    it('should return fallback score (50) if gapScore is missing from response', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ summary: 'No gapScore field here' }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(50);
    });
  });

  describe('gap score computation — score parsing', () => {
    it('should correctly parse gapScore of 80', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 80, gaps: ['gap1', 'gap2'] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(80);
    });

    it('should clamp gapScore above 100 to 100', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 150, gaps: [] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(100);
    });

    it('should clamp gapScore below 0 to 0', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: -20, gaps: [] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(0);
    });

    it('should return all 4 dimensions, with dimension2-4 as 50', async () => {
      mockRedis.get.mockResolvedValueOnce(null);
      mockYouTubePort.searchVideos.mockResolvedValueOnce(createMockVideos(5));
      mockOpenAIPort.complete.mockResolvedValueOnce(
        JSON.stringify({ gapScore: 72, gaps: [] }),
      );
      mockRedis.setex.mockResolvedValueOnce('OK');

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'US',
      });

      expect(result.dimension1).toBe(72);
      expect(result.dimension2).toBe(50);
      expect(result.dimension3).toBe(50);
      expect(result.dimension4).toBe(50);
    });
  });
});

function createMockVideos(count: number): YouTubeVideo[] {
  return Array.from({ length: count }, (_, i) => ({
    videoId: `vid-${i}`,
    title: `Test Video Title ${i}`,
    description: `Description for video ${i}`,
    thumbnailUrl: 'https://example.com/thumb.jpg',
    url: `https://youtube.com/watch?v=vid-${i}`,
    publishedAt: new Date(),
    duration: 600,
    views: 10000,
    likes: 500,
    comments: 100,
    niche: NicheCategory.FINANCE,
    platform: Platform.YOUTUBE,
  }));
}
