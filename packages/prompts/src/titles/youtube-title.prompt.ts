export interface YouTubeTitleInput {
  topic: string;
  niche: string;
  keywords?: string[];
  quantity?: number;
}

export const youtubeTitlePrompt = ({
  topic,
  niche,
  keywords = [],
  quantity = 10,
}: YouTubeTitleInput) => `
Você é um especialista em SEO e copywriting para YouTube.

Gere ${quantity} títulos de alta performance para um vídeo sobre: "${topic}"
Nicho: ${niche}
${keywords.length > 0 ? `Palavras-chave para incluir: ${keywords.join(', ')}` : ''}

Regras obrigatórias:
- Máximo de 60 caracteres por título
- Use números quando possível (ex: "7 formas", "R$5.000", "em 30 dias")
- Combine pelo menos 2 dos seguintes gatilhos: curiosidade, urgência, benefício claro, segredo, medo de perda
- Evite clickbait vazio — o título deve refletir o conteúdo real

Formatos para variar:
- "Como [resultado] sem [objeção comum]"
- "[Número] [coisas/erros/segredos] que [consequência]"
- "Por que [crença popular] está [errada/te custando dinheiro/etc]"
- "O que [autoridade/maioria] não te conta sobre [tema]"
- "[Verbo de ação]: [resultado concreto] em [prazo]"

Retorne os títulos numerados, sem explicações adicionais.
`;
