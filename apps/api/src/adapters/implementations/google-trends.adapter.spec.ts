import { GoogleTrendsAdapter } from './google-trends.adapter';
import { RequestRateLimiter } from '../utils/request-rate-limiter';

describe('GoogleTrendsAdapter', () => {
  let adapter: GoogleTrendsAdapter;

  beforeEach(() => {
    adapter = new GoogleTrendsAdapter();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getInterestOverTime', () => {
    it('should return interest data over time for a query', async () => {
      const mockResponse = {
        timelineData: [
          {
            time: '1609459200', // Jan 1, 2021
            value: [50],
            hasData: [true],
          },
          {
            time: '1609545600', // Jan 2, 2021
            value: [75],
            hasData: [true],
          },
          {
            time: '1609632000', // Jan 3, 2021
            value: [100],
            hasData: [true],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toHaveLength(3);
      expect(result[0]).toMatchObject({
        term: 'bitcoin',
        interest: 50,
        region: 'BR',
      });
      expect(result[1]).toMatchObject({
        term: 'bitcoin',
        interest: 75,
        region: 'BR',
      });
      expect(result[2]).toMatchObject({
        term: 'bitcoin',
        interest: 100,
        region: 'BR',
      });
    });

    it('should return empty array if API is unavailable', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockRejectedValueOnce(new Error('Connection refused'));

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should return empty array if response is null', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce(null);

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should return empty array if timelineData is empty', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce({ timelineData: [] });

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should handle different regions correctly', async () => {
      const mockResponse = {
        timelineData: [
          {
            time: '1609459200',
            value: [60],
            hasData: [true],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getInterestOverTime('iphone', 'US');

      expect(result[0]).toMatchObject({
        term: 'iphone',
        region: 'US',
      });
    });

    it('should convert Unix timestamps to Date objects', async () => {
      const mockResponse = {
        timelineData: [
          {
            time: '1609459200',
            value: [50],
            hasData: [true],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getInterestOverTime('test', 'BR');

      expect(result[0].timestamp).toBeInstanceOf(Date);
      expect(result[0].timestamp.getTime()).toBe(1609459200000);
    });
  });

  describe('getRelatedQueries', () => {
    it('should return related queries for a search term', async () => {
      const mockResponse = {
        relatedQueries: [
          {
            queries: [
              {
                query: 'bitcoin price',
                value: 90,
              },
              {
                query: 'bitcoin cash',
                value: 75,
              },
              {
                query: 'bitcoin mining',
                value: 60,
              },
            ],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getRelatedQueries('bitcoin', 'BR');

      expect(result).toHaveLength(3);
      expect(result[0]).toMatchObject({
        term: 'bitcoin price',
        interest: 90,
        region: 'BR',
      });
      expect(result[1]).toMatchObject({
        term: 'bitcoin cash',
        interest: 75,
        region: 'BR',
      });
      expect(result[2]).toMatchObject({
        term: 'bitcoin mining',
        interest: 60,
        region: 'BR',
      });
    });

    it('should return empty array if API is unavailable', async () => {
      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockRejectedValueOnce(new Error('Service error'));

      const result = await adapter.getRelatedQueries('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should return empty array if response is null', async () => {
      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValueOnce(null);

      const result = await adapter.getRelatedQueries('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should return empty array if relatedQueries is empty', async () => {
      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValueOnce({ relatedQueries: [] });

      const result = await adapter.getRelatedQueries('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should skip empty query groups', async () => {
      const mockResponse = {
        relatedQueries: [
          {
            queries: [
              {
                query: 'bitcoin price',
                value: 90,
              },
            ],
          },
          {
            queries: [],
          },
          {
            queries: [
              {
                query: 'bitcoin mining',
                value: 60,
              },
            ],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getRelatedQueries('bitcoin', 'BR');

      expect(result).toHaveLength(2);
      expect(result[0].term).toBe('bitcoin price');
      expect(result[1].term).toBe('bitcoin mining');
    });

    it('should use current date for related queries timestamp', async () => {
      const mockResponse = {
        relatedQueries: [
          {
            queries: [
              {
                query: 'bitcoin price',
                value: 90,
              },
            ],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValueOnce(mockResponse);

      const beforeTime = Date.now();
      const result = await adapter.getRelatedQueries('bitcoin', 'BR');
      const afterTime = Date.now();

      expect(result[0].timestamp.getTime()).toBeGreaterThanOrEqual(beforeTime);
      expect(result[0].timestamp.getTime()).toBeLessThanOrEqual(afterTime + 100);
    });
  });

  describe('rate limiting', () => {
    it('should enforce minimum 1 second delay between requests', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValue({ timelineData: [] });
      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValue({ relatedQueries: [] });

      const startTime = Date.now();

      // First request
      await adapter.getInterestOverTime('query1', 'BR');

      // Second request should wait at least 1 second
      await adapter.getRelatedQueries('query2', 'BR');

      const elapsedTime = Date.now() - startTime;

      expect(elapsedTime).toBeGreaterThanOrEqual(1000);
    });

    it('should not delay if requests are far apart', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValue({ timelineData: [] });

      // First request
      await adapter.getInterestOverTime('query1', 'BR');

      // Wait 2 seconds
      await new Promise((resolve) => setTimeout(resolve, 2000));

      const startTime = Date.now();

      // Second request should not wait
      await adapter.getInterestOverTime('query2', 'BR');

      const elapsedTime = Date.now() - startTime;

      expect(elapsedTime).toBeLessThan(500); // Should be quick
    });
  });

  describe('error handling', () => {
    it('should gracefully handle network errors', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockRejectedValueOnce(new Error('ECONNREFUSED'));

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should gracefully handle timeout errors', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockRejectedValueOnce(new Error('ETIMEDOUT'));

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toEqual([]);
    });

    it('should gracefully handle non-Error exceptions', async () => {
      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
         
        .mockRejectedValueOnce('unexpected string error');

      const result = await adapter.getInterestOverTime('bitcoin', 'BR');

      expect(result).toEqual([]);
    });
  });

  describe('data parsing', () => {
    it('should correctly parse all interest values', async () => {
      const mockResponse = {
        timelineData: [
          {
            time: '1609459200',
            value: [10],
            hasData: [true],
          },
          {
            time: '1609545600',
            value: [25],
            hasData: [true],
          },
          {
            time: '1609632000',
            value: [0],
            hasData: [true],
          },
          {
            time: '1609718400',
            value: [100],
            hasData: [true],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getInterestOverTime('test', 'BR');

      expect(result.map((d) => d.interest)).toEqual([10, 25, 0, 100]);
    });

    it('should handle missing values in value array', async () => {
      const mockResponse = {
        timelineData: [
          {
            time: '1609459200',
            value: [],
            hasData: [true],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchInterestOverTime')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getInterestOverTime('test', 'BR');

      expect(result[0].interest).toBe(0);
    });

    it('should flatten multiple query groups into single array', async () => {
      const mockResponse = {
        relatedQueries: [
          {
            queries: [
              { query: 'query1', value: 90 },
              { query: 'query2', value: 80 },
            ],
          },
          {
            queries: [
              { query: 'query3', value: 70 },
            ],
          },
        ],
      };

      jest
        .spyOn(adapter as any, 'fetchRelatedQueries')
        .mockResolvedValueOnce(mockResponse);

      const result = await adapter.getRelatedQueries('test', 'BR');

      expect(result).toHaveLength(3);
      expect(result.map((d) => d.term)).toEqual(['query1', 'query2', 'query3']);
    });
  });

  describe('RequestRateLimiter utility', () => {
    it('should enforce minimum delay between requests', async () => {
      const limiter = new RequestRateLimiter(500);

      const start1 = Date.now();
      await limiter.waitIfNeeded();
      const end1 = Date.now();

      const start2 = Date.now();
      await limiter.waitIfNeeded();
      const end2 = Date.now();

      // First request should be instant
      expect(end1 - start1).toBeLessThan(100);

      // Second request should wait at least 500ms
      expect(end2 - start2).toBeGreaterThanOrEqual(500);
    });

    it('should reset timer when reset() is called', async () => {
      const limiter = new RequestRateLimiter(500);

      await limiter.waitIfNeeded();
      limiter.reset();

      const start = Date.now();
      await limiter.waitIfNeeded();
      const end = Date.now();

      // Should be instant after reset
      expect(end - start).toBeLessThan(100);
    });

    it('should use default 1 second delay', async () => {
      const limiter = new RequestRateLimiter();

      await limiter.waitIfNeeded();

      const start = Date.now();
      await limiter.waitIfNeeded();
      const end = Date.now();

      expect(end - start).toBeGreaterThanOrEqual(1000);
    });
  });
});
