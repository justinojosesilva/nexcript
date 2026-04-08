import { FormatType, NicheCategory, ContentTone } from "./types.js";

export interface ScriptGapBasedInput {
  topic: string;
  gaps: string[];
  niche: NicheCategory;
  tone: ContentTone;
  formatType: FormatType;
  durationMinutes: number;
}

export interface ScriptGapBasedOutput {
  blocks: Array<{
    id: string;
    type: "HOOK" | "INTRO" | "DEVELOPMENT" | "RETENTION_CTA" | "CONCLUSION";
    content: string;
    estimatedDuration: number;
    wordCount: number;
  }>;
  title: string;
  estimatedDuration: number;
}

/**
 * Max tokens by format type
 * Long formats need more token budget for detailed development
 * Short formats must be concise with minimal tokens
 */
const getMaxTokens = (formatType: FormatType): number => {
  const maxTokensByFormat: Record<FormatType, number> = {
    [FormatType.LONG_FORM]: 2000,
    [FormatType.MEDIUM_FORM]: 1500,
    [FormatType.SHORT_FORM]: 600,
    [FormatType.CAROUSEL]: 1200,
    [FormatType.PODCAST]: 2500,
  };
  return maxTokensByFormat[formatType] || 1500;
};

/**
 * Block count by format type
 * Long formats have multiple blocks for deep development
 * Short formats must be concise with minimal blocks
 */
const getBlockCount = (
  formatType: FormatType,
): { min: number; max: number } => {
  const blocksByFormat: Record<FormatType, { min: number; max: number }> = {
    [FormatType.LONG_FORM]: { min: 5, max: 7 },
    [FormatType.MEDIUM_FORM]: { min: 4, max: 5 },
    [FormatType.SHORT_FORM]: { min: 2, max: 3 },
    [FormatType.CAROUSEL]: { min: 3, max: 4 },
    [FormatType.PODCAST]: { min: 5, max: 8 },
  };
  return blocksByFormat[formatType] || { min: 4, max: 5 };
};

/**
 * Generates a gap-based script prompt that uses quality gaps to guide
 * script generation with format-specific constraints
 */
export const scriptGapBasedPrompt = ({
  topic,
  gaps,
  niche,
  tone,
  formatType,
  durationMinutes,
}: ScriptGapBasedInput): {
  prompt: string;
  maxTokens: number;
} => {
  const maxTokens = getMaxTokens(formatType);
  const blockCount = getBlockCount(formatType);
  const gapContext =
    gaps.length > 0
      ? `\nQuality Gaps to Address:\n${gaps.map((g) => `- ${g}`).join("\n")}\n`
      : "";

  const blockRangeDescription =
    formatType === FormatType.SHORT_FORM
      ? `2-3 focused blocks`
      : `${blockCount.min}-${blockCount.max} structured blocks`;

  const prompt = `You are an expert video script writer specializing in high-quality content creation.

TASK: Create a high-quality video script that addresses specific content gaps.

Video Details:
- Topic: "${topic}"
- Niche: ${niche}
- Tone: ${tone}
- Format: ${formatType}
- Duration: ~${durationMinutes} minutes
${gapContext}
Your Goal:
Create a script that DIRECTLY ADDRESSES each gap listed above. Every gap should be resolved with specific, actionable content that improves the viewer experience.

REQUIREMENTS:
1. Return ONLY valid JSON, no markdown, no preamble
2. Structure: ${blockRangeDescription} with clear progression
3. Each block must address one or more of the gaps above
4. All fields required, no null values
5. Estimated duration in seconds, word count per block

OUTPUT STRUCTURE (Return only this JSON):
{
  "blocks": [
    {
      "id": "string (e.g., 'block-1')",
      "type": "HOOK" | "INTRO" | "DEVELOPMENT" | "RETENTION_CTA" | "CONCLUSION",
      "content": "string (full block text, natural and engaging)",
      "estimatedDuration": number (seconds),
      "wordCount": number
    }
  ],
  "title": "string (compelling video title based on topic and gaps)",
  "estimatedDuration": number (total seconds = ${durationMinutes} * 60)
}

BLOCK GUIDELINES:

HOOK (required for ${formatType} format):
- First 3-5 seconds grab attention
- Reference a gap or pain point to establish relevance
- Setup curiosity or promise value
- Natural, conversational language

INTRO (recommended):
- Introduce yourself and channel if applicable
- State what the viewer will learn
- Acknowledge the gaps you'll address
- Build credibility

DEVELOPMENT (${blockCount.min}-${blockCount.max - 2} blocks for this format):
- Deep dive into solutions addressing the gaps
- Use examples, data, or case studies
- Break complex ideas into digestible sections
- Each block should solve one specific gap
- Maintain consistent ${tone.toLowerCase()} tone

RETENTION_CTA (recommended):
- Keep viewers engaged midway through
- Call to action: like, subscribe, comment
- Natural transition to next section

CONCLUSION:
- Summarize key learnings
- Final call to action
- Thank viewers for watching

TONE GUIDANCE (${tone}):
Apply this tone consistently throughout:
- CASUAL: Conversational, use "you", contractions, friendly
- PROFESSIONAL: Formal, authoritative, structured
- ENERGETIC: Enthusiastic, varied pacing, exclamation points (moderate)
- INSPIRATIONAL: Motivational language, emotional resonance, uplifting

FORMAT-SPECIFIC CONSTRAINTS:
${
  formatType === FormatType.LONG_FORM
    ? `- Long-form allows detailed explanation and multiple viewpoints
- Include transitions between blocks
- Can go deep on each gap`
    : ""
}
${
  formatType === FormatType.SHORT_FORM
    ? `- Short-form demands CONCISENESS - every word counts
- Maximum 3 blocks total - no filler
- Jump to the point quickly
- Each gap gets 1-2 sentences maximum resolution`
    : ""
}

GAP-ADDRESSING CHECKLIST:
Before finalizing, ensure:
- Every gap listed is explicitly addressed in the script
- Gaps are solved with concrete information or solutions
- Content flows naturally despite addressing multiple gaps
- Tone and format constraints are respected

Now create the script addressing these gaps. Return ONLY the JSON:`;

  return { prompt, maxTokens };
};
