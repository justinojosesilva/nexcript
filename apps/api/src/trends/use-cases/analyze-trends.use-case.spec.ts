jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { NotFoundException } from '@nestjs/common';
import { NicheCategory } from '@nexvideo/shared';
import { AnalyzeTrendsUseCase } from './analyze-trends.use-case';

// ────────────── mock factories ──────────────

const mockProject = {
  id: 'proj-1',
  organizationId: 'org-1',
  keyword: 'javascript',
  niche: NicheCategory.TECHNOLOGY,
  status: 'planning',
};

const mockTrendAnalysis = {
  id: 'ta-1',
  projectId: 'proj-1',
  organizationId: 'org-1',
  keyword: 'javascript',
  data: {},
  analyzedAt: new Date(),
  createdAt: new Date(),
};

function makePrismaMock(projectOverride?: object | null) {
  return {
    client: {
      contentProject: {
        findUnique: jest
          .fn()
          .mockResolvedValue(
            projectOverride !== undefined ? projectOverride : mockProject,
          ),
        update: jest
          .fn()
          .mockResolvedValue({ ...mockProject, status: 'in_development' }),
      },
      trendAnalysis: {
        create: jest.fn().mockResolvedValue(mockTrendAnalysis),
      },
    },
  };
}

function makeScorerMock(score: number) {
  return {
    calculateDimensions: jest.fn().mockResolvedValue({
      dimension1: score,
      dimension2: 50,
      dimension3: 50,
      dimension4: 50,
    }),
    calculateScore: jest
      .fn()
      .mockReturnValue({ score, classification: 'EVALUATE', weights: {} }),
  };
}

const defaultInput = {
  projectId: 'proj-1',
  organizationId: 'org-1',
  keyword: 'javascript',
  geo: 'BR',
  niche: NicheCategory.TECHNOLOGY,
};

// ────────────── tests ──────────────

