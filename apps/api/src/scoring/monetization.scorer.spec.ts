import { MonetizationScorer } from './monetization.scorer';
import { NicheCategory, RpmTier, ScoreClassification } from '@nexcript/shared';
import Redis from 'ioredis';

describe('MonetizationScorer', () => {
  let scorer: MonetizationScorer;
  let redis: Redis;

  beforeEach(() => {
    redis = new Redis({
      host: process.env.REDIS_HOST || 'localhost',
      port: parseInt(process.env.REDIS_PORT || '6379', 10),
      retryStrategy: () => null, // Fail fast in tests
    });

    scorer = new MonetizationScorer(redis);
  });

  afterEach(async () => {
    // Clear cache after each test
    await scorer.clearCache();
    // Don't close redis in afterEach, close it in afterAll
  });

  afterAll(async () => {
    await redis.quit();
  });

  describe('calculateDimensions', () => {
    it('deve calcular dimensões para FINANCE (TIER_4)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.FINANCE,
      });

      expect(dimensions.dimension1).toBe(100); // TIER_4 = 100
      expect(dimensions.dimension2).toBe(85); // competitiveness
      expect(dimensions.dimension3).toBe(75); // audiencePotential
      expect(dimensions.dimension4).toBe(80); // monetizationEase
    });

    it('deve calcular dimensões para TECHNOLOGY (TIER_3)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.TECHNOLOGY,
      });

      expect(dimensions.dimension1).toBe(80); // TIER_3 = 80
      expect(dimensions.dimension2).toBe(80); // competitiveness
      expect(dimensions.dimension3).toBe(85); // audiencePotential
      expect(dimensions.dimension4).toBe(75); // monetizationEase
    });

    it('deve calcular dimensões para PRODUCTIVITY (TIER_3)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.PRODUCTIVITY,
      });

      expect(dimensions.dimension1).toBe(80); // TIER_3 = 80
      expect(dimensions.dimension2).toBe(75); // competitiveness
      expect(dimensions.dimension3).toBe(70); // audiencePotential
      expect(dimensions.dimension4).toBe(78); // monetizationEase
    });

    it('deve calcular dimensões para LIFESTYLE (TIER_2)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.LIFESTYLE,
      });

      expect(dimensions.dimension1).toBe(60); // TIER_2 = 60
      expect(dimensions.dimension2).toBe(70); // competitiveness
      expect(dimensions.dimension3).toBe(80); // audiencePotential
      expect(dimensions.dimension4).toBe(65); // monetizationEase
    });

    it('deve calcular dimensões para EDUCATION (TIER_2)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.EDUCATION,
      });

      expect(dimensions.dimension1).toBe(60); // TIER_2 = 60
      expect(dimensions.dimension2).toBe(60); // competitiveness
      expect(dimensions.dimension3).toBe(75); // audiencePotential
      expect(dimensions.dimension4).toBe(70); // monetizationEase
    });

    it('deve calcular dimensões para ENTERTAINMENT (TIER_1)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.ENTERTAINMENT,
      });

      expect(dimensions.dimension1).toBe(40); // TIER_1 = 40
      expect(dimensions.dimension2).toBe(95); // competitiveness (very high)
      expect(dimensions.dimension3).toBe(90); // audiencePotential
      expect(dimensions.dimension4).toBe(50); // monetizationEase (low)
    });

    it('deve calcular dimensões para BUSINESS (TIER_3)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.BUSINESS,
      });

      expect(dimensions.dimension1).toBe(80); // TIER_3 = 80
      expect(dimensions.dimension2).toBe(78); // competitiveness
      expect(dimensions.dimension3).toBe(72); // audiencePotential
      expect(dimensions.dimension4).toBe(77); // monetizationEase
    });

    it('deve calcular dimensões para HEALTH (TIER_3)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.HEALTH,
      });

      expect(dimensions.dimension1).toBe(80); // TIER_3 = 80
      expect(dimensions.dimension2).toBe(82); // competitiveness
      expect(dimensions.dimension3).toBe(78); // audiencePotential
      expect(dimensions.dimension4).toBe(72); // monetizationEase
    });

    it('deve calcular dimensões para PERSONAL_DEVELOPMENT (TIER_2)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.PERSONAL_DEVELOPMENT,
      });

      expect(dimensions.dimension1).toBe(60); // TIER_2 = 60
      expect(dimensions.dimension2).toBe(72); // competitiveness
      expect(dimensions.dimension3).toBe(68); // audiencePotential
      expect(dimensions.dimension4).toBe(68); // monetizationEase
    });

    it('deve calcular dimensões para OTHER (TIER_0)', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.OTHER,
      });

      expect(dimensions.dimension1).toBe(20); // TIER_0 = 20
      expect(dimensions.dimension2).toBe(50); // competitiveness (low)
      expect(dimensions.dimension3).toBe(40); // audiencePotential
      expect(dimensions.dimension4).toBe(45); // monetizationEase
    });

    it('deve rejeitar niche inválido', async () => {
      await expect(
        scorer.calculateDimensions({
          niche: 'INVALID_NICHE',
        }),
      ).rejects.toThrow(/Invalid or missing niche category/);
    });

    it('deve rejeitar quando niche não é fornecido', async () => {
      await expect(scorer.calculateDimensions({})).rejects.toThrow(
        /Invalid or missing niche category/,
      );
    });
  });

  describe('Redis caching', () => {
    it('deve cachear resultado da primeira chamada', async () => {
      const niche = NicheCategory.FINANCE;

      // First call
      const dimensions1 = await scorer.calculateDimensions({ niche });

      // Second call (should come from cache)
      const dimensions2 = await scorer.calculateDimensions({ niche });

      expect(dimensions1).toEqual(dimensions2);

      // Verify cache key exists
      const cached = await redis.get(`monetization_scorer:${niche}`);
      expect(cached).not.toBeNull();
    });

    it('deve respeitar TTL de 7 dias', async () => {
      const niche = NicheCategory.TECHNOLOGY;
      const cacheKey = `monetization_scorer:${niche}`;

      await scorer.calculateDimensions({ niche });

      const ttl = await redis.ttl(cacheKey);
      // TTL should be approximately 7 days (604800 seconds)
      // Allow 1 second margin
      expect(ttl).toBeGreaterThan(604799);
      expect(ttl).toBeLessThanOrEqual(604800);
    });

    it('deve limpar cache específico', async () => {
      const niche = NicheCategory.FINANCE;

      // Populate cache
      await scorer.calculateDimensions({ niche });

      // Verify cache exists
      let cached = await redis.get(`monetization_scorer:${niche}`);
      expect(cached).not.toBeNull();

      // Clear specific cache
      await scorer.clearCache(niche);

      // Verify cache is gone
      cached = await redis.get(`monetization_scorer:${niche}`);
      expect(cached).toBeNull();
    });

    it('deve limpar todo cache ao não fornecer chave específica', async () => {
      // Populate cache for multiple niches
      await scorer.calculateDimensions({ niche: NicheCategory.FINANCE });
      await scorer.calculateDimensions({ niche: NicheCategory.TECHNOLOGY });

      // Clear all cache
      await scorer.clearCache();

      // Verify both caches are gone
      const cached1 = await redis.get(
        `monetization_scorer:${NicheCategory.FINANCE}`,
      );
      const cached2 = await redis.get(
        `monetization_scorer:${NicheCategory.TECHNOLOGY}`,
      );

      expect(cached1).toBeNull();
      expect(cached2).toBeNull();
    });
  });

  describe('calculateScore', () => {
    it('deve calcular score final para FINANCE', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.FINANCE,
      });

      const result = scorer.calculateScore(dimensions);

      // Finance: 100×0.30 + (100−85)×0.25 + 75×0.30 + 80×0.15 = 68.25
      expect(result.score).toBe(68.25);
      expect(result.classification).toBe(ScoreClassification.EVALUATE);
    });

    it('deve calcular score final para ENTERTAINMENT', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.ENTERTAINMENT,
      });

      const result = scorer.calculateScore(dimensions);

      // Entertainment: 40×0.30 + (100−95)×0.25 + 90×0.30 + 50×0.15 = 47.75
      expect(result.score).toBe(47.75);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });

    it('deve calcular score final para OTHER', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.OTHER,
      });

      const result = scorer.calculateScore(dimensions);

      // Other has very low RPM potential
      expect(result.score).toBeLessThan(50);
      expect(result.classification).toBe(ScoreClassification.AVOID);
    });

    it('deve incluir pesos e scores originais no resultado', async () => {
      const dimensions = await scorer.calculateDimensions({
        niche: NicheCategory.TECHNOLOGY,
      });

      const result = scorer.calculateScore(dimensions);

      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('classification');
      expect(result).toHaveProperty('weights');
      expect(result).toHaveProperty('dimensionScores');

      expect(result.dimensionScores).toEqual(dimensions);
    });
  });

  describe('static methods', () => {
    it('deve retornar RPM data para niche específico', () => {
      const data = MonetizationScorer.getRpmData(NicheCategory.FINANCE);

      expect(data.tier).toBe(RpmTier.TIER_4);
      expect(data.competitiveness).toBe(85);
      expect(data.audiencePotential).toBe(75);
      expect(data.monetizationEase).toBe(80);
    });

    it('deve retornar mapeamento completo de RPMs', () => {
      const allData = MonetizationScorer.getAllRpmData();

      expect(Object.keys(allData)).toHaveLength(10); // 10 niches
      expect(allData[NicheCategory.FINANCE]).toBeDefined();
      expect(allData[NicheCategory.TECHNOLOGY]).toBeDefined();
      expect(allData[NicheCategory.OTHER]).toBeDefined();
    });

    it('deve ter dados para todas as categorias de niche', () => {
      const allData = MonetizationScorer.getAllRpmData();

      // Verify all niche categories have data
      Object.values(NicheCategory).forEach((niche) => {
        expect(allData[niche]).toBeDefined();
        expect(allData[niche].tier).toBeDefined();
        expect(allData[niche].competitiveness).toBeGreaterThanOrEqual(0);
        expect(allData[niche].competitiveness).toBeLessThanOrEqual(100);
        expect(allData[niche].audiencePotential).toBeGreaterThanOrEqual(0);
        expect(allData[niche].audiencePotential).toBeLessThanOrEqual(100);
        expect(allData[niche].monetizationEase).toBeGreaterThanOrEqual(0);
        expect(allData[niche].monetizationEase).toBeLessThanOrEqual(100);
      });
    });
  });

  describe('scoring consistency', () => {
    it('deve ter score mais alto para FINANCE que para OTHER', async () => {
      const financeDimensions = await scorer.calculateDimensions({
        niche: NicheCategory.FINANCE,
      });
      const otherDimensions = await scorer.calculateDimensions({
        niche: NicheCategory.OTHER,
      });

      const financeScore = scorer.calculateScore(financeDimensions);
      const otherScore = scorer.calculateScore(otherDimensions);

      expect(financeScore.score).toBeGreaterThan(otherScore.score);
    });

    it('deve ter score mais alto para TECHNOLOGY que para ENTERTAINMENT', async () => {
      const techDimensions = await scorer.calculateDimensions({
        niche: NicheCategory.TECHNOLOGY,
      });
      const entDimensions = await scorer.calculateDimensions({
        niche: NicheCategory.ENTERTAINMENT,
      });

      const techScore = scorer.calculateScore(techDimensions);
      const entScore = scorer.calculateScore(entDimensions);

      expect(techScore.score).toBeGreaterThan(entScore.score);
    });

    it('deve manter score entre 0 e 100', async () => {
      // Test all niches
      for (const niche of Object.values(NicheCategory)) {
        const dimensions = await scorer.calculateDimensions({ niche });
        const result = scorer.calculateScore(dimensions);

        expect(result.score).toBeGreaterThanOrEqual(0);
        expect(result.score).toBeLessThanOrEqual(100);
      }
    });
  });

  describe('dimension validation', () => {
    it('deve ter dimensões válidas para todas as categorias', async () => {
      for (const niche of Object.values(NicheCategory)) {
        const dimensions = await scorer.calculateDimensions({ niche });

        // All dimensions should be between 0-100
        expect(dimensions.dimension1).toBeGreaterThanOrEqual(0);
        expect(dimensions.dimension1).toBeLessThanOrEqual(100);

        expect(dimensions.dimension2).toBeGreaterThanOrEqual(0);
        expect(dimensions.dimension2).toBeLessThanOrEqual(100);

        expect(dimensions.dimension3).toBeGreaterThanOrEqual(0);
        expect(dimensions.dimension3).toBeLessThanOrEqual(100);

        expect(dimensions.dimension4).toBeGreaterThanOrEqual(0);
        expect(dimensions.dimension4).toBeLessThanOrEqual(100);
      }
    });
  });
});
