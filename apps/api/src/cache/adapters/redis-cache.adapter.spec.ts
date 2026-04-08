/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { RedisCacheAdapter } from './redis-cache.adapter';

describe('RedisCacheAdapter', () => {
  let adapter: RedisCacheAdapter;
  let mockRedis: any;

  beforeEach(async () => {
    // Create mock Redis instance
    mockRedis = {
      ping: jest.fn().mockResolvedValue('PONG'),
      disconnect: jest.fn().mockResolvedValue(undefined),
      get: jest.fn(),
      setex: jest.fn().mockResolvedValue('OK'),
      set: jest.fn().mockResolvedValue('OK'),
      del: jest.fn().mockResolvedValue(1),
      keys: jest.fn(),
    };

    // Create a mock ConfigService
    const mockConfigService = {
      get: jest.fn((key: string) => {
        if (key === 'REDIS_URL') {
          return 'redis://localhost:6379';
        }
        return undefined;
      }),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        RedisCacheAdapter,
        {
          provide: ConfigService,
          useValue: mockConfigService,
        },
        {
          provide: 'REDIS_INSTANCE',
          useValue: mockRedis,
        },
      ],
    }).compile();

    adapter = module.get<RedisCacheAdapter>(RedisCacheAdapter);

    await adapter.onModuleInit();
  });

  afterEach(async () => {
    if (adapter) {
      await adapter.onModuleDestroy();
    }
  });

  describe('set and get', () => {
    it('should set and retrieve a value from cache', async () => {
      const key = 'test:key';
      const value = { id: 1, name: 'Test' };

      // Setup mock to return the value when requested
      mockRedis.get.mockResolvedValueOnce(JSON.stringify(value));

      await adapter.set(key, value);
      const result = await adapter.get(key);

      expect(mockRedis.setex).toHaveBeenCalled();
      expect(result).toEqual(value);
    });

    it('should return null for non-existent keys', async () => {
      mockRedis.get.mockResolvedValueOnce(null);

      const result = await adapter.get('non-existent-key');

      expect(result).toBeNull();
    });

    it('should respect custom TTL', async () => {
      const key = 'custom:key';
      const value = { data: 'test' };
      const customTtl = 3600;

      await adapter.set(key, value, customTtl);

      expect(mockRedis.setex).toHaveBeenCalledWith(
        key,
        customTtl,
        JSON.stringify(value),
      );
    });
  });

  describe('TTL configuration by prefix', () => {
    it('should apply 6-hour TTL for trends prefix', async () => {
      const key = 'trends:google-trends-data';
      const value = { trend: 'test' };

      await adapter.set(key, value);

      const expectedTtl = 6 * 60 * 60; // 6 hours
      expect(mockRedis.setex).toHaveBeenCalledWith(
        key,
        expectedTtl,
        JSON.stringify(value),
      );
    });

    it('should apply 1-hour TTL for youtube prefix', async () => {
      const key = 'youtube:video-data';
      const value = { videoId: '123' };

      await adapter.set(key, value);

      const expectedTtl = 1 * 60 * 60; // 1 hour
      expect(mockRedis.setex).toHaveBeenCalledWith(
        key,
        expectedTtl,
        JSON.stringify(value),
      );
    });

    it('should apply 24-hour TTL for openai prefix', async () => {
      const key = 'openai:script-generation';
      const value = { script: 'test' };

      await adapter.set(key, value);

      const expectedTtl = 24 * 60 * 60; // 24 hours
      expect(mockRedis.setex).toHaveBeenCalledWith(
        key,
        expectedTtl,
        JSON.stringify(value),
      );
    });

    it('should apply 7-day TTL for monetization prefix', async () => {
      const key = 'monetization:risk-score';
      const value = { score: 85 };

      await adapter.set(key, value);

      const expectedTtl = 7 * 24 * 60 * 60; // 7 days
      expect(mockRedis.setex).toHaveBeenCalledWith(
        key,
        expectedTtl,
        JSON.stringify(value),
      );
    });

    it('should apply default 1-hour TTL for unknown prefix', async () => {
      const key = 'unknown:data';
      const value = { data: 'test' };

      await adapter.set(key, value);

      const expectedTtl = 1 * 60 * 60; // 1 hour
      expect(mockRedis.setex).toHaveBeenCalledWith(
        key,
        expectedTtl,
        JSON.stringify(value),
      );
    });
  });

  describe('duplicate calls', () => {
    it('should return cached value on duplicate call', async () => {
      const key = 'api:results';
      const value = { result: 'data from api' };

      // First call - set the cache
      await adapter.set(key, value);

      // Mock Redis to return the cached value
      mockRedis.get.mockResolvedValueOnce(JSON.stringify(value));

      // Second call - should get from cache, not make another API call
      const cachedResult = await adapter.get(key);

      expect(cachedResult).toEqual(value);
      expect(mockRedis.get).toHaveBeenCalledWith(key);
    });
  });

  describe('delete', () => {
    it('should delete a key from cache', async () => {
      const key = 'test:key';

      await adapter.delete(key);

      expect(mockRedis.del).toHaveBeenCalledWith(key);
    });
  });

  describe('invalidateByPrefix', () => {
    it('should invalidate all keys with a given prefix', async () => {
      const prefix = 'trends:';
      const keys = [
        'trends:google-1',
        'trends:google-2',
        'trends:youtube-1',
      ];

      mockRedis.keys.mockResolvedValueOnce(keys);

      await adapter.invalidateByPrefix(prefix);

      expect(mockRedis.keys).toHaveBeenCalledWith(`${prefix}*`);
      expect(mockRedis.del).toHaveBeenCalledWith(...keys);
    });

    it('should handle empty prefix results gracefully', async () => {
      const prefix = 'nonexistent:';

      mockRedis.keys.mockResolvedValueOnce([]);

      await adapter.invalidateByPrefix(prefix);

      expect(mockRedis.keys).toHaveBeenCalledWith(`${prefix}*`);
      expect(mockRedis.del).not.toHaveBeenCalled();
    });
  });

  describe('error handling', () => {
    it('should handle get errors gracefully', async () => {
      const key = 'error:key';
      const error = new Error('Redis connection error');

      mockRedis.get.mockRejectedValueOnce(error);

      const result = await adapter.get(key);

      expect(result).toBeNull();
    });

    it('should handle set errors gracefully', async () => {
      const key = 'error:key';
      const value = { data: 'test' };
      const error = new Error('Redis connection error');

      mockRedis.setex.mockRejectedValueOnce(error);

      // Should not throw, just log error
      await expect(adapter.set(key, value)).resolves.not.toThrow();
    });

    it('should handle delete errors gracefully', async () => {
      const key = 'error:key';
      const error = new Error('Redis connection error');

      mockRedis.del.mockRejectedValueOnce(error);

      // Should not throw, just log error
      await expect(adapter.delete(key)).resolves.not.toThrow();
    });
  });
});
