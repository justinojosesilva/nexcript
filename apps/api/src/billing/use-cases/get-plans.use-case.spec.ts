const mockPrisma = {
  client: {
    plan: {
      findMany: jest.fn(),
    },
  },
};

const mockCache = {
  get: jest.fn(),
  set: jest.fn(),
  delete: jest.fn(),
  invalidateByPrefix: jest.fn(),
};

jest.mock('../../prisma/prisma.service', () => ({
  PrismaService: jest.fn(() => mockPrisma),
}));

import { GetPlansUseCase } from './get-plans.use-case';

describe('GetPlansUseCase', () => {
  let useCase: GetPlansUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetPlansUseCase(mockPrisma as any, mockCache as any);
  });

  it('returns cached plans if available', async () => {
    const cachedResponse = {
      plans: [
        {
          slug: 'starter',
          name: 'Starter',
          priceMonthlyBrl: '49.90',
          limits: { scripts: 30, narrations: 30, exports: 20 },
        },
      ],
    };

    (mockCache.get as jest.Mock).mockResolvedValue(cachedResponse);

    const result = await useCase.execute();

    expect(result).toEqual(cachedResponse);
    expect(mockCache.get).toHaveBeenCalledWith('billing:plans');
    expect(mockPrisma.client.plan.findMany).not.toHaveBeenCalled();
  });

  it('fetches from DB and caches plans when not cached', async () => {
    (mockCache.get as jest.Mock).mockResolvedValue(null);
    (mockPrisma.client.plan.findMany as jest.Mock).mockResolvedValue([
      {
        id: 'plan-1',
        slug: 'free',
        name: 'Free',
        scriptLimit: 5,
        narrationLimit: 5,
        exportLimit: 3,
        priceMonthlyBrl: '0',
      },
      {
        id: 'plan-2',
        slug: 'starter',
        name: 'Starter',
        scriptLimit: 30,
        narrationLimit: 30,
        exportLimit: 20,
        priceMonthlyBrl: '49.90',
      },
    ]);

    const result = await useCase.execute();

    expect(result.plans).toHaveLength(2);
    expect(result.plans[0]).toEqual({
      slug: 'free',
      name: 'Free',
      priceMonthlyBrl: '0',
      limits: { scripts: 5, narrations: 5, exports: 3 },
    });
    expect(mockCache.set).toHaveBeenCalledWith('billing:plans', expect.anything(), 300);
  });

  it('maps null limits correctly for unlimited plans', async () => {
    (mockCache.get as jest.Mock).mockResolvedValue(null);
    (mockPrisma.client.plan.findMany as jest.Mock).mockResolvedValue([
      {
        id: 'plan-3',
        slug: 'professional',
        name: 'Professional',
        scriptLimit: null,
        narrationLimit: null,
        exportLimit: null,
        priceMonthlyBrl: '199.90',
      },
    ]);

    const result = await useCase.execute();

    expect(result.plans[0].limits).toEqual({
      scripts: null,
      narrations: null,
      exports: null,
    });
  });
});
