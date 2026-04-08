import { FormatType, NicheCategory, ContentTone } from './types.js';

export interface GenericScriptInput {
  topic: string;
  niche: NicheCategory;
  format: FormatType;
  tone?: ContentTone;
  durationMinutes?: number;
  targetAudience?: string;
}

export const genericScriptPrompt = ({
  topic,
  niche,
  format,
  tone = ContentTone.CASUAL,
  durationMinutes = 10,
  targetAudience = 'general audience',
}: GenericScriptInput): string => {
  const blockStructure = getBlockStructure(format) || '';
  const toneGuideline = getToneGuideline(tone) || '';
  const nicheContext = getNicheContext(niche) || '';

  return `Você é um especialista em criação de conteúdo para ${niche} no YouTube/TikTok.

Crie um roteiro completo para um vídeo ${format} de ${durationMinutes} minutos sobre: "${topic}"

Niche: ${niche}
Público-alvo: ${targetAudience}
Tom: ${tone}

${nicheContext}

Estrutura obrigatória do roteiro em blocos:
${blockStructure}

Diretrizes de tom:
${toneGuideline}

Retorne um JSON válido com a seguinte estrutura:
{
  "blocks": [
    {
      "id": "hook",
      "type": "HOOK",
      "content": "...",
      "estimatedDuration": 30,
      "wordCount": 50
    },
    {
      "id": "intro",
      "type": "INTRO",
      "content": "...",
      "estimatedDuration": 30,
      "wordCount": 60
    },
    {
      "id": "dev1",
      "type": "DEVELOPMENT",
      "content": "...",
      "estimatedDuration": 180,
      "wordCount": 400
    },
    {
      "id": "cta",
      "type": "RETENTION_CTA",
      "content": "...",
      "estimatedDuration": 60,
      "wordCount": 80
    },
    {
      "id": "conclusion",
      "type": "CONCLUSION",
      "content": "...",
      "estimatedDuration": 30,
      "wordCount": 50
    }
  ],
  "totalEstimatedDuration": ${durationMinutes * 60},
  "totalWordCount": 640,
  "originalityScore": 0.85,
  "estimatedCostBrl": 15.50
}`;
};

function getBlockStructure(format: FormatType): string {
  const structures: Record<FormatType, string> = {
    [FormatType.LONG_FORM]: `1. HOOK (0:00–0:30) — frase de abertura que prende atenção imediatamente
2. INTRO (0:30–1:00) — apresentação do tema e promessa do que será entregue
3. DEVELOPMENT 1 (1:00–3:00) — contexto, problema ou curiosidade principal
4. DEVELOPMENT 2 (3:00–6:00) — aprofundamento com exemplos e dados
5. RETENTION_CTA (6:00–6:30) — chamada para ação dentro do vídeo (inscrever, comentar)
6. CONCLUSION (6:30–7:00) — resumo e CTA final (próximo vídeo)`,
    [FormatType.MEDIUM_FORM]: `1. HOOK (0:00–0:15) — abertura impactante
2. INTRO (0:15–0:30) — contexto rápido
3. DEVELOPMENT (0:30–3:30) — conteúdo principal com exemplos
4. RETENTION_CTA (3:30–4:00) — chamada para ação
5. CONCLUSION (4:00–5:00) — conclusão e sugestão do próximo vídeo`,
    [FormatType.SHORT_FORM]: `1. HOOK (0:00–0:05) — abertura explosiva
2. DEVELOPMENT (0:05–0:40) — conteúdo principal (sem introdução longa)
3. RETENTION_CTA (0:40–0:50) — CTA rápido
4. CONCLUSION (0:50–1:00) — conclusão e convite`,
    [FormatType.CAROUSEL]: `1. HOOK (0:00–0:10) — frase inicial impactante
2. DEVELOPMENT (0:10–3:00) — desenvolvimento em 3-5 slides narrativos
3. RETENTION_CTA (3:00–3:15) — chamada para ação (save, share, comment)
4. CONCLUSION (3:15–3:20) — closing`,
    [FormatType.PODCAST]: `1. INTRO (0:00–1:00) — abertura, apresentação do episódio
2. DEVELOPMENT 1 (1:00–8:00) — contexto e desenvolvimento principal
3. DEVELOPMENT 2 (8:00–15:00) — aprofundamento com histórias e exemplos
4. RETENTION_CTA (15:00–16:00) — chamada para ação (subscribe, follow)
5. CONCLUSION (16:00–17:00) — conclusão e prévia do próximo episódio`,
  };

  return structures[format] || '';
}

