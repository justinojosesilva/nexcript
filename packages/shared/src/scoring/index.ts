/**
 * @nexvideo/shared - Scoring Module
 * Cálculo e classificação de scores de conteúdo com pesos configuráveis
 */

export { ScoreCalculator } from "./score-calculator.js";
export type {
  DimensionScoreValues,
  ScoreCalculationResult,
  ScoreWeightsConfig,
} from "../types/score-calculation.js";
export { ScoreClassification } from "../types/score-calculation.js";
