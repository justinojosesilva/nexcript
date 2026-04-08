import { Injectable, Logger, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ElevenLabsClient } from 'elevenlabs';
import {
  ITtsPort,
  SynthesizeInput,
  SynthesizeOutput,
} from '../interfaces/tts.port';
import { IStoragePort } from '../interfaces/storage.port';

/**
 * ElevenLabs TTS adapter using the official ElevenLabs SDK
 * Provides high-quality text-to-speech synthesis
 */
@Injectable()
export class ElevenLabsTtsAdapter implements ITtsPort {
  private readonly logger = new Logger(ElevenLabsTtsAdapter.name);
  private readonly client: ElevenLabsClient;
  private readonly apiKey: string;

  // Pricing: $0.30 per 1K characters (approximate)
  private readonly costPerKChars = 0.30;

  constructor(
    private readonly configService: ConfigService,
    @Inject('IStoragePort') private readonly storagePort: IStoragePort,
  ) {
    this.apiKey = this.configService.get<string>('ELEVENLABS_API_KEY') || '';
    this.client = new ElevenLabsClient({ apiKey: this.apiKey });
  }

  async synthesize(input: SynthesizeInput): Promise<SynthesizeOutput> {
    if (!this.apiKey) {
      throw new Error(
        'ElevenLabs API key not configured. Set ELEVENLABS_API_KEY environment variable.',
      );
    }

    this.logger.debug(
      `Synthesizing ${input.text.length} characters with voice ${input.voiceId}`,
    );

    try {
      // Call ElevenLabs API
      const audioStream = await this.client.generate({
        voice: input.voiceId,
        text: input.text,
        model_id: 'eleven_multilingual_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      });

      // Convert stream to buffer
      const chunks: Buffer[] = [];
      for await (const chunk of audioStream) {
        chunks.push(chunk);
      }
      const audioBuffer = Buffer.concat(chunks);

      // Estimate duration (rough: ~150 characters per second)
      const estimatedDurationSec = Math.ceil(input.text.length / 150);

      // Upload to storage
      const filename = `audio_${Date.now()}_${Math.random().toString(36).substring(7)}.mp3`;
      const audioUrl = await this.storagePort.uploadFile(
        audioBuffer,
        filename,
        'audio/mpeg',
      );

      // Calculate estimated cost
      const estimatedCostBrl = this.calculateCost(input.text);

      this.logger.debug(
        `Synthesis successful. Duration: ${estimatedDurationSec}s, Cost: R$ ${estimatedCostBrl.toFixed(2)}`,
      );

      return {
        audioUrl,
        durationSec: estimatedDurationSec,
        provider: 'elevenlabs',
        estimatedCostBrl,
      };
    } catch (error) {
      this.logger.error(
        `ElevenLabs synthesis failed: ${error instanceof Error ? error.message : String(error)}`,
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