function getToneGuideline(tone: ContentTone): string {
  const guidelines: Record<ContentTone, string> = {
    [ContentTone.FORMAL]: `- Linguagem profissional e estruturada
- Evite gírias e expressões muito coloquiais
- Cite fontes e dados concretos
- Tom assertivo e seguro`,
    [ContentTone.CASUAL]: `- Linguagem conversacional e natural
- Use expressões do dia a dia
- Seja autêntico e genuíno
- Crie conexão emocional com o público`,
    [ContentTone.FUNNY]: `- Incorpore humor inteligente e timing
- Use ironia e sarcasmo moderado
- Faça piadas relacionadas ao tema
- Mantenha o tom leve sem perder a mensagem`,
    [ContentTone.SERIOUS]: `- Tom grave e concentrado
- Sem piadas ou leveza desnecessária
- Aborde o assunto com peso
- Transmita credibilidade e expertise`,
    [ContentTone.INSPIRATIONAL]: `- Mensagem motivadora e elevadora
- Use histórias de sucesso como exemplos
- Abra horizontes para possibilidades
- Transmita esperança e mudança positiva`,
    [ContentTone.EDUCATIONAL]: `- Didático e estruturado
- Explique conceitos com clareza
- Use exemplos práticos
- Facilite a compreensão e aprendizado`,
    [ContentTone.DARK_COMEDY]: `- Humor sarcástico e observador
- Aborde temas com leveza e crítica
- Faça comentários sobre problemas reais
- Mantenha a inteligência no humor`,
    [ContentTone.SARCASTIC]: `- Tom irónico e provocador
- Questione o óbvio
- Use exagero para efeito
- Seja espirituoso e criativo`,
  };

  return guidelines[tone];
}

function getNicheContext(niche: NicheCategory): string {
  const contexts: Record<NicheCategory, string> = {
    [NicheCategory.FINANCE]: `Contexto: Finanças pessoais, investimentos, gestão de dinheiro
- Público busca aprender a economizar, ganhar ou investir
- Use números, projeções e exemplos práticos
- Gatilhos: urgência, escassez, prova social`,
    [NicheCategory.TECHNOLOGY]: `Contexto: Tecnologia, inovação, gadgets, tendências tech
- Público é curioso e busca estar atualizado
- Explique conceitos complexos de forma acessível
- Mostre aplicação prática da tecnologia`,
    [NicheCategory.PRODUCTIVITY]: `Contexto: Produtividade, gestão de tempo, otimização
- Público quer fazer mais em menos tempo
- Dê dicas acionáveis e ferramentas
- Foque em resultados práticos`,
    [NicheCategory.LIFESTYLE]: `Contexto: Estilo de vida, bem-estar, rotina, hábitos
- Público busca melhorar qualidade de vida
- Compartilhe experiências autênticas
- Inspire mudanças positivas`,
    [NicheCategory.EDUCATION]: `Contexto: Aprendizado, educação, desenvolvimento de habilidades
- Público quer adquirir novos conhecimentos
- Estruture o conteúdo pedagogicamente
- Use exemplos e exercícios práticos`,
    [NicheCategory.ENTERTAINMENT]: `Contexto: Entretenimento, humor, gaming, cultura pop
- Público busca diversão e entretenimento
- Mantenha ritmo rápido e dinâmico
- Use referências culturais relevantes`,
    [NicheCategory.BUSINESS]: `Contexto: Negócios, empreendedorismo, estratégia
- Público busca crescimento e sucesso empresarial
- Ofereça insights acionáveis
- Use case studies e resultados reais`,
    [NicheCategory.HEALTH]: `Contexto: Saúde, fitness, nutrição, bem-estar físico
- Público busca saúde e disposição
- Base em evidências científicas
- Dê orientações práticas e seguras`,
    [NicheCategory.PERSONAL_DEVELOPMENT]: `Contexto: Desenvolvimento pessoal, mindfulness, autoconhecimento
- Público busca evolução pessoal
- Inspire transformação e crescimento
- Compartilhe aprendizados pessoais`,
    [NicheCategory.OTHER]: `Contexto: Niche diverso ou misto
- Adapte o tom e conteúdo ao público específico
- Mantenha autenticidade
- Foque na entrega de valor`,
  };

  return contexts[niche];
}
