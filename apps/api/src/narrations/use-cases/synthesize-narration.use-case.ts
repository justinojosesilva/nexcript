import {
  Injectable,
  Inject,
  BadRequestException,
  Logger,
} from '@nestjs/common';
import {
  narrationPromptTemplate,
  type NarrationPromptInput,
  type NarrationTone,
  type NarrationSpeed,
} from '@nexcript/prompts';
import { ITtsPort, SynthesizeOutput } from '../../adapters/interfaces/tts.port';
import { SynthesizeNarrationDto } from '../dto/synthesize-narration.dto';
import { ContentTone } from '@nexcript/shared';
import { CacheTtsSynthesisUseCase } from './cache-tts-synthesis.use-case';

interface SynthesizeNarrationInput extends SynthesizeNarrationDto {
  organizationId: string;
  scriptId: string; // Added for cache key generation
}

export interface SynthesizeNarrationOutput extends SynthesizeOutput {
  cacheHit: boolean;
}

@Injectable()
export class SynthesizeNarrationUseCase {
  private readonly logger = new Logger(SynthesizeNarrationUseCase.name);

  constructor(
    @Inject('ITtsPort')
    private readonly ttsPort: ITtsPort,
    private readonly cacheTtsSynthesisUseCase: CacheTtsSynthesisUseCase,
  ) {}

  private mapToneToNarrationTone(tone: ContentTone): NarrationTone {
    const toneMap: Record<ContentTone, NarrationTone> = {
      [ContentTone.FORMAL]: 'CALM',
      [ContentTone.CASUAL]: 'ENERGETIC',
      [ContentTone.FUNNY]: 'ENERGETIC',
      [ContentTone.SERIOUS]: 'DRAMATIC',
      [ContentTone.INSPIRATIONAL]: 'DRAMATIC',
      [ContentTone.EDUCATIONAL]: 'CALM',
      [ContentTone.DARK_COMEDY]: 'SUSPENSEFUL',
      [ContentTone.SARCASTIC]: 'ENERGETIC',
    };
    return toneMap[tone] || 'CALM';
  }

  private mapSpeedToNarrationSpeed(speed?: number): NarrationSpeed {
    if (!speed) return 'NORMAL';
    if (speed < 0.9) return 'SLOW';
    if (speed > 1.1) return 'FAST';
    return 'NORMAL';
  }

  async execute(
    input: SynthesizeNarrationInput,
  ): Promise<SynthesizeNarrationOutput> {
    if (!input.organizationId) {
      throw new BadRequestException('Missing organization context');
    }

    if (!input.scriptId) {
      throw new BadRequestException('Missing script ID for cache key');
    }

    // Map input blocks to NarrationBlock format with default estimatedDuration
    const scriptBlocks = input.scriptBlocks.map((block) => ({
      id: block.id,
      type: block.type as
        | 'HOOK'
        | 'INTRO'
        | 'DEVELOPMENT'
        | 'CTA'
        | 'CONCLUSION',
      content: block.content,
      estimatedDuration: 30, // Default 30s per block
    }));

    const narrationTone = this.mapToneToNarrationTone(input.tone);
    const narrationSpeed = this.mapSpeedToNarrationSpeed(input.speed);

    const promptInput: NarrationPromptInput = {
      scriptBlocks,
      tone: narrationTone,
      speed: narrationSpeed,
      voiceStyle: 'professional',
    };

    // Apply narration prompt template to adapt script for TTS
    const narrationPrompt = narrationPromptTemplate(promptInput);

    // Use cached synthesis when available
    const { output: synthesisResult, cacheHit } =
      await this.cacheTtsSynthesisUseCase.synthesizeWithCache(
        {
          text: narrationPrompt,
          voiceId: input.voiceId,
          speed: input.speed || 1.0,
          tone: input.tone,
          scriptId: input.scriptId,
        },
        this.ttsPort,
      );

    return {
      ...synthesisResult,
      cacheHit,
    };
  }

  /**
   * Invalidate cache for a script when blocks are edited
   */
  async invalidateCacheForScript(scriptId: string): Promise<void> {
    await this.cacheTtsSynthesisUseCase.invalidateCacheByScriptId(scriptId);
    this.logger.log({
      event: 'script_narration_cache_invalidated',
      scriptId,
      timestamp: new Date().toISOString(),
    });
  }
}
