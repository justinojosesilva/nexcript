import { DemandScorer } from './demand.scorer';
import { ScoreClassification } from '@nexcript/shared';
import type { IYouTubePort } from '../adapters/interfaces/youtube.port';
import type { ITrendsPort } from '../adapters/interfaces/trends.port';
import Redis from 'ioredis';

describe('DemandScorer', () => {
  let scorer: DemandScorer;
  let redis: Redis;
  let youtubePort: jest.Mocked<IYouTubePort>;
  let trendsPort: jest.Mocked<ITrendsPort>;

  const makeTrendsDataPoint = (interest: number, daysAgo: number) => ({
    timestamp: new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000),
    term: 'test',
    interest,
    region: 'BR',
  });

  const makeYouTubeVideo = (views: number) => ({
    videoId: `vid_${views}`,
    title: 'Test Video',
    description: 'Test',
    thumbnailUrl: 'http://example.com/thumb.jpg',
    url: `https://www.youtube.com/watch?v=vid_${views}`,
    publishedAt: new Date(),
    duration: 600,
    views,
    likes: Math.floor(views * 0.05),
    comments: Math.floor(views * 0.01),
    niche: 'other' as any,
    platform: 'youtube' as any,
  });

  beforeEach(() => {
    redis = {
      get: jest.fn().mockResolvedValue(null),
      setex: jest.fn().mockResolvedValue('OK'),
      del: jest.fn().mockResolvedValue(1),
      keys: jest.fn().mockResolvedValue([]),
    } as unknown as Redis;

    youtubePort = {
      searchVideos: jest.fn(),
      getVideoStats: jest.fn(),
    };

    trendsPort = {
      getInterestOverTime: jest.fn(),
      getRelatedQueries: jest.fn(),
    };

    scorer = new DemandScorer(redis, youtubePort, trendsPort);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('calculateDimensions', () => {
    it('should throw if keyword is missing', async () => {
      await expect(scorer.calculateDimensions({ geo: 'BR' })).rejects.toThrow(
        'DemandScorer requires "keyword" and "geo" in input',
      );
    });

    it('should throw if geo is missing', async () => {
      await expect(
        scorer.calculateDimensions({ keyword: 'bitcoin' }),
      ).rejects.toThrow('DemandScorer requires "keyword" and "geo" in input');
    });

    it('should return cached result if available', async () => {
      const cachedDimensions = {
        dimension1: 80,
        dimension2: 0,
        dimension3: 60,
        dimension4: 70,
      };

      (redis.get as jest.Mock).mockResolvedValueOnce(
        JSON.stringify(cachedDimensions),
      );

      const result = await scorer.calculateDimensions({
        keyword: 'bitcoin',
        geo: 'BR',
      });

      expect(result).toEqual(cachedDimensions);
      expect(youtubePort.searchVideos).not.toHaveBeenCalled();
      expect(trendsPort.getInterestOverTime).not.toHaveBeenCalled();
    });

    it('should compute and cache dimensions when not cached', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(80, 28),
        makeTrendsDataPoint(82, 21),
        makeTrendsDataPoint(85, 14),
        makeTrendsDataPoint(88, 7),
      ]);

      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(1_000_000)]);

      const result = await scorer.calculateDimensions({
        keyword: 'bitcoin',
        geo: 'BR',
      });

      expect(result.dimension1).toBeGreaterThan(0);
      expect(result.dimension2).toBe(0);
      expect(result.dimension3).toBe(100); // 1M views
      expect(redis.setex).toHaveBeenCalledWith(
        'demand:bitcoin:BR',
        6 * 60 * 60,
        expect.any(String),
      );
    });

    it('should use correct cache key format demand:{keyword}:{geo}', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(50, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(100_000)]);

      await scorer.calculateDimensions({ keyword: 'bitcoin', geo: 'BR' });

      expect(redis.get).toHaveBeenCalledWith('demand:bitcoin:BR');
      expect(redis.setex).toHaveBeenCalledWith(
        'demand:bitcoin:BR',
        expect.any(Number),
        expect.any(String),
      );
    });

    it('should use TTL of 6 hours (21600 seconds)', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(60, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(500_000)]);

      await scorer.calculateDimensions({ keyword: 'test', geo: 'US' });

      expect(redis.setex).toHaveBeenCalledWith(
        'demand:test:US',
        21600,
        expect.any(String),
      );
    });

    it('should return fallback 50 for trends if Trends unavailable', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([]); // empty = unavailable
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(1_000_000)]);

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'BR',
      });

      expect(result.dimension1).toBe(50); // Trends fallback
    });

    it('should return fallback 50 for YouTube if no results', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(70, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([]); // empty = unavailable

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'BR',
      });

      expect(result.dimension3).toBe(50); // YouTube fallback
    });

    it('should return fallback 50 for momentum if insufficient trends data', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(70, 7),
      ]); // only 1 data point
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(100_000)]);

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'BR',
      });

      expect(result.dimension4).toBe(50); // Momentum fallback
    });

    it('should return all fallbacks (50) when both services fail', async () => {
      trendsPort.getInterestOverTime.mockRejectedValue(
        new Error('Service down'),
      );
      youtubePort.searchVideos.mockRejectedValue(new Error('Service down'));

      const result = await scorer.calculateDimensions({
        keyword: 'test',
        geo: 'BR',
      });

      expect(result.dimension1).toBe(50);
      expect(result.dimension2).toBe(0);
      expect(result.dimension3).toBe(50);
      expect(result.dimension4).toBe(50);
    });
  });

  describe('calculateScore', () => {
    it('should combine dimensions with correct weights: Trends 40%, YouTube 35%, Momentum 25%', () => {
      // dimension1 (Trends 40%) = 100, dimension2 = 0 (unused), dimension3 (YouTube 35%) = 100, dimension4 (Momentum 25%) = 100
      const result = scorer.calculateScore({
        dimension1: 100,
        dimension2: 0,
        dimension3: 100,
        dimension4: 100,
      });

      // D1×0.40 + (100-D2)×0.00 + D3×0.35 + D4×0.25 = 100×0.40 + 0 + 100×0.35 + 100×0.25 = 100
      expect(result.score).toBe(100);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('should return score of 50 with all fallback (neutral) dimensions', () => {
      const result = scorer.calculateScore({
        dimension1: 50,
        dimension2: 0,
        dimension3: 50,
        dimension4: 50,
      });

      // 50×0.40 + 0 + 50×0.35 + 50×0.25 = 20 + 17.5 + 12.5 = 50
      expect(result.score).toBe(50);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('should classify high score as PUBLISH', () => {
      const result = scorer.calculateScore({
        dimension1: 90,
        dimension2: 0,
        dimension3: 90,
        dimension4: 90,
      });

      expect(result.score).toBeGreaterThanOrEqual(75);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('should classify mid score as EVALUATE', () => {
      const result = scorer.calculateScore({
        dimension1: 60,
        dimension2: 0,
        dimension3: 60,
        dimension4: 60,
      });

      // 60×0.40 + 0 + 60×0.35 + 60×0.25 = 24 + 21 + 15 = 60
      expect(result.score).toBe(60);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('should classify low score as AVOID', () => {
      const result = scorer.calculateScore({
        dimension1: 30,
        dimension2: 0,
        dimension3: 30,
        dimension4: 30,
      });

      // 30×0.40 + 0 + 30×0.35 + 30×0.25 = 12 + 10.5 + 7.5 = 30
      expect(result.score).toBe(30);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });

    it('should include weights and dimensionScores in result', () => {
      const dimensions = {
        dimension1: 70,
        dimension2: 0,
        dimension3: 70,
        dimension4: 70,
      };

      const result = scorer.calculateScore(dimensions);

      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('classification');
      expect(result).toHaveProperty('weights');
      expect(result).toHaveProperty('dimensionScores');
      expect(result.dimensionScores).toEqual(dimensions);
      expect(result.weights.dimension1).toBe(0.4);
      expect(result.weights.dimension2).toBe(0.0);
      expect(result.weights.dimension3).toBe(0.35);
      expect(result.weights.dimension4).toBe(0.25);
    });
  });

  describe('clearCache', () => {
    it('should clear specific cache key', async () => {
      await scorer.clearCache('bitcoin:BR');

      expect(redis.del).toHaveBeenCalledWith('demand:bitcoin:BR');
    });

    it('should clear all demand cache when no key provided', async () => {
      (redis.keys as jest.Mock).mockResolvedValueOnce([
        'demand:bitcoin:BR',
        'demand:ethereum:US',
      ]);

      await scorer.clearCache();

      expect(redis.keys).toHaveBeenCalledWith('demand:*');
      expect(redis.del).toHaveBeenCalledWith(
        'demand:bitcoin:BR',
        'demand:ethereum:US',
      );
    });

    it('should not call del when no keys exist', async () => {
      (redis.keys as jest.Mock).mockResolvedValueOnce([]);

      await scorer.clearCache();

      expect(redis.del).not.toHaveBeenCalled();
    });
  });

  describe('normalizeViewsLogarithmically', () => {
    it('should return 100 for 1M views', () => {
      const score = DemandScorer.normalizeViewsLogarithmically(1_000_000);
      expect(score).toBeCloseTo(100, 1);
    });

    it('should return ~33 for 10k views', () => {
      const score = DemandScorer.normalizeViewsLogarithmically(10_000);
      expect(score).toBeCloseTo(33, 1);
    });

    it('should return 0 for 0 or negative views', () => {
      expect(DemandScorer.normalizeViewsLogarithmically(0)).toBe(0);
      expect(DemandScorer.normalizeViewsLogarithmically(-100)).toBe(0);
    });

    it('should never exceed 100', () => {
      expect(DemandScorer.normalizeViewsLogarithmically(100_000_000)).toBe(100);
    });

    it('should return ~66 for 100k views', () => {
      const score = DemandScorer.normalizeViewsLogarithmically(100_000);
      expect(score).toBeCloseTo(66.5, 0);
    });

    it('should be monotonically increasing with views', () => {
      const score1k = DemandScorer.normalizeViewsLogarithmically(1_000);
      const score10k = DemandScorer.normalizeViewsLogarithmically(10_000);
      const score100k = DemandScorer.normalizeViewsLogarithmically(100_000);
      const score1m = DemandScorer.normalizeViewsLogarithmically(1_000_000);

      expect(score1k).toBeLessThan(score10k);
      expect(score10k).toBeLessThan(score100k);
      expect(score100k).toBeLessThan(score1m);
    });
  });

  describe('computeDirectScore', () => {
    it('should correctly combine Trends 40%, YouTube 35%, Momentum 25%', () => {
      const score = DemandScorer.computeDirectScore(80, 60, 70);
      // 80×0.40 + 60×0.35 + 70×0.25 = 32 + 21 + 17.5 = 70.5
      expect(score).toBeCloseTo(70.5, 1);
    });

    it('should return 100 when all inputs are 100', () => {
      expect(DemandScorer.computeDirectScore(100, 100, 100)).toBe(100);
    });

    it('should return 50 when all inputs are 50', () => {
      expect(DemandScorer.computeDirectScore(50, 50, 50)).toBe(50);
    });

    it('should clamp score between 0 and 100', () => {
      expect(DemandScorer.computeDirectScore(0, 0, 0)).toBe(0);
      expect(DemandScorer.computeDirectScore(100, 100, 100)).toBe(100);
    });
  });

  describe('classifyScore', () => {
    it('should classify >= 75 as PUBLISH', () => {
      expect(DemandScorer.classifyScore(75)).toBe(ScoreClassification.PUBLISH);
      expect(DemandScorer.classifyScore(100)).toBe(ScoreClassification.PUBLISH);
    });

    it('should classify 50-74 as EVALUATE', () => {
      expect(DemandScorer.classifyScore(50)).toBe(ScoreClassification.EVALUATE);
      expect(DemandScorer.classifyScore(74)).toBe(ScoreClassification.EVALUATE);
    });

    it('should classify < 50 as AVOID', () => {
      expect(DemandScorer.classifyScore(0)).toBe(ScoreClassification.AVOID);
      expect(DemandScorer.classifyScore(49)).toBe(ScoreClassification.AVOID);
    });
  });

  describe('momentum calculation', () => {
    it('should return > 50 for growing trend', async () => {
      // Older data: low interest, Recent data: higher interest
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(20, 56),
        makeTrendsDataPoint(22, 49),
        makeTrendsDataPoint(21, 42),
        makeTrendsDataPoint(23, 35),
        makeTrendsDataPoint(50, 28),
        makeTrendsDataPoint(60, 21),
        makeTrendsDataPoint(70, 14),
        makeTrendsDataPoint(80, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(100_000)]);

      const result = await scorer.calculateDimensions({
        keyword: 'growing',
        geo: 'BR',
      });

      expect(result.dimension4).toBeGreaterThan(50);
    });

    it('should return < 50 for declining trend', async () => {
      // Older data: high interest, Recent data: lower interest
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(80, 56),
        makeTrendsDataPoint(75, 49),
        makeTrendsDataPoint(78, 42),
        makeTrendsDataPoint(77, 35),
        makeTrendsDataPoint(30, 28),
        makeTrendsDataPoint(25, 21),
        makeTrendsDataPoint(20, 14),
        makeTrendsDataPoint(22, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(100_000)]);

      const result = await scorer.calculateDimensions({
        keyword: 'declining',
        geo: 'BR',
      });

      expect(result.dimension4).toBeLessThan(50);
    });

    it('should return ~50 for stable trend', async () => {
      // Both periods same interest
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(60, 56),
        makeTrendsDataPoint(60, 49),
        makeTrendsDataPoint(60, 42),
        makeTrendsDataPoint(60, 35),
        makeTrendsDataPoint(60, 28),
        makeTrendsDataPoint(60, 21),
        makeTrendsDataPoint(60, 14),
        makeTrendsDataPoint(60, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([makeYouTubeVideo(100_000)]);

      const result = await scorer.calculateDimensions({
        keyword: 'stable',
        geo: 'BR',
      });

      expect(result.dimension4).toBeCloseTo(50, 1);
    });
  });

  describe('integration: full score pipeline', () => {
    it('should produce high demand score for trending keyword with viral videos', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([
        makeTrendsDataPoint(80, 56),
        makeTrendsDataPoint(82, 49),
        makeTrendsDataPoint(85, 42),
        makeTrendsDataPoint(88, 35),
        makeTrendsDataPoint(90, 28),
        makeTrendsDataPoint(92, 21),
        makeTrendsDataPoint(95, 14),
        makeTrendsDataPoint(98, 7),
      ]);
      youtubePort.searchVideos.mockResolvedValue([
        makeYouTubeVideo(5_000_000),
        makeYouTubeVideo(3_000_000),
        makeYouTubeVideo(2_000_000),
      ]);

      const dimensions = await scorer.calculateDimensions({
        keyword: 'viral',
        geo: 'BR',
      });
      const result = scorer.calculateScore(dimensions);

      expect(result.score).toBeGreaterThan(75);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('should produce neutral score when all services return fallback', async () => {
      trendsPort.getInterestOverTime.mockResolvedValue([]);
      youtubePort.searchVideos.mockResolvedValue([]);

      const dimensions = await scorer.calculateDimensions({
        keyword: 'unknown',
        geo: 'BR',
      });
      const result = scorer.calculateScore(dimensions);

      // All fallbacks = 50 → score = 50
      expect(result.score).toBe(50);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });
  });
});
