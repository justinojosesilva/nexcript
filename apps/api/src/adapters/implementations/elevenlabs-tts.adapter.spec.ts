import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import * as elevenLabsModule from 'elevenlabs';
import { ElevenLabsTtsAdapter } from './elevenlabs-tts.adapter';
import { IStoragePort } from '../interfaces/storage.port';

jest.mock('elevenlabs');

describe('ElevenLabsTtsAdapter', () => {
  let adapter: ElevenLabsTtsAdapter;
  let configService: jest.Mocked<ConfigService>;
  let storagePort: jest.Mocked<IStoragePort>;
  let mockElevenLabsClient: any;

  beforeEach(async () => {
    configService = {
      get: jest.fn().mockReturnValue('test-api-key'),
    } as any;

    storagePort = {
      uploadFile: jest
        .fn()
        .mockResolvedValue('https://storage.example.com/audio_123.mp3'),
    } as any;

    // Mock the ElevenLabsClient
    mockElevenLabsClient = {
      generate: jest.fn().mockResolvedValue({
        [Symbol.asyncIterator]: jest.fn(function* () {
          yield Buffer.from('mock-audio-data');
        }),
      }),
    };

    const mockedElevenLabsModule = elevenLabsModule as jest.Mocked<
      typeof elevenLabsModule
    >;
    mockedElevenLabsModule.ElevenLabsClient.mockImplementation(
      () => mockElevenLabsClient,
    );

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ElevenLabsTtsAdapter,
        {
          provide: ConfigService,
          useValue: configService,
        },
        {
          provide: 'IStoragePort',
          useValue: storagePort,
        },
      ],
    }).compile();

    adapter = module.get<ElevenLabsTtsAdapter>(ElevenLabsTtsAdapter);
  });

  describe('synthesize', () => {
    it('should require API key', async () => {
      configService.get.mockReturnValueOnce(undefined);

      const newAdapter = new ElevenLabsTtsAdapter(configService, storagePort);

      await expect(
        newAdapter.synthesize({
          text: 'Hello world',
          voiceId: 'test-voice',
        }),
      ).rejects.toThrow('ElevenLabs API key not configured');
    });

    it('should synthesize text successfully', async () => {
      const result = await adapter.synthesize({
        text: 'Hello world',
        voiceId: 'test-voice',
      });

      expect(result).toEqual({
        audioUrl: 'https://storage.example.com/audio_123.mp3',
        durationSec: expect.any(Number),
        provider: 'elevenlabs',
        estimatedCostBrl: expect.any(Number),
      });
    });

    it('should call ElevenLabs API with correct parameters', async () => {
      await adapter.synthesize({
        text: 'Test content',
        voiceId: 'voice-id-123',
      });

      expect(mockElevenLabsClient.generate).toHaveBeenCalledWith(
        expect.objectContaining({
          voice: 'voice-id-123',
          text: 'Test content',
          model_id: 'eleven_multilingual_v2',
          voice_settings: expect.any(Object),
        }),
      );
    });

    it('should handle speed parameter', async () => {
      const result = await adapter.synthesize({
        text: 'Hello world',
        voiceId: 'test-voice',
        speed: 1.5,
      });

      expect(result).toBeDefined();
    });

    it('should calculate cost correctly', async () => {
      const result = await adapter.synthesize({
        text: 'A'.repeat(1000), // 1000 characters
        voiceId: 'test-voice',
      });

      // Cost should be: (1000/1000) * 0.30 * 5.0 = 1.5 BRL
      expect(result.estimatedCostBrl).toBeCloseTo(1.5, 1);
    });

    it('should estimate duration based on character count', async () => {
      const result = await adapter.synthesize({
        text: 'A'.repeat(1500), // 1500 characters
        voiceId: 'test-voice',
      });

      // Duration should be: ceil(1500 / 150) = 10 seconds
      expect(result.durationSec).toBe(10);
    });

    it('should return correct provider name', async () => {
      const result = await adapter.synthesize({
        text: 'Hello world',
        voiceId: 'test-voice',
      });

      expect(result.provider).toBe('elevenlabs');
    });

    it('should upload audio to storage', async () => {
      await adapter.synthesize({
        text: 'Hello world',
        voiceId: 'test-voice',
      });

      expect(storagePort.uploadFile).toHaveBeenCalledWith(
        expect.any(Buffer),
        expect.stringContaining('audio_'),
        'audio/mpeg',
      );
    });

    it('should return storage URL', async () => {
      const result = await adapter.synthesize({
        text: 'Hello world',
        voiceId: 'test-voice',
      });

      expect(result.audioUrl).toBe('https://storage.example.com/audio_123.mp3');
    });

    it('should handle storage upload errors gracefully', async () => {
      storagePort.uploadFile.mockRejectedValueOnce(
        new Error('Storage service unavailable'),
      );

      await expect(
        adapter.synthesize({
          text: 'Hello world',
          voiceId: 'test-voice',
        }),
      ).rejects.toThrow('Storage service unavailable');
    });
  });

  describe('cost calculation', () => {
    it('should calculate correct BRL cost for various character counts', async () => {
      const testCases = [
        { chars: 500, expectedCost: 0.75 }, // (500/1000)*0.30*5.0
        { chars: 1000, expectedCost: 1.5 }, // (1000/1000)*0.30*5.0
        { chars: 10000, expectedCost: 15.0 }, // (10000/1000)*0.30*5.0
      ];

      for (const { chars, expectedCost } of testCases) {
        const result = await adapter.synthesize({
          text: 'A'.repeat(chars),
          voiceId: 'test-voice',
        });

        expect(result.estimatedCostBrl).toBeCloseTo(expectedCost, 1);
      }
    });

    it('should calculate cost for edge case: very short text', async () => {
      const result = await adapter.synthesize({
        text: 'A',
        voiceId: 'test-voice',
      });

      // Minimum cost for 1 char
      expect(result.estimatedCostBrl).toBeGreaterThan(0);
    });

    it('should calculate cost for large text', async () => {
      const result = await adapter.synthesize({
        text: 'A'.repeat(50000),
        voiceId: 'test-voice',
      });

      // (50000/1000) * 0.30 * 5.0 = 75 BRL
      expect(result.estimatedCostBrl).toBeCloseTo(75.0, 0);
    });
  });

  describe('duration estimation', () => {
    it('should estimate duration for various text lengths', async () => {
      const testCases = [
        { chars: 150, expectedDuration: 1 }, // ceil(150/150) = 1
        { chars: 300, expectedDuration: 2 }, // ceil(300/150) = 2
        { chars: 600, expectedDuration: 4 }, // ceil(600/150) = 4
      ];

      for (const { chars, expectedDuration } of testCases) {
        const result = await adapter.synthesize({
          text: 'A'.repeat(chars),
          voiceId: 'test-voice',
        });

        expect(result.durationSec).toBe(expectedDuration);
      }
    });

    it('should handle very short text duration', async () => {
      const result = await adapter.synthesize({
        text: 'Hi',
        voiceId: 'test-voice',
      });

      expect(result.durationSec).toBeGreaterThanOrEqual(1);
    });
  });

  describe('error handling', () => {
    it('should handle ElevenLabs API errors', async () => {
      mockElevenLabsClient.generate.mockRejectedValueOnce(
        new Error('ElevenLabs API Error: Rate limit exceeded'),
      );

      await expect(
        adapter.synthesize({
          text: 'Hello world',
          voiceId: 'test-voice',
        }),
      ).rejects.toThrow('ElevenLabs API Error: Rate limit exceeded');
    });

    it('should handle invalid voice ID error', async () => {
      mockElevenLabsClient.generate.mockRejectedValueOnce(
        new Error('Voice not found'),
      );

      await expect(
        adapter.synthesize({
          text: 'Hello world',
          voiceId: 'invalid-voice',
        }),
      ).rejects.toThrow('Voice not found');
    });

    it('should handle network errors', async () => {
      mockElevenLabsClient.generate.mockRejectedValueOnce(
        new Error('Network timeout'),
      );

      await expect(
        adapter.synthesize({
          text: 'Hello world',
          voiceId: 'test-voice',
        }),
      ).rejects.toThrow('Network timeout');
    });
  });
});
