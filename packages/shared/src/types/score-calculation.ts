/**
 * Classificação do score final do conteúdo
 */
export enum ScoreClassification {
  PUBLISH = 'PUBLISH',
  EVALUATE = 'EVALUATE',
  AVOID = 'AVOID',
}

/**
 * Configuração de pesos para o cálculo de score
 * Soma dos pesos deve ser 1.0
 */
export interface ScoreWeightsConfig {
  /** Peso para dimensão 1 (padrão: 0.30) */
  dimension1: number;

  /** Peso para dimensão 2 (padrão: 0.25) */
  dimension2: number;

  /** Peso para dimensão 3 (padrão: 0.30) */
  dimension3: number;

  /** Peso para dimensão 4 (padrão: 0.15) */
  dimension4: number;
}

/**
 * Scores individuais das 4 dimensões principais
 */
export interface DimensionScoreValues {
  /** Score da dimensão 1 (0-100) */
  dimension1: number;

  /** Score da dimensão 2 (0-100) */
  dimension2: number;

  /** Score da dimensão 3 (0-100) */
  dimension3: number;

  /** Score da dimensão 4 (0-100) */
  dimension4: number;
}

/**
 * Resultado do cálculo de score
 */
export interface ScoreCalculationResult {
  /** Score final calculado (0-100) */
  score: number;

  /** Classificação do score */
  classification: ScoreClassification;

  /** Pesos utilizados no cálculo */
  weights: ScoreWeightsConfig;

  /** Scores das dimensões utilizadas */
  dimensionScores: DimensionScoreValues;
}
