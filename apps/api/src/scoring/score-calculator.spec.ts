import { ScoreCalculator } from '@nexvideo/shared';
import {
  DimensionScoreValues,
  ScoreClassification,
  ScoreWeightsConfig,
} from '@nexvideo/shared';

describe('ScoreCalculator', () => {
  describe('constructor', () => {
    it('deve criar calculador com pesos padrão', () => {
      const calculator = new ScoreCalculator();
      const weights = calculator.getWeights();

      expect(weights.dimension1).toBe(0.3);
      expect(weights.dimension2).toBe(0.25);
      expect(weights.dimension3).toBe(0.3);
      expect(weights.dimension4).toBe(0.15);
    });

    it('deve criar calculador com pesos customizados', () => {
      const customWeights: Partial<ScoreWeightsConfig> = {
        dimension1: 0.4,
        dimension2: 0.2,
        dimension3: 0.25,
        dimension4: 0.15,
      };

      const calculator = new ScoreCalculator(customWeights);
      const weights = calculator.getWeights();

      expect(weights.dimension1).toBe(0.4);
      expect(weights.dimension2).toBe(0.2);
      expect(weights.dimension3).toBe(0.25);
      expect(weights.dimension4).toBe(0.15);
    });

    it('deve validar que pesos somam 1.0', () => {
      const invalidWeights: Partial<ScoreWeightsConfig> = {
        dimension1: 0.3,
        dimension2: 0.2,
        dimension3: 0.2,
        dimension4: 0.2, // soma = 0.9
      };

      expect(() => new ScoreCalculator(invalidWeights)).toThrow(
        /pesos devem somar 1\.0/i,
      );
    });
  });

  describe('calculate', () => {
    it('deve calcular score com todos os scores iguais a 100', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 100,
        dimension2: 100,
        dimension3: 100,
        dimension4: 100,
      };

      const result = calculator.calculate(dimensions);

      // D1×0.30 + (100−100)×0.25 + 100×0.30 + 100×0.15
      // = 30 + 0 + 30 + 15 = 75
      expect(result.score).toBe(75);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('deve calcular score com todos os scores iguais a 50', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 50,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };

      const result = calculator.calculate(dimensions);

      // D1×0.30 + (100−50)×0.25 + 50×0.30 + 50×0.15
      // = 15 + 12.5 + 15 + 7.5 = 50
      expect(result.score).toBe(50);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('deve calcular score com todos os scores iguais a 0', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 0,
        dimension2: 0,
        dimension3: 0,
        dimension4: 0,
      };

      const result = calculator.calculate(dimensions);

      // D1×0.30 + (100−0)×0.25 + 0×0.30 + 0×0.15
      // = 0 + 25 + 0 + 0 = 25
      expect(result.score).toBe(25);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });

    it('deve inverter dimension2 (penaliza score alto em D2)', () => {
      const calculator = new ScoreCalculator();

      // Teste 1: D2 = 0 (bom, sem risco)
      const dimensions1: DimensionScoreValues = {
        dimension1: 0,
        dimension2: 0,
        dimension3: 0,
        dimension4: 0,
      };

      const result1 = calculator.calculate(dimensions1);
      // D1×0.30 + (100−0)×0.25 + 0×0.30 + 0×0.15 = 25

      // Teste 2: D2 = 100 (ruim, alto risco)
      const dimensions2: DimensionScoreValues = {
        dimension1: 0,
        dimension2: 100,
        dimension3: 0,
        dimension4: 0,
      };

      const result2 = calculator.calculate(dimensions2);
      // D1×0.30 + (100−100)×0.25 + 0×0.30 + 0×0.15 = 0

      expect(result1.score).toBeGreaterThan(result2.score);
    });

    it('deve validar scores fora do intervalo 0-100', () => {
      const calculator = new ScoreCalculator();

      const invalidDimensions: DimensionScoreValues = {
        dimension1: 150,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };

      expect(() => calculator.calculate(invalidDimensions)).toThrow(
        /deve estar entre 0 e 100/i,
      );
    });

    it('deve retornar resultado com informações completas', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 80,
        dimension2: 40,
        dimension3: 70,
        dimension4: 60,
      };

      const result = calculator.calculate(dimensions);

      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('classification');
      expect(result).toHaveProperty('weights');
      expect(result).toHaveProperty('dimensionScores');

      expect(result.dimensionScores).toEqual(dimensions);
    });
  });

  describe('classification ranges', () => {
    it('deve classificar como PUBLISH quando score >= 75', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 100,
        dimension2: 0,
        dimension3: 100,
        dimension4: 100,
      };

      const result = calculator.calculate(dimensions);
      expect(result.score).toBeGreaterThanOrEqual(75);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });

    it('deve classificar como EVALUATE quando 50 <= score < 75', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 60,
        dimension2: 40,
        dimension3: 70,
        dimension4: 50,
      };

      const result = calculator.calculate(dimensions);
      expect(result.score).toBeGreaterThanOrEqual(50);
      expect(result.score).toBeLessThan(75);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('deve classificar como AVOID quando score < 50', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 20,
        dimension2: 80,
        dimension3: 30,
        dimension4: 40,
      };

      const result = calculator.calculate(dimensions);
      expect(result.score).toBeLessThan(50);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });

    it('deve ser exatamente EVALUATE no limite inferior (50)', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 50,
        dimension2: 50,
        dimension3: 50,
        dimension4: 50,
      };

      const result = calculator.calculate(dimensions);
      expect(result.score).toBe(50);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('deve ser exatamente PUBLISH no limite inferior (75)', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 100,
        dimension2: 100,
        dimension3: 100,
        dimension4: 100,
      };

      const result = calculator.calculate(dimensions);
      expect(result.score).toBe(75);
      expect(result.classification).toBe(ScoreClassification.PUBLISH);
    });
  });

  describe('custom weights', () => {
    it('deve usar pesos customizados no cálculo', () => {
      const defaultCalculator = new ScoreCalculator();
      const customWeights: Partial<ScoreWeightsConfig> = {
        dimension1: 0.5,
        dimension2: 0.2,
        dimension3: 0.2,
        dimension4: 0.1,
      };
      const customCalculator = new ScoreCalculator(customWeights);

      const dimensions: DimensionScoreValues = {
        dimension1: 100,
        dimension2: 50,
        dimension3: 0,
        dimension4: 0,
      };

      const defaultResult = defaultCalculator.calculate(dimensions);
      const customResult = customCalculator.calculate(dimensions);

      // Com pesos customizados, D1 tem mais peso (0.5 vs 0.3)
      // Logo score final deve ser maior
      expect(customResult.score).toBeGreaterThan(defaultResult.score);
    });

    it('deve calcular corretamente com pesos iguais para todas dimensões', () => {
      const equalWeights: ScoreWeightsConfig = {
        dimension1: 0.25,
        dimension2: 0.25,
        dimension3: 0.25,
        dimension4: 0.25,
      };

      const calculator = new ScoreCalculator(equalWeights);

      const dimensions: DimensionScoreValues = {
        dimension1: 100,
        dimension2: 0,
        dimension3: 100,
        dimension4: 100,
      };

      const result = calculator.calculate(dimensions);

      // 100×0.25 + (100−0)×0.25 + 100×0.25 + 100×0.25
      // = 25 + 25 + 25 + 25 = 100
      expect(result.score).toBe(100);
    });
  });

  describe('classifyScore', () => {
    it('deve classificar score direto como PUBLISH', () => {
      const calculator = new ScoreCalculator();
      const classification = calculator.classifyScore(75);

      expect(classification).toBe(ScoreClassification.PUBLISH);
    });

    it('deve classificar score direto como EVALUATE', () => {
      const calculator = new ScoreCalculator();
      const classification = calculator.classifyScore(60);

      expect(classification).toBe(ScoreClassification.EVALUATE);
    });

    it('deve classificar score direto como AVOID', () => {
      const calculator = new ScoreCalculator();
      const classification = calculator.classifyScore(40);

      expect(classification).toBe(ScoreClassification.AVOID);
    });

    it('deve validar score no método direto', () => {
      const calculator = new ScoreCalculator();

      expect(() => calculator.classifyScore(150)).toThrow(
        /deve estar entre 0 e 100/i,
      );
    });
  });

  describe('static methods', () => {
    it('deve retornar thresholds corretos', () => {
      const thresholds = ScoreCalculator.getThresholds();

      expect(thresholds.publish).toBe(75);
      expect(thresholds.evaluate).toBe(50);
    });

    it('deve retornar pesos padrão', () => {
      const defaultWeights = ScoreCalculator.getDefaultWeights();

      expect(defaultWeights.dimension1).toBe(0.3);
      expect(defaultWeights.dimension2).toBe(0.25);
      expect(defaultWeights.dimension3).toBe(0.3);
      expect(defaultWeights.dimension4).toBe(0.15);
    });
  });

  describe('edge cases', () => {
    it('deve manter score entre 0 e 100', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 100,
        dimension2: 100,
        dimension3: 100,
        dimension4: 100,
      };

      const result = calculator.calculate(dimensions);
      expect(result.score).toBeGreaterThanOrEqual(0);
      expect(result.score).toBeLessThanOrEqual(100);
    });

    it('deve lidar com valores decimais corretamente', () => {
      const calculator = new ScoreCalculator();

      const dimensions: DimensionScoreValues = {
        dimension1: 50.5,
        dimension2: 49.5,
        dimension3: 60.25,
        dimension4: 45.75,
      };

      const result = calculator.calculate(dimensions);
      expect(typeof result.score).toBe('number');
      expect(result.score).toBeGreaterThan(0);
      expect(result.score).toBeLessThan(100);
    });
  });
});
