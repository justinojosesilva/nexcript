jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ForbiddenException } from '@nestjs/common';
import { GetExportStatusUseCase } from './get-export-status.use-case';

const mockExportJobRepo = {
  findById: jest.fn(),
};

describe('GetExportStatusUseCase', () => {
  let useCase: GetExportStatusUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new GetExportStatusUseCase(mockExportJobRepo as any);
  });

  const mockExportJob = {
    id: 'ej-1',
    organizationId: 'org-1',
    projectId: 'proj-1',
    status: 'completed',
    outputUrl: 'https://example.com/export.zip',
    errorMessage: null,
    startedAt: new Date('2026-04-12T10:00:00Z'),
    completedAt: new Date('2026-04-12T10:01:00Z'),
    createdAt: new Date('2026-04-12T10:00:00Z'),
  };

  it('returns export job status', async () => {
    mockExportJobRepo.findById.mockResolvedValue(mockExportJob);

    const result = await useCase.execute({
      exportJobId: 'ej-1',
      organizationId: 'org-1',
    });

    expect(result.status).toBe('completed');
    expect(result.exportUrl).toBe('https://example.com/export.zip');
    expect(result.createdAt).toEqual(new Date('2026-04-12T10:00:00Z'));
  });

  it('throws ForbiddenException when organizationId is empty', async () => {
    await expect(
      useCase.execute({ exportJobId: 'ej-1', organizationId: '' }),
    ).rejects.toThrow(ForbiddenException);
  });

  it('throws BadRequestException when export job not found', async () => {
    mockExportJobRepo.findById.mockResolvedValue(null);

    await expect(
      useCase.execute({ exportJobId: 'non-existent', organizationId: 'org-1' }),
    ).rejects.toThrow('Export job not found');
  });

  it('throws ForbiddenException when org does not match', async () => {
    mockExportJobRepo.findById.mockResolvedValue(mockExportJob);

    await expect(
      useCase.execute({ exportJobId: 'ej-1', organizationId: 'other-org' }),
    ).rejects.toThrow(ForbiddenException);
  });

  it('returns undefined exportUrl when URL has expired (24h+)', async () => {
    const expiredJob = {
      ...mockExportJob,
      completedAt: new Date(Date.now() - 25 * 60 * 60 * 1000), // 25 hours ago
    };
    mockExportJobRepo.findById.mockResolvedValue(expiredJob);

    const result = await useCase.execute({
      exportJobId: 'ej-1',
      organizationId: 'org-1',
    });

    expect(result.exportUrl).toBeUndefined();
    expect(result.isExpired).toBe(true);
  });

  it('returns exportUrl when not yet expired (< 24h)', async () => {
    const recentJob = {
      ...mockExportJob,
      completedAt: new Date(Date.now() - 12 * 60 * 60 * 1000), // 12 hours ago
    };
    mockExportJobRepo.findById.mockResolvedValue(recentJob);

    const result = await useCase.execute({
      exportJobId: 'ej-1',
      organizationId: 'org-1',
    });

    expect(result.exportUrl).toBe('https://example.com/export.zip');
    expect(result.isExpired).toBeUndefined();
  });
});
