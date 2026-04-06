/**
 * Scores individuais para diferentes dimensões de análise de conteúdo
 */
export interface DimensionScores {
  /** Score de potencial de viralidade (0-100) */
  virality: number;

  /** Score de monetização (0-100) */
  monetization: number;

  /** Score de retenção esperada (0-100) */
  retention: number;

  /** Score de SEO e descoberta (0-100) */
  seo: number;

  /** Score de engajamento esperado (0-100) */
  engagement: number;

  /** Score de conformidade com políticas (0-100) */
  compliance: number;

  /** Score de qualidade geral do conteúdo (0-100) */
  quality: number;
}

/**
 * Pesos aplicados a cada dimensão para cálculo ponderado
 */
export interface ScoreWeights {
  /** Peso para viralidade (padrão: 0.15) */
  virality: number;

  /** Peso para monetização (padrão: 0.2) */
  monetization: number;

  /** Peso para retenção (padrão: 0.2) */
  retention: number;

  /** Peso para SEO (padrão: 0.15) */
  seo: number;

  /** Peso para engajamento (padrão: 0.15) */
  engagement: number;

  /** Peso para conformidade (padrão: 0.1) */
  compliance: number;

  /** Peso para qualidade (padrão: 0.05) */
  quality: number;
}
