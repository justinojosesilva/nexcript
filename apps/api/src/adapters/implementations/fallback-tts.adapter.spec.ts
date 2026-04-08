import { Test, TestingModule } from '@nestjs/testing';
import { FallbackTtsAdapter } from './fallback-tts.adapter';
import { ElevenLabsTtsAdapter } from './elevenlabs-tts.adapter';
import { OpenAITtsAdapter } from './openai-tts.adapter';
import { SynthesizeInput } from '../interfaces/tts.port';

describe('FallbackTtsAdapter', () => {
  let adapter: FallbackTtsAdapter;
  let elevenLabsAdapter: jest.Mocked<ElevenLabsTtsAdapter>;
  let openAIAdapter: jest.Mocked<OpenAITtsAdapter>;

  const mockSynthesisResult = {
    audioUrl: 'https://storage.example.com/audio.mp3',
    durationSec: 10,
    provider: 'elevenlabs',
    estimatedCostBrl: 1.5,
  };

  const testInput: SynthesizeInput = {
    text: 'Hello world',
    voiceId: 'test-voice',
  };

  beforeEach(async () => {
    elevenLabsAdapter = {
      synthesize: jest.fn().mockResolvedValue(mockSynthesisResult),
    } as any;

    openAIAdapter = {
      synthesize: jest
        .fn()
        .mockResolvedValue({ ...mockSynthesisResult, provider: 'openai' }),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        FallbackTtsAdapter,
        {
          provide: ElevenLabsTtsAdapter,
          useValue: elevenLabsAdapter,
        },
        {
          provide: OpenAITtsAdapter,
          useValue: openAIAdapter,
        },
      ],
    }).compile();

    adapter = module.get<FallbackTtsAdapter>(FallbackTtsAdapter);
  });

  describe('synthesize', () => {
    it('should use ElevenLabs by default', async () => {
      const result = await adapter.synthesize(testInput);

      expect(elevenLabsAdapter.synthesize).toHaveBeenCalledWith(testInput);
      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
      expect(result.provider).toBe('elevenlabs');
    });

    it('should fallback to OpenAI on 429 rate limit error', async () => {
      const rateLimitError = new Error('Rate limit exceeded') as any;
      rateLimitError.status = 429;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(rateLimitError);

      const result = await adapter.synthesize(testInput);

      expect(elevenLabsAdapter.synthesize).toHaveBeenCalledWith(testInput);
      expect(openAIAdapter.synthesize).toHaveBeenCalledWith(testInput);
      expect(result.provider).toBe('openai');
    });

    it('should fallback to OpenAI on 500 server error', async () => {
      const serverError = new Error('Internal server error') as any;
      serverError.status = 500;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(serverError);

      const result = await adapter.synthesize(testInput);

      expect(elevenLabsAdapter.synthesize).toHaveBeenCalledWith(testInput);
      expect(openAIAdapter.synthesize).toHaveBeenCalledWith(testInput);
      expect(result.provider).toBe('openai');
    });

    it('should fallback to OpenAI on 503 service unavailable error', async () => {
      const unavailableError = new Error('Service unavailable') as any;
      unavailableError.status = 503;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(unavailableError);

      const result = await adapter.synthesize(testInput);

      expect(openAIAdapter.synthesize).toHaveBeenCalled();
      expect(result.provider).toBe('openai');
    });

    it('should handle ElevenLabs error format with status_code', async () => {
      const elevenLabsError = new Error('Rate limit') as any;
      elevenLabsError.error = { status_code: 429 };

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(elevenLabsError);

      const result = await adapter.synthesize(testInput);

      expect(openAIAdapter.synthesize).toHaveBeenCalled();
      expect(result.provider).toBe('openai');
    });

    it('should rethrow non-recoverable errors from ElevenLabs', async () => {
      const apiKeyError = new Error('API key not configured');

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(apiKeyError);

      await expect(adapter.synthesize(testInput)).rejects.toThrow(
        'API key not configured',
      );

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });

    it('should rethrow invalid voice ID error', async () => {
      const voiceError = new Error('Voice ID not found');

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(voiceError);

      await expect(adapter.synthesize(testInput)).rejects.toThrow(
        'Voice ID not found',
      );

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });

    it('should throw when both ElevenLabs and OpenAI fail on fallback', async () => {
      const rateLimitError = new Error('Rate limit') as any;
      rateLimitError.status = 429;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(rateLimitError);
      openAIAdapter.synthesize.mockRejectedValueOnce(
        new Error('OpenAI API error'),
      );

      await expect(adapter.synthesize(testInput)).rejects.toThrow(
        'TTS synthesis failed with all providers',
      );
    });

    it('should pass through correct input parameters to adapters', async () => {
      const customInput: SynthesizeInput = {
        text: 'Custom text',
        voiceId: 'custom-voice',
        speed: 1.5,
        tone: 'formal',
      };

      await adapter.synthesize(customInput);

      expect(elevenLabsAdapter.synthesize).toHaveBeenCalledWith(customInput);
    });

    it('should handle 502 bad gateway as recoverable error', async () => {
      const gatewayError = new Error('Bad gateway') as any;
      gatewayError.status = 502;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(gatewayError);

      const result = await adapter.synthesize(testInput);

      expect(openAIAdapter.synthesize).toHaveBeenCalled();
      expect(result.provider).toBe('openai');
    });

    it('should handle 504 gateway timeout as recoverable error', async () => {
      const timeoutError = new Error('Gateway timeout') as any;
      timeoutError.status = 504;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(timeoutError);

      const result = await adapter.synthesize(testInput);

      expect(openAIAdapter.synthesize).toHaveBeenCalled();
      expect(result.provider).toBe('openai');
    });

    it('should rethrow 400 bad request error', async () => {
      const badRequestError = new Error('Bad request') as any;
      badRequestError.status = 400;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(badRequestError);

      await expect(adapter.synthesize(testInput)).rejects.toThrow(
        'Bad request',
      );

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });

    it('should rethrow 401 unauthorized error', async () => {
      const unauthorizedError = new Error('Unauthorized') as any;
      unauthorizedError.status = 401;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(unauthorizedError);

      await expect(adapter.synthesize(testInput)).rejects.toThrow(
        'Unauthorized',
      );

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });

    it('should rethrow 404 not found error', async () => {
      const notFoundError = new Error('Not found') as any;
      notFoundError.status = 404;

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(notFoundError);

      await expect(adapter.synthesize(testInput)).rejects.toThrow('Not found');

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });

    it('should handle errors without status code', async () => {
      const unknownError = new Error('Unknown error');

      elevenLabsAdapter.synthesize.mockRejectedValueOnce(unknownError);

      await expect(adapter.synthesize(testInput)).rejects.toThrow(
        'Unknown error',
      );

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });

    it('should handle non-Error objects', async () => {
      elevenLabsAdapter.synthesize.mockRejectedValueOnce('String error');

      await expect(adapter.synthesize(testInput)).rejects.toEqual(
        'String error',
      );

      expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
    });
  });

  describe('fallback strategy', () => {
    it('should fallback only for rate limit and server errors', async () => {
      const scenarios = [
        { status: 429, shouldFallback: true, name: 'Rate limit' },
        { status: 500, shouldFallback: true, name: 'Internal server error' },
        { status: 501, shouldFallback: true, name: 'Not implemented' },
        { status: 502, shouldFallback: true, name: 'Bad gateway' },
        { status: 503, shouldFallback: true, name: 'Service unavailable' },
        { status: 504, shouldFallback: true, name: 'Gateway timeout' },
        { status: 400, shouldFallback: false, name: 'Bad request' },
        { status: 401, shouldFallback: false, name: 'Unauthorized' },
        { status: 403, shouldFallback: false, name: 'Forbidden' },
        { status: 404, shouldFallback: false, name: 'Not found' },
      ];

      for (const scenario of scenarios) {
        elevenLabsAdapter.synthesize.mockClear();
        openAIAdapter.synthesize.mockClear();

        const error = new Error(scenario.name) as any;
        error.status = scenario.status;

        elevenLabsAdapter.synthesize.mockRejectedValueOnce(error);

        if (scenario.shouldFallback) {
          openAIAdapter.synthesize.mockResolvedValueOnce(mockSynthesisResult);
          await adapter.synthesize(testInput);
          expect(openAIAdapter.synthesize).toHaveBeenCalled();
        } else {
          await expect(adapter.synthesize(testInput)).rejects.toThrow();
          expect(openAIAdapter.synthesize).not.toHaveBeenCalled();
        }
      }
    });
  });
});
