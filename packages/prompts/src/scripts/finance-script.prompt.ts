export interface FinanceScriptInput {
  topic: string;
  targetAudience?: string;
  durationMinutes?: number;
}

export const financeScriptPrompt = ({
  topic,
  targetAudience = "pessoas comuns que querem organizar as finanças",
  durationMinutes = 10,
}: FinanceScriptInput) => `
Você é um especialista em canais dark de finanças no YouTube.

Crie um roteiro completo para um vídeo de ${durationMinutes} minutos sobre: "${topic}"

Público-alvo: ${targetAudience}

Estrutura obrigatória:
1. GANCHO (0:00–0:30) — frase de abertura que prende atenção imediatamente
2. PROMESSA (0:30–1:00) — o que o espectador vai aprender/ganhar
3. BLOCO 1 — contexto e problema
4. BLOCO 2 — agravamento do problema (dor)
5. BLOCO 3 — revelação / solução principal
6. BLOCO 4 — detalhamento prático com exemplos
7. BLOCO 5 — como aplicar hoje mesmo
8. CTA FINAL — inscrição, comentário e próximo vídeo relacionado

Diretrizes:
- Linguagem simples, direta, sem jargões desnecessários
- Frases curtas para favorecer retenção
- Números e dados concretos sempre que possível
- Gatilhos mentais: urgência, escassez, prova social, autoridade

Retorne o roteiro formatado com timestamps estimados para cada bloco.
`;
