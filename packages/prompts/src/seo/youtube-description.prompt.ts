export interface YoutubeDescriptionInput {
  title: string;
  topic: string;
  niche: string;
  keywords?: string[];
  channelName?: string;
  socialLinks?: Record<string, string>;
}

export const youtubeDescriptionPrompt = ({
  title,
  topic,
  niche,
  keywords = [],
  channelName = 'nosso canal',
  socialLinks = {},
}: YoutubeDescriptionInput) => `
Você é um especialista em SEO para YouTube.

Escreva uma descrição otimizada para o vídeo abaixo:
Título: "${title}"
Tema: ${topic}
Nicho: ${niche}
${keywords.length > 0 ? `Palavras-chave alvo: ${keywords.join(', ')}` : ''}

Estrutura obrigatória:

PARÁGRAFO DE ABERTURA (2–3 frases):
- Resumo do vídeo incluindo a palavra-chave principal nas primeiras 150 caracteres
- Deve fazer o espectador querer continuar lendo

ÍNDICE DE CAPÍTULOS (se o vídeo tiver blocos):
- Formato: 00:00 Nome do capítulo

PALAVRAS-CHAVE SECUNDÁRIAS:
- Parágrafo natural (não lista) que inclua variações da palavra-chave principal

CTA:
- Inscrever-se no ${channelName}
- Ativar notificações
${Object.entries(socialLinks).map(([plat, url]) => `- ${plat}: ${url}`).join('\n')}

HASHTAGS FINAIS:
- 3 hashtags relevantes ao nicho

Retorne a descrição completa pronta para colar no YouTube.
`;
