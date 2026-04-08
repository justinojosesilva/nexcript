import { Injectable, Logger, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import {
  ITtsPort,
  SynthesizeInput,
  SynthesizeOutput,
} from '../interfaces/tts.port';
import { IStoragePort } from '../interfaces/storage.port';

/**
 * OpenAI TTS adapter using the official OpenAI SDK
 * Provides fallback text-to-speech synthesis when primary provider fails
 */
@Injectable()
export class OpenAITtsAdapter implements ITtsPort {
  private readonly logger = new Logger(OpenAITtsAdapter.name);
  private readonly client: OpenAI;

  // Pricing: $0.015 per 1K characters
  private readonly costPerKChars = 0.015;

  constructor(
    private readonly configService: ConfigService,
    @Inject('IStoragePort') private readonly storagePort: IStoragePort,
  ) {
    this.client = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  async synthesize(input: SynthesizeInput): Promise<SynthesizeOutput> {
    this.logger.debug(
      `Synthesizing ${input.text.length} characters with OpenAI TTS (voice: ${input.voiceId})`,
    );

    try {
      // Call OpenAI TTS API
      const response = await this.client.audio.speech.create({
        model: 'tts-1',
        voice: (input.voiceId || 'alloy') as
          | 'alloy'
          | 'echo'
          | 'fable'
          | 'onyx'
          | 'nova'
          | 'shimmer',
        input: input.text,
        speed: input.speed || 1.0,
        response_format: 'mp3',
      });

      // Convert response to buffer
      const buffer = Buffer.from(await response.arrayBuffer());

      // Estimate duration (rough: ~150 characters per second)
      const estimatedDurationSec = Math.ceil(input.text.length / 150);

      // Upload to storage
      const filename = `audio_${Date.now()}_${Math.random().toString(36).substring(7)}.mp3`;
      const audioUrl = await this.storagePort.uploadFile(
        buffer,
        filename,
        'audio/mpeg',
      );

      // Calculate estimated cost
      const estimatedCostBrl = this.calculateCost(input.text);

      this.logger.debug(
        `OpenAI synthesis successful. Duration: ${estimatedDurationSec}s, Cost: R$ ${estimatedCostBrl.toFixed(2)}`,
      );

      return {
        audioUrl,
        durationSec: estimatedDurationSec,
        provider: 'openai',
        estimatedCostBrl,
      };
    } catch (error) {
      this.logger.error(
        `OpenAI synthesis failed: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw error;
    }
  }

  private calculateCost(text: string): number {
    // Convert to BRL (USD to BRL ~5.0)
    const charCount = text.length;
    const costUsd = (charCount / 1000) * this.costPerKChars;
    const costBrl = costUsd * 5.0;
    return costBrl;
  }
}
