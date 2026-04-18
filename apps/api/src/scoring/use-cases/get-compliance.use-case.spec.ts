const mockPrisma = {
  contentProject: { findFirst: jest.fn() },
  publicationMetadata: { findUnique: jest.fn() },
};

jest.mock('@nexvideo/database', () => ({
  prisma: mockPrisma,
  PrismaClient: jest.fn(),
}));

import { ForbiddenException } from '@nestjs/common';
import { GetComplianceUseCase } from './get-compliance.use-case';

describe('GetComplianceUseCase', () => {
  let useCase: GetComplianceUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetComplianceUseCase();
  });

  it('returns compliance data with scores and no warnings when all scores >= 60', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue({
      id: 'proj-1',
      organizationId: 'org-1',
    });
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue({
      projectId: 'proj-1',
      complianceScore: 85,
      checklistResults: {
        originalityScore: 90,
        copyrightScore: 80,
        monetizationScore: 75,
      },
    });

    const result = await useCase.execute({
      projectId: 'proj-1',
      organizationId: 'org-1',
    });

    expect(result.projectId).toBe('proj-1');
    expect(result.complianceScore).toBe(85);
    expect(result.originalityScore).toBe(90);
    expect(result.copyrightScore).toBe(80);
    expect(result.monetizationScore).toBe(75);
    expect(result.warnings).toHaveLength(0);
  });

  it('generates warning when originality score < 60', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue({
      id: 'proj-1',
      organizationId: 'org-1',
    });
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue({
      projectId: 'proj-1',
      complianceScore: 70,
      checklistResults: {
        originalityScore: 45,
        copyrightScore: 85,
        monetizationScore: 80,
      },
    });

    const result = await useCase.execute({
      projectId: 'proj-1',
      organizationId: 'org-1',
    });

    expect(result.warnings).toHaveLength(1);
    expect(result.warnings[0]).toContain('Originality score is low');
    expect(result.warnings[0]).toContain('45');
  });

  it('generates warning when copyright score < 60', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue({
      id: 'proj-1',
      organizationId: 'org-1',
    });
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue({
      projectId: 'proj-1',
      complianceScore: 70,
      checklistResults: {
        originalityScore: 85,
        copyrightScore: 55,
        monetizationScore: 80,
      },
    });

    const result = await useCase.execute({
      projectId: 'proj-1',
      organizationId: 'org-1',
    });

    expect(result.warnings).toHaveLength(1);
    expect(result.warnings[0]).toContain('Copyright score is low');
  });

  it('generates warning when monetization score < 60', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue({
      id: 'proj-1',
      organizationId: 'org-1',
    });
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue({
      projectId: 'proj-1',
      complianceScore: 70,
      checklistResults: {
        originalityScore: 85,
        copyrightScore: 85,
        monetizationScore: 50,
      },
    });

    const result = await useCase.execute({
      projectId: 'proj-1',
      organizationId: 'org-1',
    });

    expect(result.warnings).toHaveLength(1);
    expect(result.warnings[0]).toContain('Monetization score is low');
  });

  it('generates multiple warnings when multiple scores < 60', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue({
      id: 'proj-1',
      organizationId: 'org-1',
    });
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue({
      projectId: 'proj-1',
      complianceScore: 50,
      checklistResults: {
        originalityScore: 45,
        copyrightScore: 55,
        monetizationScore: 50,
      },
    });

    const result = await useCase.execute({
      projectId: 'proj-1',
      organizationId: 'org-1',
    });

    expect(result.warnings).toHaveLength(3);
  });

  it('returns null scores when no metadata exists', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue({
      id: 'proj-1',
      organizationId: 'org-1',
    });
    mockPrisma.publicationMetadata.findUnique.mockResolvedValue(null);

    const result = await useCase.execute({
      projectId: 'proj-1',
      organizationId: 'org-1',
    });

    expect(result.complianceScore).toBeNull();
    expect(result.originalityScore).toBeNull();
    expect(result.copyrightScore).toBeNull();
    expect(result.monetizationScore).toBeNull();
    expect(result.warnings).toHaveLength(0);
  });

  it('throws ForbiddenException when organizationId is empty', async () => {
    await expect(
      useCase.execute({ projectId: 'proj-1', organizationId: '' }),
    ).rejects.toThrow(ForbiddenException);
  });

  it('throws BadRequestException when project not found', async () => {
    mockPrisma.contentProject.findFirst.mockResolvedValue(null);

    await expect(
      useCase.execute({
        projectId: 'non-existent',
        organizationId: 'org-1',
      }),
    ).rejects.toThrow('Project not found');
  });
});
