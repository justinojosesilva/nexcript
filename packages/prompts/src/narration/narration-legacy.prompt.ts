export interface NarrationInput {
  script: string;
  tone?: "serious" | "energetic" | "calm" | "suspenseful";
  targetTtsVoice?: string;
}

export const narrationPrompt = ({
  script,
  tone = "energetic",
  targetTtsVoice,
}: NarrationInput) => `
Você é um especialista em roteiros narrados para YouTube.

Adapte o roteiro abaixo para narração em áudio, otimizado para TTS (text-to-speech)${targetTtsVoice ? ` com a voz "${targetTtsVoice}"` : ""}.

Tom desejado: ${tone}

Roteiro original:
---
${script}
---

Regras de adaptação:
- Remova referências visuais ("como você pode ver", "na tela abaixo") — substitua por descrições auditivas
- Adicione marcações de pausa: [pausa curta] e [pausa longa] nos pontos estratégicos
- Sinalize ênfase em palavras-chave com CAPS LOCK (ex: NUNCA faça isso)
- Quebre frases longas em frases curtas (máx. 20 palavras por frase)
- Adapte números para fala natural (ex: R$1.500 → "mil e quinhentos reais")
- Remova símbolos e formatações que o TTS leria literalmente

Retorne apenas o roteiro adaptado, sem explicações adicionais.
`;
