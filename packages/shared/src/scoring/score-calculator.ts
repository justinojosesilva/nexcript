import {
  DimensionScoreValues,
  ScoreCalculationResult,
  ScoreClassification,
  ScoreWeightsConfig,
} from "../types/score-calculation.js";

/**
 * Calculador de score final baseado em dimensões ponderadas
 *
 * Fórmula: D1×w1 + (100−D2)×w2 + D3×w3 + D4×w4
 * Onde:
 * - D2 é invertida (risco/negativo)
 * - Pesos w1, w2, w3, w4 são configuráveis
 * - Resultado final é normalizado para 0-100
 */
export class ScoreCalculator {
  private static readonly DEFAULT_WEIGHTS: ScoreWeightsConfig = {
    dimension1: 0.3,
    dimension2: 0.25,
    dimension3: 0.3,
    dimension4: 0.15,
  };

  private static readonly THRESHOLD_PUBLISH = 75;
  private static readonly THRESHOLD_EVALUATE = 50;

  private readonly weights: ScoreWeightsConfig;

  /**
   * Cria nova instância do calculador com pesos opcionais
   * @param weights Pesos configuráveis. Se não fornecido, usa pesos padrão
   */
  constructor(weights?: Partial<ScoreWeightsConfig>) {
    this.weights = {
      ...ScoreCalculator.DEFAULT_WEIGHTS,
      ...weights,
    };

    this.validateWeights();
  }

  /**
   * Valida que os pesos somam 1.0 (com margem de 0.001 para arredondamento)
   */
  private validateWeights(): void {
    const sum =
      this.weights.dimension1 +
      this.weights.dimension2 +
      this.weights.dimension3 +
      this.weights.dimension4;

    const tolerance = 0.001;
    if (Math.abs(sum - 1.0) > tolerance) {
      throw new Error(
        `Pesos devem somar 1.0, mas somaram ${sum.toFixed(3)}. ` +
          `Forneça pesos válidos: ${JSON.stringify(this.weights)}`,
      );
    }
  }

  /**
   * Valida que um score está no intervalo 0-100
   */
  private validateScore(score: number, dimension: string): void {
    if (score < 0 || score > 100) {
      throw new Error(
        `${dimension} deve estar entre 0 e 100, recebeu ${score}`,
      );
    }
  }

  /**
   * Calcula o score final baseado nas dimensões
   * Fórmula: D1×w1 + (100−D2)×w2 + D3×w3 + D4×w4
   *
   * @param dimensions Scores das 4 dimensões (0-100 cada)
   * @returns Resultado do cálculo com score final (0-100) e classificação
   */
  calculate(dimensions: DimensionScoreValues): ScoreCalculationResult {
    // Validar entrada
    this.validateScore(dimensions.dimension1, "Dimension1");
    this.validateScore(dimensions.dimension2, "Dimension2");
    this.validateScore(dimensions.dimension3, "Dimension3");
    this.validateScore(dimensions.dimension4, "Dimension4");

    // Aplicar fórmula: D1×w1 + (100−D2)×w2 + D3×w3 + D4×w4
    const invertedDimension2 = 100 - dimensions.dimension2;

    const finalScore =
      dimensions.dimension1 * this.weights.dimension1 +
      invertedDimension2 * this.weights.dimension2 +
      dimensions.dimension3 * this.weights.dimension3 +
      dimensions.dimension4 * this.weights.dimension4;

    // Normalizar para intervalo 0-100 (já deve estar, mas por segurança)
    const normalizedScore = Math.min(100, Math.max(0, finalScore));

    return {
      score: normalizedScore,
      classification: this.classify(normalizedScore),
      weights: this.weights,
      dimensionScores: dimensions,
    };
  }

  /**
   * Classifica o score final em categorias
   * - PUBLISH: score >= 75
   * - EVALUATE: 50 <= score < 75
   * - AVOID: score < 50
   *
   * @param score Score final (0-100)
   * @returns Classificação do score
   */
  private classify(score: number): ScoreClassification {
    if (score >= ScoreCalculator.THRESHOLD_PUBLISH) {
      return ScoreClassification.PUBLISH;
    }

    if (score >= ScoreCalculator.THRESHOLD_EVALUATE) {
      return ScoreClassification.EVALUATE;
    }

    return ScoreClassification.AVOID;
  }

  /**
   * Classifica score baseado em um valor direto
   * Útil para testes e operações independentes
   *
   * @param score Score a classificar (0-100)
   * @returns Classificação do score
   */
  classifyScore(score: number): ScoreClassification {
    if (score < 0 || score > 100) {
      throw new Error(`Score deve estar entre 0 e 100, recebeu ${score}`);
    }

    if (score >= ScoreCalculator.THRESHOLD_PUBLISH) {
      return ScoreClassification.PUBLISH;
    }

    if (score >= ScoreCalculator.THRESHOLD_EVALUATE) {
      return ScoreClassification.EVALUATE;
    }

    return ScoreClassification.AVOID;
  }

  /**
   * Retorna os pesos atuais do calculador
   */
  getWeights(): ScoreWeightsConfig {
    return { ...this.weights };
  }

  /**
   * Retorna os thresholds de classificação
   */
  static getThresholds() {
    return {
      publish: ScoreCalculator.THRESHOLD_PUBLISH,
      evaluate: ScoreCalculator.THRESHOLD_EVALUATE,
    };
  }

  /**
   * Retorna os pesos padrão
   */
  static getDefaultWeights(): ScoreWeightsConfig {
    return { ...ScoreCalculator.DEFAULT_WEIGHTS };
  }
}
