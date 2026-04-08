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
    const mockedElevenLabsModule = elevenLabsModule as jest.Mocked<typeof elevenLabsModule>;
    mockedElevenLabsModule.ElevenLabsClient.mockImplementation(
      () =>
        ({
          generate: jest.fn().mockResolvedValue({
            [Symbol.asyncIterator]: jest.fn(function* () {
              yield Buffer.from('mock-audio-data');
            }),
          }),
        }) as any,
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
  });
});
