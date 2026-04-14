jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { NicheCategory } from '@nexcript/shared';
import { TrendsController } from './trends.controller';
import { EnqueueTrendAnalysisUseCase } from './use-cases/enqueue-trend-analysis.use-case';
import { GetTrendAnalysisUseCase } from './use-cases/get-trend-analysis.use-case';
import { ExecuteTrendAnalysisUseCase } from './use-cases/execute-trend-analysis.use-case';

describe('TrendsController', () => {
  let controller: TrendsController;
  let enqueueMock: jest.Mock;
  let getAnalysisMock: jest.Mock;
  let executeMock: jest.Mock;

  beforeEach(() => {
    enqueueMock = jest.fn().mockResolvedValue('job-id-123');
    getAnalysisMock = jest.fn().mockResolvedValue({
      id: 'ta-1',
      projectId: 'proj-1',
      keyword: 'javascript',
      data: {},
    });
    executeMock = jest.fn().mockResolvedValue({
      trendAnalysis: {
        id: 'ta-1',
        projectId: 'proj-1',
        keyword: 'javascript',
        data: {},
      },
      finalScore: 75,
    });

    const enqueueTrendAnalysisUseCase = {
      execute: enqueueMock,
    } as unknown as EnqueueTrendAnalysisUseCase;

    const getTrendAnalysisUseCase = {
      execute: getAnalysisMock,
    } as unknown as GetTrendAnalysisUseCase;

    const executeTrendAnalysisUseCase = {
      execute: executeMock,
    } as unknown as ExecuteTrendAnalysisUseCase;

    controller = new TrendsController(
      enqueueTrendAnalysisUseCase,
      getTrendAnalysisUseCase,
      executeTrendAnalysisUseCase,
    );
  });

  describe('analyzeTrends', () => {
    it('should enqueue a trend analysis job and return jobId', async () => {
      const request = {
        projectId: 'proj-1',
        keyword: 'javascript',
        geo: 'BR',
        niche: NicheCategory.TECHNOLOGY,
      };

      const authRequest = {
        user: { organizationId: 'org-1' },
      } as any;

      const result = await controller.analyzeTrends(request, authRequest);

      expect(result.jobId).toBe('job-id-123');
      expect(enqueueMock).toHaveBeenCalledWith({
        projectId: 'proj-1',
        organizationId: 'org-1',
        keyword: 'javascript',
        geo: 'BR',
        niche: NicheCategory.TECHNOLOGY,
      });
    });

    it('should throw error if organizationId is missing', async () => {
      const request = {
        projectId: 'proj-1',
        keyword: 'javascript',
        geo: 'BR',
        niche: NicheCategory.TECHNOLOGY,
      };

      const authRequest = {
        user: undefined,
      } as any;

      await expect(
        controller.analyzeTrends(request, authRequest),
      ).rejects.toThrow('organizationId not found in request');
    });
  });

  describe('getTrendAnalysis', () => {
    it('should return trend analysis for a project', async () => {
      const authRequest = { user: { organizationId: 'org-1' } } as any;

      const result = await controller.getTrendAnalysis('proj-1', authRequest);

      expect(result).toEqual({
        id: 'ta-1',
        projectId: 'proj-1',
        keyword: 'javascript',
        data: {},
      });
      expect(getAnalysisMock).toHaveBeenCalledWith('proj-1', 'org-1');
    });

    it('should pass projectId and organizationId to use case', async () => {
      const authRequest = { user: { organizationId: 'org-abc' } } as any;

      await controller.getTrendAnalysis('proj-123', authRequest);

      expect(getAnalysisMock).toHaveBeenCalledWith('proj-123', 'org-abc');
    });

    it('should throw if organizationId is missing from token', async () => {
      const authRequest = { user: undefined } as any;

      await expect(
        controller.getTrendAnalysis('proj-1', authRequest),
      ).rejects.toThrow('organizationId not found in request');
    });
  });

  describe('executeInternal', () => {
    it('should execute trend analysis internally', async () => {
      const input = {
        projectId: 'proj-1',
        organizationId: 'org-1',
        keyword: 'javascript',
        geo: 'BR',
        niche: NicheCategory.TECHNOLOGY,
      };

      const result = await controller.executeInternal(input);

      expect(result).toEqual({
        trendAnalysis: {
          id: 'ta-1',
          projectId: 'proj-1',
          keyword: 'javascript',
          data: {},
        },
        finalScore: 75,
      });
      expect(executeMock).toHaveBeenCalledWith(input);
    });
  });
});
