/**
 * Narration Prompt Template
 * Adapts script text for TTS narration with tone-based rhythm adjustments
 */

export interface NarrationBlock {
  id: string;
  type: 'HOOK' | 'INTRO' | 'DEVELOPMENT' | 'CTA' | 'CONCLUSION';
  content: string;
  estimatedDuration: number;
}

export type NarrationTone = 'CALM' | 'DRAMATIC' | 'ENERGETIC' | 'SUSPENSEFUL';
export type NarrationSpeed = 'SLOW' | 'NORMAL' | 'FAST';
export type VoiceStyle = 'professional' | 'casual' | 'enthusiastic' | 'soft';

export interface NarrationPromptInput {
  scriptBlocks: NarrationBlock[];
  tone: NarrationTone;
  speed: NarrationSpeed;
  voiceStyle: VoiceStyle;
}

interface NarrationGuidelines {
  sentenceLength: string;
  pauseFrequency: string;
  emphasisLevel: string;
}

const toneGuidelines: Record<NarrationTone, NarrationGuidelines> = {
  CALM: {
    sentenceLength: 'long, flowing sentences (25-35 words)',
    pauseFrequency: 'minimal pauses, focus on rhythm',
    emphasisLevel: 'gentle emphasis on key words',
  },
  DRAMATIC: {
    sentenceLength: 'short, impactful sentences (8-15 words)',
    pauseFrequency: 'strategic pauses between dramatic moments',
    emphasisLevel: 'strong emphasis on key words using CAPS LOCK',
  },
  ENERGETIC: {
    sentenceLength: 'medium sentences (15-20 words) with varied length',
    pauseFrequency: 'moderate pauses to maintain energy',
    emphasisLevel: 'enthusiastic emphasis on exciting elements',
  },
  SUSPENSEFUL: {
    sentenceLength: 'mixed: short for tension, longer for buildup (10-30 words)',
    pauseFrequency: 'strategic pauses to build tension',
    emphasisLevel: 'emphasis on mystery and intrigue elements',
  },
};

const speedMultipliers: Record<NarrationSpeed, number> = {
  SLOW: 0.8,
  NORMAL: 1.0,
  FAST: 1.2,
};

export interface NarrationOutput {
  narrationText: string;
  adjustedDuration: number;
  pauseMarkers: number;
  voiceGuidance: string;
}

/**
 * Generates a narration prompt template that adapts script blocks for TTS
 * Returns text optimized for speech synthesis with tone-based pacing
 */
export const narrationPromptTemplate = ({
  scriptBlocks,
  tone,
  speed,
  voiceStyle,
}: NarrationPromptInput): string => {
  const guidelines = toneGuidelines[tone];
  const speedMultiplier = speedMultipliers[speed];
  const blockContent = scriptBlocks
    .map(
      (block) =>
        `[${block.type.toUpperCase()}]\n${block.content}\n(Duration: ~${Math.ceil(block.estimatedDuration * speedMultiplier)}s)`,
    )
    .join('\n\n');

  return `You are an expert audiobook narrator and TTS adaptation specialist.

Your task is to adapt the following script blocks for text-to-speech narration. The narration must be optimized for natural speech synthesis while maintaining the original message.

SCRIPT BLOCKS TO ADAPT:
---
${blockContent}
---

NARRATION GUIDELINES:

Tone: ${tone}
- Sentence structure: ${guidelines.sentenceLength}
- Pause placement: ${guidelines.pauseFrequency}
- Emphasis style: ${guidelines.emphasisLevel}

Voice Style: ${voiceStyle}
Speed: ${speed} (${speedMultiplier}x normal pace)

ADAPTATION RULES:

1. TEXT FORMAT & CLEANUP
   - Remove all markdown formatting (bold, italics, links)
   - Remove brackets, parentheses, emojis, special symbols
   - Remove visual references ("as shown on screen", "look at the chart")
   - Replace with audio-friendly descriptions

2. NATURAL SPEECH
   - Replace abbreviations with full words (e.g., "CEO" → "chief executive officer")
   - Convert numbers to spoken format (e.g., "2025" → "twenty twenty-five", "R$1.500" → "mil e quinhentos reais")
   - Use contractions naturally ("don't", "it's", "we've")
   - Break long sentences into shorter chunks for breathing

3. PAUSE MARKERS
   - Insert [pausa] between major ideas (roughly every 2-3 sentences)
   - Insert [pausa longa] between blocks or before important statements
   - Use [pausa curta] for commas or natural breaks within a paragraph
   - NOTE: These markers will be removed by the adapter before TTS, they're for rhythm reference

4. EMPHASIS & TONE ADAPTATION
   - Highlight key words with CAPS LOCK only when matched to "${tone}" tone
   - For DRAMATIC: CAPS LOCK on power words (max 2-3 per paragraph)
   - For CALM: Use italic-like markers sparingly with *asterisks* for gentle emphasis
   - For ENERGETIC: Abundant enthusiasm but natural phrasing
   - For SUSPENSEFUL: Emphasis on mystery words and setup phrases

5. VOICE-SPECIFIC ADJUSTMENTS
   - Professional: Formal tone, clear articulation, precise pacing
   - Casual: Conversational, contractions, natural rhythm
   - Enthusiastic: Upbeat phrasing, energetic punctuation (but not overused)
   - Soft: Gentle pacing, soothing word choices, warm tone

OUTPUT FORMAT:

Return ONLY the adapted narration text with:
- Original block structure preserved (keep [BLOCK_TYPE] markers)
- Natural flowing sentences optimized for speech
- [pausa], [pausa curta], and [pausa longa] markers inserted strategically
- CAPS LOCK for emphasis matching the tone
- No explanations or meta-commentary

Begin the adapted narration now:`;
};

export { narrationPrompt, type NarrationInput } from './narration-legacy.prompt.js';
