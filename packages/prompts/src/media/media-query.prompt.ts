export interface MediaQueryInput {
  /**
   * Conteúdo do bloco de script (contexto para busca de mídia)
   */
  blockContent: string;

  /**
   * Nicho/categoria do conteúdo (ex: finance, productivity, ai, gaming)
   */
  niche: string;

  /**
   * Tom do conteúdo (ex: professional, casual, energetic, educational)
   */
  tone: string;
}

/**
 * Gera uma query de busca otimizada para Pexels/Pixabay
 * Retorna 1-5 palavras em inglês, curtas e objetivas
 * max_tokens: 30
 */
export const mediaQueryPrompt = ({
  blockContent,
  niche,
  tone,
}: MediaQueryInput) => `You are a media search optimization expert. Generate a short, concise search query (1-5 words) in English for Pexels or Pixabay stock image/video libraries.

Context:
- Script block content: "${blockContent}"
- Content niche: ${niche}
- Tone: ${tone}

Requirements:
- Output ONLY the search query (1-5 words maximum)
- Use English language
- Be specific and descriptive
- Optimize for stock photo/video search
- No hashtags, no quotes, no extra text

Generate the search query:`;
