import { Injectable, Inject, BadRequestException } from '@nestjs/common';
import { narrationPromptTemplate, type NarrationPromptInput, type NarrationTone, type NarrationSpeed } from '@nexcript/prompts';
import { ITtsPort, SynthesizeOutput } from '../../adapters/interfaces/tts.port';
import { SynthesizeNarrationDto } from '../dto/synthesize-narration.dto';
import { ContentTone } from '@nexcript/shared';

interface SynthesizeNarrationInput extends SynthesizeNarrationDto {
  organizationId: string;
}

@Injectable()
export class SynthesizeNarrationUseCase {
  constructor(
    @Inject('ITtsPort')
    private ttsPort: ITtsPort,
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

  async execute(input: SynthesizeNarrationInput): Promise<SynthesizeOutput> {
    if (!input.organizationId) {
      throw new BadRequestException('Missing organization context');
    }

    // Map input blocks to NarrationBlock format with default estimatedDuration
    const scriptBlocks = input.scriptBlocks.map(block => ({
      id: block.id,
      type: block.type as 'HOOK' | 'INTRO' | 'DEVELOPMENT' | 'CTA' | 'CONCLUSION',
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

    // Call TTS adapter with adapted script
    const synthesisResult = await this.ttsPort.synthesize({
      text: narrationPrompt,
      voiceId: input.voiceId,
      speed: input.speed || 1.0,
      tone: input.tone,
    });

    return synthesisResult;
  }
}
