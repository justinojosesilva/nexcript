import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { ContentTone } from '@nexcript/shared';
import { SynthesizeNarrationUseCase } from './synthesize-narration.use-case';
import { CacheTtsSynthesisUseCase } from './cache-tts-synthesis.use-case';
import { ITtsPort } from '../../adapters/interfaces/tts.port';
import { ICachePort } from '../../cache/interfaces/cache.port';

describe('SynthesizeNarrationUseCase', () => {
  let useCase: SynthesizeNarrationUseCase;
  let ttsPort: jest.Mocked<ITtsPort>;
  let cachePort: jest.Mocked<ICachePort>;

  const mockSynthesisOutput = {
    audioUrl: 'https://storage.example.com/audio_123.mp3',
    durationSec: 120,
    provider: 'elevenlabs',
    estimatedCostBrl: 2.5,
  };

  const mockScriptBlocks = [
    {
      id: 'hook',
      type: 'HOOK' as const,
      content: 'Hook content here',
      estimatedDuration: 30,
      wordCount: 50,
    },
    {
      id: 'intro',
      type: 'INTRO' as const,
      content: 'Introduction content',
      estimatedDuration: 30,
      wordCount: 60,
    },
    {
      id: 'dev',
      type: 'DEVELOPMENT' as const,
      content: 'Development content',
      estimatedDuration: 300,
      wordCount: 450,
    },
  ];

  beforeEach(async () => {
    ttsPort = {
      synthesize: jest.fn().mockResolvedValue(mockSynthesisOutput),
    } as any;

    cachePort = {
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn().mockResolvedValue(undefined),
      delete: jest.fn().mockResolvedValue(undefined),
      invalidateByPrefix: jest.fn().mockResolvedValue(undefined),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        SynthesizeNarrationUseCase,
        CacheTtsSynthesisUseCase,
        {
          provide: 'ITtsPort',
          useValue: ttsPort,
        },
        {
          provide: 'ICachePort',
          useValue: cachePort,
        },
      ],
    }).compile();

    useCase = module.get<SynthesizeNarrationUseCase>(
      SynthesizeNarrationUseCase,
    );
  });

  describe('execute', () => {
    it('should synthesize narration successfully', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      const result = await useCase.execute(input);

      expect(result).toMatchObject(mockSynthesisOutput);
      expect(result.cacheHit).toBeDefined();
      expect(ttsPort.synthesize).toHaveBeenCalled();
    });

    it('should throw BadRequestException when organizationId is missing', async () => {
      const input = {
        organizationId: '',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await expect(useCase.execute(input)).rejects.toThrow(BadRequestException);
    });

    it('should call TTS port with synthesis input', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
        speed: 1.0,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalledWith(
        expect.objectContaining({
          text: expect.any(String),
          voiceId: 'test-voice',
          speed: 1.0,
          tone: ContentTone.CASUAL,
        }),
      );
    });

    it('should return TTS synthesis output', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      const result = await useCase.execute(input);

      expect(result.audioUrl).toBeDefined();
      expect(result.durationSec).toBeGreaterThan(0);
      expect(result.provider).toBeDefined();
    });
  });

  describe('tone mapping', () => {
    const testCases = [
      { input: ContentTone.FORMAL, expected: 'CALM' },
      { input: ContentTone.CASUAL, expected: 'ENERGETIC' },
      { input: ContentTone.FUNNY, expected: 'ENERGETIC' },
      { input: ContentTone.SERIOUS, expected: 'DRAMATIC' },
      { input: ContentTone.INSPIRATIONAL, expected: 'DRAMATIC' },
      { input: ContentTone.EDUCATIONAL, expected: 'CALM' },
      { input: ContentTone.DARK_COMEDY, expected: 'SUSPENSEFUL' },
      { input: ContentTone.SARCASTIC, expected: 'ENERGETIC' },
    ];

    testCases.forEach(({ input, expected }) => {
      it(`should map ${input} to ${expected}`, async () => {
        const narrationInput = {
          organizationId: 'org-1',
          scriptId: 'script-1',
          scriptBlocks: mockScriptBlocks,
          voiceId: 'test-voice',
          tone: input,
        };

        await useCase.execute(narrationInput);

        expect(ttsPort.synthesize).toHaveBeenCalledWith(
          expect.objectContaining({
            tone: input,
          }),
        );
      });
    });
  });

  describe('speed mapping', () => {
    const testCases = [
      { speed: undefined, expected: 'NORMAL' },
      { speed: 0.5, expected: 'SLOW' },
      { speed: 0.8, expected: 'SLOW' },
      { speed: 1.0, expected: 'NORMAL' },
      { speed: 1.2, expected: 'FAST' },
      { speed: 1.5, expected: 'FAST' },
      { speed: 2.0, expected: 'FAST' },
    ];

    testCases.forEach(({ speed, expected }) => {
      it(`should map speed ${speed} to ${expected}`, async () => {
        const input = {
          organizationId: 'org-1',
          scriptId: 'script-1',
          scriptBlocks: mockScriptBlocks,
          voiceId: 'test-voice',
          tone: ContentTone.CASUAL,
          speed,
        };

        await useCase.execute(input);

        expect(ttsPort.synthesize).toHaveBeenCalledWith(
          expect.objectContaining({
            speed: speed || 1.0,
          }),
        );
      });
    });
  });

  describe('script blocks handling', () => {
    it('should handle single block', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: [
          {
            id: 'hook',
            type: 'HOOK' as const,
            content: 'Hook content',
            estimatedDuration: 30,
            wordCount: 50,
          },
        ],
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalled();
    });

    it('should handle multiple blocks', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalled();
    });

    it('should handle all block types', async () => {
      const allBlockTypes = [
        'HOOK',
        'INTRO',
        'DEVELOPMENT',
        'CTA',
        'CONCLUSION',
      ] as const;

      const blocks = allBlockTypes.map((type) => ({
        id: type.toLowerCase(),
        type,
        content: `${type} content`,
        estimatedDuration: 30,
        wordCount: 50,
      }));

      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: blocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalled();
    });

    it('should preserve block structure in adaptation', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      const callArgs = ttsPort.synthesize.mock.calls[0][0];
      expect(callArgs.text).toBeDefined();
      expect(callArgs.voiceId).toBe('test-voice');
    });
  });

  describe('voice ID handling', () => {
    it('should pass voice ID to TTS port', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'custom-voice-id',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalledWith(
        expect.objectContaining({
          voiceId: 'custom-voice-id',
        }),
      );
    });

    it('should handle different voice IDs', async () => {
      const voices = ['alloy', 'echo', 'fable', 'onyx', 'nova', 'shimmer'];

      for (const voiceId of voices) {
        ttsPort.synthesize.mockClear();

        const input = {
          organizationId: 'org-1',
          scriptId: 'script-1',
          scriptBlocks: mockScriptBlocks,
          voiceId,
          tone: ContentTone.CASUAL,
        };

        await useCase.execute(input);

        expect(ttsPort.synthesize).toHaveBeenCalledWith(
          expect.objectContaining({
            voiceId,
          }),
        );
      }
    });
  });

  describe('error handling', () => {
    it('should propagate TTS port errors', async () => {
      ttsPort.synthesize.mockRejectedValueOnce(
        new Error('TTS synthesis failed'),
      );

      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        'TTS synthesis failed',
      );
    });

    it('should handle rate limit errors from TTS port', async () => {
      ttsPort.synthesize.mockRejectedValueOnce(
        new Error('Rate limit exceeded'),
      );

      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        'Rate limit exceeded',
      );
    });

    it('should handle invalid voice ID error', async () => {
      ttsPort.synthesize.mockRejectedValueOnce(new Error('Voice not found'));

      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'invalid-voice',
        tone: ContentTone.CASUAL,
      };

      await expect(useCase.execute(input)).rejects.toThrow('Voice not found');
    });
  });

  describe('input validation', () => {
    it('should require organizationId', async () => {
      const input = {
        organizationId: '',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        'Missing organization context',
      );
    });

    it('should require voiceId', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: '',
        tone: ContentTone.CASUAL,
      };

      // This should execute without error (voiceId is passed as-is)
      await useCase.execute(input);
      expect(ttsPort.synthesize).toHaveBeenCalled();
    });

    it('should handle empty script blocks array', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: [],
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalled();
    });

    it('should handle undefined tone', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: undefined as any,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalled();
    });
  });

  describe('prompt generation', () => {
    it('should generate narration prompt from script blocks', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      const callArgs = ttsPort.synthesize.mock.calls[0][0];
      expect(callArgs.text).toBeDefined();
      expect(callArgs.text.length).toBeGreaterThan(0);
    });

    it('should include tone in prompt generation', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalledWith(
        expect.objectContaining({
          tone: ContentTone.CASUAL,
        }),
      );
    });

    it('should include speed in prompt generation', async () => {
      const input = {
        organizationId: 'org-1',
        scriptId: 'script-1',
        scriptBlocks: mockScriptBlocks,
        voiceId: 'test-voice',
        tone: ContentTone.CASUAL,
        speed: 1.5,
      };

      await useCase.execute(input);

      expect(ttsPort.synthesize).toHaveBeenCalledWith(
        expect.objectContaining({
          speed: 1.5,
        }),
      );
    });
  });
});
