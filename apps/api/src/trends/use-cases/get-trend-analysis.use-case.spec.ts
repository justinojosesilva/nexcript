jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { NotFoundException } from '@nestjs/common';
import { GetTrendAnalysisUseCase } from './get-trend-analysis.use-case';

describe('GetTrendAnalysisUseCase', () => {
  let useCase: GetTrendAnalysisUseCase;
  let mockPrismaService: any;

  const mockTrendAnalysis = {
    id: 'ta-1',
    organizationId: 'org-1',
    projectId: 'proj-1',
    keyword: 'javascript',
    data: {
      scores: {
        demand: 80,
        saturation: 70,
        monetization: 90,
        qualityGap: 60,
      },
      finalScore: 78,
    },
    analyzedAt: new Date(),
    createdAt: new Date(),
  };

  beforeEach(() => {
    mockPrismaService = {
      client: {
        trendAnalysis: {
          findFirst: jest.fn(),
        },
      },
    };

    useCase = new GetTrendAnalysisUseCase(mockPrismaService);
  });

  it('should return the most recent trend analysis for a project', async () => {
    mockPrismaService.client.trendAnalysis.findFirst.mockResolvedValueOnce(
      mockTrendAnalysis,
    );

    const result = await useCase.execute('proj-1', 'org-1');

    expect(result).toEqual(mockTrendAnalysis);
    expect(
      mockPrismaService.client.trendAnalysis.findFirst,
    ).toHaveBeenCalledWith({
      where: { projectId: 'proj-1', organizationId: 'org-1' },
      orderBy: { analyzedAt: 'desc' },
    });
  });

  it('should throw NotFoundException if no trend analysis exists', async () => {
    mockPrismaService.client.trendAnalysis.findFirst.mockResolvedValueOnce(
      null,
    );

    await expect(useCase.execute('proj-nonexistent', 'org-1')).rejects.toThrow(
      NotFoundException,
    );
    await expect(useCase.execute('proj-nonexistent', 'org-1')).rejects.toThrow(
      'TrendAnalysis not found for project: proj-nonexistent',
    );
  });

  it('should query by project ID and organizationId', async () => {
    mockPrismaService.client.trendAnalysis.findFirst.mockResolvedValueOnce(
      mockTrendAnalysis,
    );

    await useCase.execute('proj-123', 'org-abc');

    const callArgs =
      mockPrismaService.client.trendAnalysis.findFirst.mock.calls[0][0];
    expect(callArgs.where.projectId).toBe('proj-123');
    expect(callArgs.where.organizationId).toBe('org-abc');
  });

  it('should order results by analyzedAt descending to get most recent', async () => {
    mockPrismaService.client.trendAnalysis.findFirst.mockResolvedValueOnce(
      mockTrendAnalysis,
    );

    await useCase.execute('proj-1', 'org-1');

    const callArgs =
      mockPrismaService.client.trendAnalysis.findFirst.mock.calls[0][0];
    expect(callArgs.orderBy).toEqual({ analyzedAt: 'desc' });
  });

  it('should not return trend analysis belonging to a different organization (cross-tenant isolation)', async () => {
    // org-2 attempts to access proj-1 which belongs to org-1 — findFirst returns null
    mockPrismaService.client.trendAnalysis.findFirst.mockResolvedValueOnce(null);

    await expect(useCase.execute('proj-1', 'org-2')).rejects.toThrow(NotFoundException);

    const callArgs =
      mockPrismaService.client.trendAnalysis.findFirst.mock.calls[0][0];
    expect(callArgs.where.organizationId).toBe('org-2');
    expect(callArgs.where.projectId).toBe('proj-1');
  });
});
