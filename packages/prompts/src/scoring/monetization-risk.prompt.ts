export interface MonetizationRiskInput {
  title: string;
  script: string;
  niche: string;
}

export const monetizationRiskPrompt = ({
  title,
  script,
  niche,
}: MonetizationRiskInput) => `
Você é um especialista em políticas do YouTube e monetização de conteúdo.

Analise o conteúdo abaixo e retorne um relatório de risco de monetização.

Título: "${title}"
Nicho: ${niche}
Roteiro:
---
${script}
---

Retorne um JSON estruturado com o seguinte formato:
{
  "score": 0-100, // 100 = totalmente seguro para monetização
  "rating": "safe" | "moderate" | "risky" | "demonetized",
  "flags": [
    {
      "type": "language" | "topic" | "graphic" | "controversial" | "copyright",
      "excerpt": "trecho problemático",
      "reason": "explicação do risco",
      "suggestion": "como corrigir"
    }
  ],
  "adSuitability": "limited" | "standard" | "premium",
  "summary": "resumo em 2 frases do diagnóstico geral"
}

Critérios de avaliação:
- Linguagem ofensiva ou palavrões
- Temas sensíveis (violência, política, saúde, finanças com promessas)
- Conteúdo voltado a adultos
- Referências a marcas ou direitos autorais
- Desinformação ou afirmações sem evidência
`;
