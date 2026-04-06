export interface AiScriptInput {
  topic: string;
  angle?: string;
  durationMinutes?: number;
}

export const aiScriptPrompt = ({
  topic,
  angle = 'impacto no mercado de trabalho',
  durationMinutes = 10,
}: AiScriptInput) => `
Você é um especialista em canais de tecnologia e inteligência artificial no YouTube.

Crie um roteiro completo para um vídeo de ${durationMinutes} minutos sobre: "${topic}"

Ângulo editorial: ${angle}

Estrutura obrigatória:
1. GANCHO (0:00–0:30) — abertura que gera curiosidade imediata
2. PROMESSA (0:30–1:00) — o que muda na vida do espectador após assistir
3. BLOCO 1 — contexto: onde estamos agora
4. BLOCO 2 — o que está mudando (dados recentes)
5. BLOCO 3 — quem vai ser afetado e como
6. BLOCO 4 — o que fazer para se adaptar / aproveitar
7. BLOCO 5 — previsão e próximos passos
8. CTA FINAL — inscrição, comentário e vídeo relacionado

Diretrizes:
- Tom informativo mas acessível, sem ser técnico demais
- Cite exemplos reais de empresas, produtos ou pessoas
- Use analogias para explicar conceitos complexos
- Gere senso de urgência sem alarmismo

Retorne o roteiro formatado com timestamps estimados para cada bloco.
`;
