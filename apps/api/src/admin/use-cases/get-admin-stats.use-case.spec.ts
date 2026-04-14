import { GetAdminStatsUseCase } from './get-admin-stats.use-case';

const mockPrisma = {
  client: {
    organization: { findMany: jest.fn() },
    usageLog: { aggregate: jest.fn() },
  },
};

jest.mock('../../prisma/prisma.service', () => ({
  PrismaService: jest.fn(() => mockPrisma),
}));

describe('GetAdminStatsUseCase', () => {
  let useCase: GetAdminStatsUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetAdminStatsUseCase(mockPrisma as any);
  });

  it('returns correct stats with plan distribution and usage', async () => {
    mockPrisma.client.organization.findMany.mockResolvedValue([
      { plan: 'free', activeSubscription: null },
      { plan: 'free', activeSubscription: null },
      { plan: 'starter', activeSubscription: { plan: { slug: 'starter' } } },
    ]);
    mockPrisma.client.usageLog.aggregate.mockResolvedValue({
      _sum: { scripts: 100, narrations: 60, exports: 20 },
    });

    const result = await useCase.execute();

    expect(result.totalOrganizations).toBe(3);
    expect(result.planDistribution).toEqual(
      expect.arrayContaining([
        { plan: 'free', count: 2 },
        { plan: 'starter', count: 1 },
      ]),
    );
    expect(result.currentMonth.totalScripts).toBe(100);
    expect(result.currentMonth.totalNarrations).toBe(60);
    expect(result.currentMonth.totalExports).toBe(20);
  });

  it('handles empty database gracefully', async () => {
    mockPrisma.client.organization.findMany.mockResolvedValue([]);
    mockPrisma.client.usageLog.aggregate.mockResolvedValue({
      _sum: { scripts: null, narrations: null, exports: null },
    });

    const result = await useCase.execute();

    expect(result.totalOrganizations).toBe(0);
    expect(result.planDistribution).toEqual([]);
    expect(result.currentMonth.totalScripts).toBe(0);
  });
});
