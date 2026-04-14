import { BadRequestException, NotFoundException } from '@nestjs/common';
import { UpdateOrganizationPlanUseCase } from './update-organization-plan.use-case';

const mockPrisma = {
  client: {
    organization: {
      findUnique: jest.fn(),
      update: jest.fn(),
    },
  },
};

jest.mock('../../prisma/prisma.service', () => ({
  PrismaService: jest.fn(() => mockPrisma),
}));

describe('UpdateOrganizationPlanUseCase', () => {
  let useCase: UpdateOrganizationPlanUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new UpdateOrganizationPlanUseCase(mockPrisma as any);
  });

  it('updates plan successfully', async () => {
    mockPrisma.client.organization.findUnique.mockResolvedValue({
      id: 'org-1',
      plan: 'free',
    });
    mockPrisma.client.organization.update.mockResolvedValue({});

    const result = await useCase.execute({ organizationId: 'org-1', plan: 'starter' });

    expect(result).toEqual({
      organizationId: 'org-1',
      previousPlan: 'free',
      newPlan: 'starter',
    });
    expect(mockPrisma.client.organization.update).toHaveBeenCalledWith({
      where: { id: 'org-1' },
      data: { plan: 'starter' },
    });
  });

  it('throws BadRequestException for invalid plan', async () => {
    await expect(
      useCase.execute({ organizationId: 'org-1', plan: 'ultra-mega' }),
    ).rejects.toThrow(BadRequestException);
  });

  it('throws NotFoundException when org does not exist', async () => {
    mockPrisma.client.organization.findUnique.mockResolvedValue(null);

    await expect(
      useCase.execute({ organizationId: 'nonexistent', plan: 'starter' }),
    ).rejects.toThrow(NotFoundException);
  });
});
