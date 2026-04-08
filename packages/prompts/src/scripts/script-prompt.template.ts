import { FormatType, NicheCategory, ContentTone } from './types.js';

export interface ScriptPromptInput {
  topic: string;
  niche: NicheCategory;
  tone?: ContentTone | string;
  formatType: FormatType;
  gaps?: string[];
  targetAudience?: string;
  maxTokens?: number;
}

export interface ScriptBlockOutput {
  id: string;
  type: 'HOOK' | 'INTRO' | 'DEVELOPMENT' | 'RETENTION_CTA' | 'CONCLUSION';
  content: string;
  estimatedDuration: number;
  wordCount: number;
}

export interface ScriptOutput {
  blocks: ScriptBlockOutput[];
  totalEstimatedDuration: number;
  totalWordCount: number;
  originalityScore: number;
  estimatedCostBrl: number;
}

/**
 * Generates a typed script prompt template that returns pure JSON
 * Includes few-shot examples for accurate output formatting
 */
export const scriptPromptTemplate = ({
  topic,
  niche,
  tone = ContentTone.CASUAL,
  formatType,
  gaps = [],
  targetAudience = 'general audience',
  maxTokens,
}: ScriptPromptInput): { prompt: string; maxTokens: number } => {
  const calculatedMaxTokens = maxTokens || getDefaultMaxTokens(formatType);
  const durationMinutes = getDurationForFormat(formatType);
  const gapsContext = gaps.length > 0 ? `\n\nQuality Gaps to Address:\n${gaps.map(g => `- ${g}`).join('\n')}` : '';

  const prompt = `You are an expert content creator specializing in ${niche} videos.

TASK: Create a complete video script for: "${topic}"

Context:
- Niche: ${niche}
- Format: ${formatType}
- Tone: ${tone}
- Target Audience: ${targetAudience}
- Duration: ~${durationMinutes} minutes${gapsContext}

REQUIREMENTS:
1. Return ONLY valid JSON, no markdown, no preamble, no explanations
2. Structure must match the example below exactly
3. No text outside the JSON object
4. All fields are required
5. estimatedDuration in seconds, wordCount for each block

OUTPUT STRUCTURE - Return only this JSON:
{
  "blocks": [
    {
      "id": "string",
      "type": "HOOK" | "INTRO" | "DEVELOPMENT" | "RETENTION_CTA" | "CONCLUSION",
      "content": "string",
      "estimatedDuration": number,
      "wordCount": number
    }
  ],
  "totalEstimatedDuration": number,
  "totalWordCount": number,
  "originalityScore": number (0-1),
  "estimatedCostBrl": number
}

${getFewShotExamples(formatType)}

Now create the script for "${topic}". Return ONLY the JSON, nothing else.`;

  return { prompt, maxTokens: calculatedMaxTokens };
};

function getDefaultMaxTokens(formatType: FormatType): number {
  const defaults: Record<FormatType, number> = {
    [FormatType.LONG_FORM]: 2000,
    [FormatType.MEDIUM_FORM]: 1500,
    [FormatType.SHORT_FORM]: 600,
    [FormatType.CAROUSEL]: 1200,
    [FormatType.PODCAST]: 2500,
  };
  return defaults[formatType] || 1500;
}

function getDurationForFormat(formatType: FormatType): number {
  const durations: Record<FormatType, number> = {
    [FormatType.LONG_FORM]: 10,
    [FormatType.MEDIUM_FORM]: 5,
    [FormatType.SHORT_FORM]: 1,
    [FormatType.CAROUSEL]: 0.5,
    [FormatType.PODCAST]: 20,
  };
  return durations[formatType] || 10;
}

function getFewShotExamples(formatType: FormatType): string {
  if (formatType === FormatType.SHORT_FORM) {
    return `EXAMPLE OUTPUT FOR SHORT_FORM (60 seconds):
{
  "blocks": [
    {
      "id": "hook",
      "type": "HOOK",
      "content": "Most people get this wrong... but here's the secret that changes everything",
      "estimatedDuration": 5,
      "wordCount": 20
    },
    {
      "id": "dev",
      "type": "DEVELOPMENT",
      "content": "The key insight is understanding that [main point]. This means [consequence]. For example, [relatable example that proves the point].",
      "estimatedDuration": 40,
      "wordCount": 100
    },
    {
      "id": "cta",
      "type": "RETENTION_CTA",
      "content": "Save this for later. Follow for more insights like this.",
      "estimatedDuration": 10,
      "wordCount": 20
    },
    {
      "id": "conclusion",
      "type": "CONCLUSION",
      "content": "The bottom line: [summary]. Try it and let me know in the comments.",
      "estimatedDuration": 5,
      "wordCount": 20
    }
  ],
  "totalEstimatedDuration": 60,
  "totalWordCount": 160,
  "originalityScore": 0.82,
  "estimatedCostBrl": 5.50
}`;
  }

  return `EXAMPLE OUTPUT FOR LONG_FORM (10+ minutes):
{
  "blocks": [
    {
      "id": "hook",
      "type": "HOOK",
      "content": "What if I told you that the one thing everyone knows about [topic] is actually wrong?",
      "estimatedDuration": 30,
      "wordCount": 50
    },
    {
      "id": "intro",
      "type": "INTRO",
      "content": "In the next 10 minutes, you'll discover the real truth about [topic] that billion-dollar companies don't want you to know.",
      "estimatedDuration": 30,
      "wordCount": 60
    },
    {
      "id": "dev1",
      "type": "DEVELOPMENT",
      "content": "Let's start with the problem nobody talks about. When [situation happens], most people [common mistake]. Here's why that backfires: [explanation with data/examples].",
      "estimatedDuration": 180,
      "wordCount": 400
    },
    {
      "id": "dev2",
      "type": "DEVELOPMENT",
      "content": "The real solution is counterintuitive. Instead of [common approach], you should [better approach]. I've seen people [results]. For instance, [specific case study or example].",
      "estimatedDuration": 180,
      "wordCount": 400
    },
    {
      "id": "cta",
      "type": "RETENTION_CTA",
      "content": "If you found this useful, smash that subscribe button and ring the notification bell. I drop content like this every week.",
      "estimatedDuration": 60,
      "wordCount": 80
    },
    {
      "id": "conclusion",
      "type": "CONCLUSION",
      "content": "So to recap: the key takeaway is [summary]. Start implementing this today. And if you want to go deeper, check out [next video]. See you in the next one.",
      "estimatedDuration": 30,
      "wordCount": 50
    }
  ],
  "totalEstimatedDuration": 510,
  "totalWordCount": 1040,
  "originalityScore": 0.88,
  "estimatedCostBrl": 22.75
}`;
}
