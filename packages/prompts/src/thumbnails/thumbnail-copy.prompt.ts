export interface ThumbnailCopyInput {
  topic: string;
  niche: string;
  titleChosen?: string;
  style?: 'dark' | 'bright' | 'minimal';
}

export const thumbnailCopyPrompt = ({
  topic,
  niche,
  titleChosen,
  style = 'dark',
}: ThumbnailCopyInput) => `
Você é um especialista em thumbnails de alto CTR para YouTube.

Gere sugestões de copy e conceito visual para a thumbnail de um vídeo sobre: "${topic}"
Nicho: ${niche}
${titleChosen ? `Título escolhido: "${titleChosen}"` : ''}
Estilo visual: ${style}

Para cada sugestão, entregue:
1. TEXTO PRINCIPAL (máx. 4 palavras, impacto máximo)
2. SUBTEXTO opcional (máx. 3 palavras, complementa sem repetir)
3. EXPRESSÃO FACIAL sugerida para o apresentador (se houver rosto)
4. ELEMENTO VISUAL de destaque (ícone, símbolo, objeto de prop)
5. PALETA DE CORES sugerida (3 cores em HEX)
6. JUSTIFICATIVA (1 linha explicando por que vai converter)

Gere 5 variações distintas entre si.

Regras:
- Texto deve ser legível em tela de celular (fonte grande)
- Contraste alto entre texto e fundo
- Nunca repita o título exato do vídeo na thumbnail
- Gere curiosidade ou choque visual, não apenas descrição
`;
