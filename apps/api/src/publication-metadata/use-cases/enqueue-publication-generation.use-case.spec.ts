import { BadRequestException } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { EnqueuePublicationGenerationUseCase } from './enqueue-publication-generation.use-case';

jest.mock('@nexcript/database', () => ({
  prisma: {
    contentProject: {
      findFirst: jest.fn(),
    },
    script: {
      findUnique: jest.fn(),
    },
  },
}));

describe('EnqueuePublicationGenerationUseCase', () => {
  let useCase: EnqueuePublicationGenerationUseCase;
  let mockJobsQueue: any;

  beforeEach(() => {
    jest.clearAllMocks();

    mockJobsQueue = {
      add: jest.fn(),
    };

    useCase = new EnqueuePublicationGenerationUseCase(mockJobsQueue);
  });

  describe('execute', () => {
    const validInput = {
      projectId: 'project-123',
      scriptId: 'script-456',
      organizationId: 'org-789',
    };

    it('should enqueue publication generation job', async () => {
      const mockProject = {
        id: 'project-123',
        organizationId: 'org-789',
      };

      const mockScript = {
        id: 'script-456',
        projectId: 'project-123',
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockJobsQueue.add as jest.Mock).mockResolvedValueOnce({
        id: 'job-uuid',
      });

      const result = await useCase.execute(validInput);

      expect(result).toBe('job-uuid');
      expect(mockJobsQueue.add).toHaveBeenCalledWith(
        'generate-publication',
        {
          projectId: 'project-123',
          scriptId: 'script-456',
          organizationId: 'org-789',
        },
        {
          jobId: expect.stringContaining('generate-publication-project-123-script-456-'),
        },
      );
    });

    it('should throw if project not found', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw if script not found', async () => {
      const mockProject = {
        id: 'project-123',
        organizationId: 'org-789',
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(null);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw if script does not belong to project', async () => {
      const mockProject = {
        id: 'project-123',
        organizationId: 'org-789',
      };

      const mockScript = {
        id: 'script-456',
        projectId: 'different-project',
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should verify organization ownership', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(
        useCase.execute({
          ...validInput,
          organizationId: 'different-org',
        }),
      ).rejects.toThrow(BadRequestException);

      expect(prisma.contentProject.findFirst).toHaveBeenCalledWith({
        where: {
          id: 'project-123',
          organizationId: 'different-org',
        },
      });
    });
  });
});
