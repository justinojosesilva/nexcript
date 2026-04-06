export interface ShortsTitleInput {
  topic: string;
  niche: string;
  quantity?: number;
}

export const shortsTitlePrompt = ({
  topic,
  niche,
  quantity = 10,
}: ShortsTitleInput) => `
Você é um especialista em YouTube Shorts e conteúdo de formato curto.

Gere ${quantity} títulos otimizados para Shorts sobre: "${topic}"
Nicho: ${niche}

Regras específicas para Shorts:
- Máximo de 50 caracteres
- Deve funcionar como legenda visível no feed (primeiras 3 palavras precisam prender)
- Perguntas funcionam bem: "Você sabia que...?", "Por que todo mundo..."
- Imperativos diretos também: "Para tudo e assiste isso", "Não erre nisso"
- Use emojis estrategicamente (1–2 por título) para destaque no feed

Tom: direto, rápido, impactante.

Retorne os títulos numerados, sem explicações adicionais.
`;
