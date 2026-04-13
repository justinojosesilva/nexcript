/**
 * Output type for tags prompt
 */
export interface YoutubeTagsOutput {
  primary: string[];
  secondary: string[];
  niche: string[];
  trending: string[];
}

/**
 * Input type for tags prompt
 */
export interface YoutubeTagsInput {
  topic: string;
  niche: string;
  titles: string[];
}

/**
 * Generates categorized YouTube tags for SEO optimization
 * Returns JSON with { primary, secondary, niche, trending }
 * max_tokens: 300
 */
export const tagsPrompt = ({
  topic,
  niche,
  titles = [],
}: YoutubeTagsInput) => `You are a YouTube SEO expert. Generate high-performance tags for a video.

Topic: "${topic}"
Niche: ${niche}
${titles.length > 0 ? `Video titles: ${titles.join(", ")}` : ""}

Generate tags in 4 categories:

PRIMARY (3-4 tags):
- Core keywords directly related to the topic
- High search volume, moderate-to-high competition
- Target audience searches for these

SECONDARY (3-4 tags):
- Related keywords, long-tail variations
- Lower competition, specific audience segments
- Support primary tags for discovery

NICHE (2-3 tags):
- Niche-specific terminology and community keywords
- Highly relevant to the specific niche audience
- May have lower volume but high relevance

TRENDING (1-2 tags):
- Current trending topics that relate to the video
- Seasonal or topical keywords
- Time-sensitive but high visibility

Return ONLY a valid JSON object in this format (no markdown, no extra text):
{
  "primary": ["tag1", "tag2", "tag3"],
  "secondary": ["tag4", "tag5", "tag6"],
  "niche": ["tag7", "tag8"],
  "trending": ["tag9"]
}

Tag guidelines:
- No spaces within tags (use hyphens if needed)
- Avoid generic tags like "youtube" or "video"
- Keep tags relevant and specific
- Total 10-13 tags maximum
`;
