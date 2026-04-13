/**
 * Output type for title variants prompt
 */
export interface TitleVariant {
  title: string;
  ctReason: string;
  score: number;
}

export interface TitleVariantsOutput {
  variants: TitleVariant[];
}

/**
 * Input type for title variants prompt
 */
export interface TitleVariantsInput {
  topic: string;
  niche: string;
  tone: string;
  gaps?: string[];
  topVideos?: Array<{ title: string; views: number }>;
}

/**
 * Generates 3-5 ranked title variants optimized for CTR
 * Returns JSON with { variants: [{ title, ctReason, score }] }
 * max_tokens: 400
 */
export const titleVariantsPrompt = ({
  topic,
  niche,
  tone,
  gaps = [],
  topVideos = [],
}: TitleVariantsInput) => `You are a YouTube title optimization expert. Generate 3-5 high-performance title variants for a video.

Topic: "${topic}"
Niche: ${niche}
Tone: ${tone}
${gaps.length > 0 ? `Audience gaps to address: ${gaps.join(", ")}` : ""}
${topVideos.length > 0 ? `Top performing titles in this niche: ${topVideos.map((v) => `"${v.title}" (${v.views} views)`).join(", ")}` : ""}

Requirements for each title:
- Maximum 60 characters
- Include at least 2 engagement triggers: curiosity, urgency, number/benefit, or controversy
- Avoid misleading clickbait — title must match video content
- Optimize for CTR while maintaining credibility
- Use power words appropriate for the tone

Return ONLY a valid JSON object in this format (no markdown, no extra text):
{
  "variants": [
    {
      "title": "exact title text",
      "ctReason": "brief explanation of CTR appeal",
      "score": 85
    }
  ]
}

Score ranges: 75-90 (good), 85-95 (excellent), 90+ (exceptional)
`;
