export interface ProductivityScriptInput {
  topic: string;
  framework?: string;
  durationMinutes?: number;
}

export const productivityScriptPrompt = ({
  topic,
  framework = 'método prático com passos aplicáveis hoje',
  durationMinutes = 8,
}: ProductivityScriptInput) => `
Você é um especialista em produtividade e desenvolvimento pessoal para YouTube.

Crie um roteiro completo para um vídeo de ${durationMinutes} minutos sobre: "${topic}"

Abordagem: ${framework}

Estrutura obrigatória:
1. GANCHO (0:00–0:30) — situação que o espectador se identifica imediatamente
2. PROMESSA (0:30–1:00) — transformação concreta após aplicar o conteúdo
3. BLOCO 1 — por que as pessoas falham nisso hoje
4. BLOCO 2 — o princípio por trás do método
5. BLOCO 3 — passo a passo detalhado (mínimo 3 passos)
6. BLOCO 4 — exemplos práticos e casos reais
7. BLOCO 5 — como começar nos próximos 10 minutos
8. CTA FINAL — desafio para o espectador, comentário e próximo vídeo

Diretrizes:
- Tom motivador mas realista (sem promessas exageradas)
- Foco em ação imediata, não só teoria
- Use listas e numerações para facilitar a memorização
- Inclua uma frase resumo memorável para cada bloco

Retorne o roteiro formatado com timestamps estimados para cada bloco.
`;
