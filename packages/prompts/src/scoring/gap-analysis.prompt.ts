export interface GapAnalysisInput {
  keyword: string;
  videos: Array<{
    title: string;
    description?: string;
    duration?: number;
    viewCount?: number;
  }>;
}

export const gapAnalysisPrompt = ({
  keyword,
  videos,
}: GapAnalysisInput) => `
Você é um especialista em estratégia de conteúdo para YouTube.

Analise o keyword "${keyword}" e os vídeos existentes abaixo para identificar gaps (lacunas) de conteúdo que poderiam ser explorados.

VÍDEOS EXISTENTES:
${videos.map((v, i) => `
${i + 1}. "${v.title}"
   ${v.description ? `Descrição: ${v.description}` : ''}
   ${v.duration ? `Duração: ${v.duration}min` : ''}
   ${v.viewCount ? `Views: ${v.viewCount.toLocaleString('pt-BR')}` : ''}
`).join('\n')}

INSTRUÇÕES:
1. Identifique lacunas (gaps) não cobertas pelos vídeos existentes
2. Considere ângulos diferentes como:
   - Diferentes formatos (tutorial, story-telling, comparação, análise profunda)
   - Diferentes níveis de expertise (iniciante, intermediário, avançado)
   - Diferentes perspectivas (prós/contras, O que é, Como fazer, Por quê)
   - Diferentes durations (short-form vs long-form)
   - Diferentes estilos (humor, drama, educacional, inspiracional)

3. Retorne OBRIGATORIAMENTE um JSON com o seguinte formato:
{
  "gapScore": 0-100, // 0 = mercado saturado, 100 = muitas lacunas
  "gaps": [
    {
      "title": "título resumido da lacuna",
      "description": "descrição detalhada do gap identificado",
      "opportunity": "por que essa lacuna é uma oportunidade",
      "searchVolume": "baixa|média|alta" // estimativa de interesse
    }
  ],
  "suggestedAngles": [
    {
      "angle": "título do vídeo sugerido",
      "format": "tutorial|story|comparison|deep-dive|hacks|tips|review|analysis|how-to",
      "targetAudience": "quem se beneficiaria deste conteúdo",
      "competitionLevel": "baixa|média|alta",
      "estimatedViews": "estimativa de potencial de views (baixo|médio|alto)"
    }
  ],
  "summary": "resumo geral da estratégia recomendada em 3-4 frases"
}

Análise:
- Baseie-se nos títulos e descrições dos vídeos existentes
- Procure por ângulos não explorados
- Avalie o potencial de views baseado em tendências e interesse
- Foque em oportunidades realistas e viáveis
`;
