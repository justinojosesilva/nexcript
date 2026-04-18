import { Test, TestingModule } from '@nestjs/testing';
import { BadRequestException } from '@nestjs/common';
import { FormatType, ContentTone } from '@nexvideo/shared';
import { EnqueueScriptGenerationUseCase } from './enqueue-script-generation.use-case';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';

jest.mock('@nexvideo/database', () => ({
  prisma: {
    $connect: jest.fn(),
    $disconnect: jest.fn(),
  },
}));

import { PrismaService } from '../../prisma/prisma.service';

describe('EnqueueScriptGenerationUseCase', () => {
  let useCase: EnqueueScriptGenerationUseCase;
  let prisma: {
    client: {
      contentProject: {
        findUnique: jest.Mock;
      };
      trendAnalysis: {
        findUnique: jest.Mock;
      };
    };
  };
  let jobsQueue: {
    add: jest.Mock;
  };

  beforeEach(async () => {
    const mockPrisma = {
      client: {
        contentProject: {
          findUnique: jest.fn(),
        },
        trendAnalysis: {
          findUnique: jest.fn(),
        },
      },
    };

    const mockQueue = {
      add: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EnqueueScriptGenerationUseCase,
        {
          provide: PrismaService,
          useValue: mockPrisma,
        },
        {
          provide: JOBS_QUEUE_TOKEN,
          useValue: mockQueue,
        },
      ],
    }).compile();

    useCase = module.get<EnqueueScriptGenerationUseCase>(
      EnqueueScriptGenerationUseCase,
    );
    prisma = mockPrisma;
    jobsQueue = mockQueue;
  });

  describe('execute', () => {
    const organizationId = 'org-123';
    const projectId = 'proj-456';
    const trendAnalysisId = 'trend-789';

    const validInput = {
      projectId,
      trendAnalysisId,
      formatType: FormatType.LONG_FORM,
      tone: ContentTone.CASUAL,
      organizationId,
    };

    it('should enqueue job successfully', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue({
        id: projectId,
        organizationId,
      } as any);

      prisma.client.trendAnalysis.findUnique.mockResolvedValue({
        id: trendAnalysisId,
        projectId,
        organizationId,
      } as any);

      jobsQueue.add.mockResolvedValue({
        id: 'job-123',
      } as any);

      const result = await useCase.execute(validInput);

      expect(result).toEqual({
        jobId: 'job-123',
        status: 'PENDING',
      });

      expect(prisma.client.contentProject.findUnique).toHaveBeenCalledWith({
        where: { id: projectId },
        select: { id: true, organizationId: true },
      });

      expect(prisma.client.trendAnalysis.findUnique).toHaveBeenCalledWith({
        where: { id: trendAnalysisId },
        select: { id: true, projectId: true, organizationId: true },
      });

      expect(jobsQueue.add).toHaveBeenCalledWith(
        'generate-script',
        {
          projectId,
          organizationId,
          trendAnalysisId,
          formatType: FormatType.LONG_FORM,
          tone: ContentTone.CASUAL,
        },
        expect.objectContaining({
          jobId: expect.stringContaining('generate-script'),
          removeOnComplete: false,
        }),
      );
    });

    it('should throw BadRequestException if project not found', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue(null);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
      expect(prisma.client.contentProject.findUnique).toHaveBeenCalled();
    });

    it('should throw BadRequestException if project does not belong to organization', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue({
        id: projectId,
        organizationId: 'different-org',
      } as any);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException if trend analysis not found', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue({
        id: projectId,
        organizationId,
      } as any);

      prisma.client.trendAnalysis.findUnique.mockResolvedValue(null);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
      expect(prisma.client.trendAnalysis.findUnique).toHaveBeenCalled();
    });

    it('should throw BadRequestException if trend analysis does not belong to project', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue({
        id: projectId,
        organizationId,
      } as any);

      prisma.client.trendAnalysis.findUnique.mockResolvedValue({
        id: trendAnalysisId,
        projectId: 'different-project',
        organizationId,
      } as any);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException if trend analysis belongs to a different organization (cross-tenant isolation)', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue({
        id: projectId,
        organizationId,
      } as any);

      prisma.client.trendAnalysis.findUnique.mockResolvedValue({
        id: trendAnalysisId,
        projectId,
        organizationId: 'other-org',
      } as any);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should handle different format types', async () => {
      const testCases = [
        FormatType.LONG_FORM,
        FormatType.SHORT_FORM,
        FormatType.MEDIUM_FORM,
      ];

      for (const formatType of testCases) {
        prisma.client.contentProject.findUnique.mockResolvedValue({
          id: projectId,
          organizationId,
        } as any);

        prisma.client.trendAnalysis.findUnique.mockResolvedValue({
          id: trendAnalysisId,
          projectId,
          organizationId,
        } as any);

        jobsQueue.add.mockResolvedValue({ id: 'job-123' } as any);

        const result = await useCase.execute({
          ...validInput,
          formatType,
        });

        expect(result.status).toBe('PENDING');
        expect(jobsQueue.add).toHaveBeenCalledWith(
          'generate-script',
          expect.objectContaining({
            formatType,
          }),
          expect.anything(),
        );
      }
    });

    it('should generate deterministic job IDs', async () => {
      prisma.client.contentProject.findUnique.mockResolvedValue({
        id: projectId,
        organizationId,
      } as any);

      prisma.client.trendAnalysis.findUnique.mockResolvedValue({
        id: trendAnalysisId,
        projectId,
        organizationId,
      } as any);

      jobsQueue.add.mockResolvedValue({ id: 'job-123' } as any);

      await useCase.execute(validInput);

      const callArgs = jobsQueue.add.mock.calls[0];
      const jobIdArg = callArgs[2] as { jobId: string } | undefined;

      expect(jobIdArg).toBeDefined();
      const jobId = jobIdArg!.jobId;

      expect(jobId).toContain('generate-script');
      expect(jobId).toContain(projectId);
      expect(jobId).toContain(trendAnalysisId);
    });
  });
});
