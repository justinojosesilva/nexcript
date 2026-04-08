import { Test, TestingModule } from '@nestjs/testing';
import { CacheTtsSynthesisUseCase } from './cache-tts-synthesis.use-case';
import { ICachePort } from '../../cache/interfaces/cache.port';
import { ITtsPort, SynthesizeInput } from '../../adapters/interfaces/tts.port';

describe('CacheTtsSynthesisUseCase', () => {
  let useCase: CacheTtsSynthesisUseCase;
  let cachePort: jest.Mocked<ICachePort>;
  let ttsPort: jest.Mocked<ITtsPort>;

  const mockSynthesisInput: SynthesizeInput & { scriptId: string } = {
    text: 'Test narration text',
    voiceId: 'voice-123',
    speed: 1.0,
    tone: 'professional',
    scriptId: 'script-1',
  };

  const mockSynthesisOutput = {
    audioUrl: 'https://example.com/audio.mp3',
    durationSec: 30,
    provider: 'elevenlabs',
    estimatedCostBrl: 0.5,
  };

  beforeEach(async () => {
    cachePort = {
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn().mockResolvedValue(undefined),
      delete: jest.fn().mockResolvedValue(undefined),
      invalidateByPrefix: jest.fn().mockResolvedValue(undefined),
    } as any;

    ttsPort = {
      synthesize: jest.fn().mockResolvedValue(mockSynthesisOutput),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CacheTtsSynthesisUseCase,
        {
          provide: 'ICachePort',
          useValue: cachePort,
        },
      ],
    }).compile();

    useCase = module.get<CacheTtsSynthesisUseCase>(CacheTtsSynthesisUseCase);
  });

  describe('synthesizeWithCache', () => {
    it('should return cached result on cache hit', async () => {
      const cachedResult = {
        audioUrl: 'https://cached.com/audio.mp3',
        durationSec: 30,
        provider: 'elevenlabs',
        estimatedCostBrl: 0.5,
      };

      cachePort.get.mockResolvedValueOnce(cachedResult);

      const result = await useCase.synthesizeWithCache(
        mockSynthesisInput,
        ttsPort,
      );

      expect(result.cacheHit).toBe(true);
      expect(result.output).toEqual(cachedResult);
      expect(ttsPort.synthesize).not.toHaveBeenCalled();
    });

    it('should synthesize and cache result on cache miss', async () => {
      cachePort.get.mockResolvedValueOnce(null); // Cache miss

      const result = await useCase.synthesizeWithCache(
        mockSynthesisInput,
        ttsPort,
      );

      expect(result.cacheHit).toBe(false);
      expect(result.output).toEqual(mockSynthesisOutput);
      expect(ttsPort.synthesize).toHaveBeenCalledWith(mockSynthesisInput);
      expect(cachePort.set).toHaveBeenCalledWith(
        expect.stringContaining('tts:script-1:voice-123'),
        expect.objectContaining({
          audioUrl: mockSynthesisOutput.audioUrl,
          durationSec: mockSynthesisOutput.durationSec,
        }),
        expect.any(Number), // TTL seconds
      );
    });

    it('should use correct TTL of 48 hours', async () => {
      cachePort.get.mockResolvedValueOnce(null);

      await useCase.synthesizeWithCache(mockSynthesisInput, ttsPort);

      const ttlCall = (cachePort.set as jest.Mock).mock.calls[0][2];
      const expectedTtl = 48 * 60 * 60; // 48 hours in seconds
      expect(ttlCall).toBe(expectedTtl);
    });

    it('should generate correct cache key with all parameters', async () => {
      cachePort.get.mockResolvedValueOnce(null);

      await useCase.synthesizeWithCache(
        {
          ...mockSynthesisInput,
          speed: 1.25,
          tone: 'dramatic',
        },
        ttsPort,
      );

      const cacheKey = (cachePort.get as jest.Mock).mock.calls[0][0];
      expect(cacheKey).toMatch(/tts:script-1:voice-123:1\.25:dramatic/);
    });

    it('should handle missing tone in cache key', async () => {
      const inputWithoutTone = {
        ...mockSynthesisInput,
        tone: undefined,
      };

      cachePort.get.mockResolvedValueOnce(null);

      await useCase.synthesizeWithCache(inputWithoutTone, ttsPort);

      const cacheKey = (cachePort.get as jest.Mock).mock.calls[0][0];
      expect(cacheKey).toMatch(/tts:script-1:voice-123:1\.00:neutral/);
    });
  });

  describe('invalidateCacheByScriptId', () => {
    it('should invalidate cache using script ID prefix', async () => {
      await useCase.invalidateCacheByScriptId('script-1');

      expect(cachePort.invalidateByPrefix).toHaveBeenCalledWith(
        'tts:script-1:*',
      );
    });

    it('should invalidate cache for all voices and speeds of script', async () => {
      await useCase.invalidateCacheByScriptId('script-123');

      expect(cachePort.invalidateByPrefix).toHaveBeenCalledWith(
        'tts:script-123:*',
      );
    });
  });

  describe('cache key generation', () => {
    it('should format speed with 2 decimal places', async () => {
      cachePort.get.mockResolvedValueOnce(null);

      await useCase.synthesizeWithCache(
        {
          ...mockSynthesisInput,
          speed: 0.8,
        },
        ttsPort,
      );

      const cacheKey = (cachePort.get as jest.Mock).mock.calls[0][0];
      expect(cacheKey).toContain(':0.80:');
    });

    it('should handle default speed of 1.0', async () => {
      const inputWithDefaultSpeed = {
        ...mockSynthesisInput,
        speed: 1.0,
      };

      cachePort.get.mockResolvedValueOnce(null);

      await useCase.synthesizeWithCache(inputWithDefaultSpeed, ttsPort);

      const cacheKey = (cachePort.get as jest.Mock).mock.calls[0][0];
      expect(cacheKey).toContain(':1.00:');
    });
  });
});
