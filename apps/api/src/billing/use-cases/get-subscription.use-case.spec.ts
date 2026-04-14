import { NotFoundException } from '@nestjs/common';

const mockPrisma = {
  client: {
    organization: {
      findUnique: jest.fn(),
    },
    usageLog: {
      findUnique: jest.fn(),
      create: jest.fn(),
    },
  },
};

jest.mock('../../prisma/prisma.service', () => ({
  PrismaService: jest.fn(() => mockPrisma),
}));

import { GetSubscriptionUseCase } from './get-subscription.use-case';

describe('GetSubscriptionUseCase', () => {
  let useCase: GetSubscriptionUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetSubscriptionUseCase(mockPrisma as any);
  });

  it('returns subscription plan and usage info', async () => {
    const plan = {
      id: 'plan-starter',
      slug: 'starter',
      name: 'Starter',
      scriptLimit: 30,
      narrationLimit: 30,
      exportLimit: 20,
      priceMonthlyBrl: '49.90',
    };

    (mockPrisma.client.organization.findUnique as jest.Mock).mockResolvedValue({
      id: 'org-1',
      plan: 'starter',
      activeSubscription: { plan },
    });

    (mockPrisma.client.usageLog.findUnique as jest.Mock).mockResolvedValue({
      scripts: 15,
      narrations: 10,
      exports: 5,
    });

    const result = await useCase.execute({ organizationId: 'org-1' });

    expect(result.plan).toEqual({
      slug: 'starter',
      name: 'Starter',
      priceMonthlyBrl: '49.90',
    });
    expect(result.usage).toEqual({ scripts: 15, narrations: 10, exports: 5 });
    expect(result.limits).toEqual({
      scripts: 30,
      narrations: 30,
      exports: 20,
    });
  });

  it('calculates percentUsed correctly', async () => {
    const plan = {
      id: 'plan-starter',
      slug: 'starter',
      name: 'Starter',
      scriptLimit: 30,
      narrationLimit: 30,
      exportLimit: 20,
      priceMonthlyBrl: '49.90',
    };

    (mockPrisma.client.organization.findUnique as jest.Mock).mockResolvedValue({
      id: 'org-1',
      activeSubscription: { plan },
    });

    (mockPrisma.client.usageLog.findUnique as jest.Mock).mockResolvedValue({
      scripts: 15,
      narrations: 20,
      exports: 0,
    });

    const result = await useCase.execute({ organizationId: 'org-1' });

    expect(result.percentUsed).toEqual({
      scripts: 50, // 15/30 * 100
      narrations: 67, // 20/30 * 100
      exports: 0, // 0/20 * 100
    });
  });

  it('returns 0% for unlimited plans (null limits)', async () => {
    const plan = {
      id: 'plan-professional',
      slug: 'professional',
      name: 'Professional',
      scriptLimit: null,
      narrationLimit: null,
      exportLimit: null,
      priceMonthlyBrl: '199.90',
    };

    (mockPrisma.client.organization.findUnique as jest.Mock).mockResolvedValue({
      id: 'org-1',
      activeSubscription: { plan },
    });

    (mockPrisma.client.usageLog.findUnique as jest.Mock).mockResolvedValue({
      scripts: 1000,
      narrations: 1000,
      exports: 1000,
    });

    const result = await useCase.execute({ organizationId: 'org-1' });

    expect(result.percentUsed).toEqual({
      scripts: 0,
      narrations: 0,
      exports: 0,
    });
  });

  it('creates usage log if not found', async () => {
    const plan = {
      id: 'plan-starter',
      slug: 'starter',
      name: 'Starter',
      scriptLimit: 30,
      narrationLimit: 30,
      exportLimit: 20,
      priceMonthlyBrl: '49.90',
    };

    (mockPrisma.client.organization.findUnique as jest.Mock).mockResolvedValue({
      id: 'org-1',
      activeSubscription: { plan },
    });

    (mockPrisma.client.usageLog.findUnique as jest.Mock).mockResolvedValue(null);
    (mockPrisma.client.usageLog.create as jest.Mock).mockResolvedValue({
      scripts: 0,
      narrations: 0,
      exports: 0,
    });

    const result = await useCase.execute({ organizationId: 'org-1' });

    expect(mockPrisma.client.usageLog.create).toHaveBeenCalledWith(
      expect.objectContaining({
        data: expect.objectContaining({
          organizationId: 'org-1',
          scripts: 0,
          narrations: 0,
          exports: 0,
        }),
      }),
    );
    expect(result.usage).toEqual({ scripts: 0, narrations: 0, exports: 0 });
  });

  it('throws NotFoundException when organization not found', async () => {
    (mockPrisma.client.organization.findUnique as jest.Mock).mockResolvedValue(null);

    await expect(useCase.execute({ organizationId: 'org-unknown' })).rejects.toThrow(
      NotFoundException,
    );
  });

  it('throws NotFoundException when no plan found', async () => {
    (mockPrisma.client.organization.findUnique as jest.Mock).mockResolvedValue({
      id: 'org-1',
      activeSubscription: null,
    });

    await expect(useCase.execute({ organizationId: 'org-1' })).rejects.toThrow(
      NotFoundException,
    );
  });
});
