import { Injectable, Logger } from '@nestjs/common';
import {
  ITtsPort,
  SynthesizeInput,
  SynthesizeOutput,
} from '../interfaces/tts.port';
import { ElevenLabsTtsAdapter } from './elevenlabs-tts.adapter';
import { OpenAITtsAdapter } from './openai-tts.adapter';

/**
 * Fallback TTS adapter that tries ElevenLabs first,
 * then automatically falls back to OpenAI TTS on rate limits or errors
 */
@Injectable()
export class FallbackTtsAdapter implements ITtsPort {
  private readonly logger = new Logger(FallbackTtsAdapter.name);

  constructor(
    private readonly elevenLabsAdapter: ElevenLabsTtsAdapter,
    private readonly openAIAdapter: OpenAITtsAdapter,
  ) {}

  async synthesize(input: SynthesizeInput): Promise<SynthesizeOutput> {
    try {
      this.logger.debug('Attempting ElevenLabs synthesis');
      return await this.elevenLabsAdapter.synthesize(input);
    } catch (error) {
      const errorCode = this.getErrorCode(error);

      // Fallback on rate limit (429) or server error (5xx)
      if (errorCode === 429 || (errorCode && errorCode >= 500)) {
        this.logger.warn(
          `ElevenLabs failed with ${errorCode}, falling back to OpenAI TTS`,
          error instanceof Error ? error.message : String(error),
        );

        try {
          return await this.openAIAdapter.synthesize(input);
        } catch (openAIError) {
          this.logger.error('Both ElevenLabs and OpenAI TTS failed');
          throw new Error(
            `TTS synthesis failed with all providers: ${openAIError instanceof Error ? openAIError.message : String(openAIError)}`,
          );
        }
      }

      // Re-throw other errors (API key missing, invalid voice, etc.)
      throw error;
    }
  }

  private getErrorCode(error: unknown): number | null {
    if (error instanceof Error) {
      // Handle OpenAI API errors
      if ('status' in error) {
        return (error as any).status;
      }
      // Handle ElevenLabs API errors
      if ('error' in error) {
        const apiError = (error as any).error;
        if (apiError?.status_code) {
          return apiError.status_code;
        }
      }
    }
    return null;
  }
}