describe('AnalyzeTrendsUseCase', () => {
  describe('happy path — all scorers succeed', () => {
    let useCase: AnalyzeTrendsUseCase;
    let prismaMock: ReturnType<typeof makePrismaMock>;
    let demandMock: ReturnType<typeof makeScorerMock>;
    let saturationMock: ReturnType<typeof makeScorerMock>;
    let monetizationMock: ReturnType<typeof makeScorerMock>;
    let qualityGapMock: ReturnType<typeof makeScorerMock>;

    beforeEach(() => {
      prismaMock = makePrismaMock();
      demandMock = makeScorerMock(80);
      saturationMock = makeScorerMock(70);
      monetizationMock = makeScorerMock(90);
      qualityGapMock = makeScorerMock(60);

      useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        demandMock as any,
        saturationMock as any,
        monetizationMock as any,
        qualityGapMock as any,
      );
    });

    it('should look up the project before running scorers', async () => {
      await useCase.execute(defaultInput);

      expect(prismaMock.client.contentProject.findUnique).toHaveBeenCalledWith({
        where: { id: 'proj-1' },
      });
    });

    it('should update project status to in_development', async () => {
      await useCase.execute(defaultInput);

      expect(prismaMock.client.contentProject.update).toHaveBeenCalledWith({
        where: { id: 'proj-1' },
        data: { status: 'in_development' },
      });
    });

    it('should call all 4 scorers with correct inputs', async () => {
      await useCase.execute(defaultInput);

      expect(demandMock.calculateDimensions).toHaveBeenCalledWith({
        keyword: 'javascript',
        geo: 'BR',
      });
      expect(saturationMock.calculateDimensions).toHaveBeenCalledWith({
        keyword: 'javascript',
        geo: 'BR',
      });
      expect(monetizationMock.calculateDimensions).toHaveBeenCalledWith({
        niche: NicheCategory.TECHNOLOGY,
      });
      expect(qualityGapMock.calculateDimensions).toHaveBeenCalledWith({
        keyword: 'javascript',
        geo: 'BR',
      });
    });

    it('should return individual scorer scores', async () => {
      const result = await useCase.execute(defaultInput);

      expect(result.scores.demand).toBe(80);
      expect(result.scores.saturation).toBe(70);
      expect(result.scores.monetization).toBe(90);
      expect(result.scores.qualityGap).toBe(60);
    });

    it('should return a finalScore between 0 and 100', async () => {
      const result = await useCase.execute(defaultInput);

      expect(result.finalScore).toBeGreaterThanOrEqual(0);
      expect(result.finalScore).toBeLessThanOrEqual(100);
    });

    it('should persist TrendAnalysis with all scores in data field', async () => {
      await useCase.execute(defaultInput);

      const createCall =
        prismaMock.client.trendAnalysis.create.mock.calls[0][0];
      expect(createCall.data.projectId).toBe('proj-1');
      expect(createCall.data.organizationId).toBe('org-1');
      expect(createCall.data.keyword).toBe('javascript');
      expect(createCall.data.data).toMatchObject({
        scores: {
          demand: 80,
          saturation: 70,
          monetization: 90,
          qualityGap: 60,
        },
        geo: 'BR',
        niche: NicheCategory.TECHNOLOGY,
      });
    });

    it('should return the saved trendAnalysis record', async () => {
      const result = await useCase.execute(defaultInput);

      expect(result.trendAnalysis).toEqual(mockTrendAnalysis);
    });
  });

  describe('partial failure — scorers failing fall back to 50', () => {
    let useCase: AnalyzeTrendsUseCase;
    let prismaMock: ReturnType<typeof makePrismaMock>;

    beforeEach(() => {
      prismaMock = makePrismaMock();
    });

    it('should use fallback 50 when demand scorer fails', async () => {
      const failingDemand = {
        calculateDimensions: jest
          .fn()
          .mockRejectedValue(new Error('Trends API down')),
        calculateScore: jest.fn(),
      };

      useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        failingDemand as any,
        makeScorerMock(70) as any,
        makeScorerMock(90) as any,
        makeScorerMock(60) as any,
      );

      const result = await useCase.execute(defaultInput);

      expect(result.scores.demand).toBe(50); // fallback
      expect(result.scores.saturation).toBe(70);
      expect(result.scores.monetization).toBe(90);
      expect(result.scores.qualityGap).toBe(60);
    });

    it('should use fallback 50 when saturation scorer fails', async () => {
      const failingSaturation = {
        calculateDimensions: jest
          .fn()
          .mockRejectedValue(new Error('YouTube quota exceeded')),
        calculateScore: jest.fn(),
      };

      useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        makeScorerMock(80) as any,
        failingSaturation as any,
        makeScorerMock(90) as any,
        makeScorerMock(60) as any,
      );

      const result = await useCase.execute(defaultInput);

      expect(result.scores.demand).toBe(80);
      expect(result.scores.saturation).toBe(50); // fallback
    });

    it('should use fallback 50 when all scorers fail', async () => {
      const failingScorer = {
        calculateDimensions: jest
          .fn()
          .mockRejectedValue(new Error('Service unavailable')),
        calculateScore: jest.fn(),
      };

      useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        failingScorer as any,
        failingScorer as any,
        failingScorer as any,
        failingScorer as any,
      );

      const result = await useCase.execute(defaultInput);

      // All fallback to 50
      expect(result.scores.demand).toBe(50);
      expect(result.scores.saturation).toBe(50);
      expect(result.scores.monetization).toBe(50);
      expect(result.scores.qualityGap).toBe(50);

      // finalScore should still be computed — never throw
      expect(result.finalScore).toBeGreaterThanOrEqual(0);
      expect(result.finalScore).toBeLessThanOrEqual(100);
    });

    it('should still save TrendAnalysis even when scorers fail', async () => {
      const failingScorer = {
        calculateDimensions: jest.fn().mockRejectedValue(new Error('Error')),
        calculateScore: jest.fn(),
      };

      useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        failingScorer as any,
        makeScorerMock(70) as any,
        failingScorer as any,
        makeScorerMock(60) as any,
      );

      await useCase.execute(defaultInput);

      // TrendAnalysis must be persisted regardless
      expect(prismaMock.client.trendAnalysis.create).toHaveBeenCalledTimes(1);
    });

    it('should not propagate any scorer error to the caller', async () => {
      const failingScorer = {
        calculateDimensions: jest
          .fn()
          .mockRejectedValue(new Error('Critical failure')),
        calculateScore: jest.fn(),
      };

      useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        failingScorer as any,
        failingScorer as any,
        failingScorer as any,
        failingScorer as any,
      );

      // Should resolve without throwing
      await expect(useCase.execute(defaultInput)).resolves.not.toThrow();
    });
  });

  describe('project not found', () => {
    it('should throw NotFoundException if project does not exist', async () => {
      const prismaMock = makePrismaMock(null);

      const useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        makeScorerMock(80) as any,
        makeScorerMock(70) as any,
        makeScorerMock(90) as any,
        makeScorerMock(60) as any,
      );

      await expect(useCase.execute(defaultInput)).rejects.toThrow(
        NotFoundException,
      );
    });

    it('should not run scorers if project is not found', async () => {
      const prismaMock = makePrismaMock(null);
      const demandMock = makeScorerMock(80);

      const useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        demandMock as any,
        makeScorerMock(70) as any,
        makeScorerMock(90) as any,
        makeScorerMock(60) as any,
      );

      await expect(useCase.execute(defaultInput)).rejects.toThrow();
      expect(demandMock.calculateDimensions).not.toHaveBeenCalled();
    });
  });

  describe('score calculation', () => {
    it('should apply default ScoreCalculator weights (30/25/30/15)', async () => {
      const prismaMock = makePrismaMock();

      // All scorers return 100 — max score
      const useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        makeScorerMock(100) as any,
        makeScorerMock(0) as any, // saturation=0 is INVERTED → contributes fully
        makeScorerMock(100) as any,
        makeScorerMock(100) as any,
      );

      const result = await useCase.execute(defaultInput);

      // D1×0.30 + (100-0)×0.25 + D3×0.30 + D4×0.15 = 30 + 25 + 30 + 15 = 100
      expect(result.finalScore).toBe(100);
    });

    it('should include final score and classification in persisted data', async () => {
      const prismaMock = makePrismaMock();

      const useCase = new AnalyzeTrendsUseCase(
        prismaMock as any,
        makeScorerMock(80) as any,
        makeScorerMock(70) as any,
        makeScorerMock(90) as any,
        makeScorerMock(60) as any,
      );

      await useCase.execute(defaultInput);

      const createCall =
        prismaMock.client.trendAnalysis.create.mock.calls[0][0];
      expect(createCall.data.data).toHaveProperty('finalScore');
      expect(createCall.data.data).toHaveProperty('classification');
      expect(createCall.data.data).toHaveProperty('weights');
    });
  });
});
