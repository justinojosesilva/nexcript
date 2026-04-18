import { BadRequestException } from '@nestjs/common';
import { prisma } from '@nexvideo/database';
import { CalculateComplianceUseCase } from './calculate-compliance.use-case';
import { NicheCategory } from '@nexvideo/shared';

jest.mock('@nexvideo/database', () => ({
  prisma: {
    contentProject: {
      findFirst: jest.fn(),
    },
    publicationMetadata: {
      upsert: jest.fn(),
    },
  },
}));

describe('CalculateComplianceUseCase', () => {
  let useCase: CalculateComplianceUseCase;
  let mockComplianceScorer: any;

  beforeEach(() => {
    jest.clearAllMocks();

    mockComplianceScorer = {
      execute: jest.fn().mockResolvedValue({
        originalityScore: 75,
        copyrightScore: 100,
        monetizationScore: 80,
        complianceScore: 85,
      }),
    };

    useCase = new CalculateComplianceUseCase(mockComplianceScorer);
  });

  describe('execute', () => {
    const validInput = {
      projectId: 'project-123',
      organizationId: 'org-789',
      niche: NicheCategory.TECHNOLOGY,
    };

    const mockProject = {
      id: 'project-123',
      organizationId: 'org-789',
    };

    it('should calculate and save compliance scores', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({
        id: 'meta-1',
        complianceScore: 85,
      });

      const result = await useCase.execute(validInput);

      expect(result).toEqual({
        originalityScore: 75,
        copyrightScore: 100,
        monetizationScore: 80,
        complianceScore: 85,
      });

      expect(mockComplianceScorer.execute).toHaveBeenCalledWith({
        projectId: 'project-123',
        organizationId: 'org-789',
        niche: NicheCategory.TECHNOLOGY,
      });

      expect(prisma.publicationMetadata.upsert).toHaveBeenCalledWith({
        where: { projectId: 'project-123' },
        create: {
          projectId: 'project-123',
          organizationId: 'org-789',
          platform: 'youtube',
          complianceScore: 85,
          checklistResults: {
            originalityScore: 75,
            copyrightScore: 100,
            monetizationScore: 80,
          },
        },
        update: {
          complianceScore: 85,
          checklistResults: {
            originalityScore: 75,
            copyrightScore: 100,
            monetizationScore: 80,
          },
          updatedAt: expect.any(Date),
        },
      });
    });

    it('should throw if project not found', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw if organization does not match', async () => {
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

    it('should upsert metadata (create if not exists)', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({
        id: 'meta-1',
        projectId: 'project-123',
        complianceScore: 85,
      });

      await useCase.execute(validInput);

      expect(prisma.publicationMetadata.upsert).toHaveBeenCalledWith(
        expect.objectContaining({
          where: { projectId: 'project-123' },
          create: expect.objectContaining({
            projectId: 'project-123',
            organizationId: 'org-789',
            complianceScore: 85,
          }),
        }),
      );
    });

    it('should upsert metadata (update if exists)', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({
        id: 'meta-1',
        projectId: 'project-123',
        complianceScore: 85,
      });

      await useCase.execute(validInput);

      const call = (prisma.publicationMetadata.upsert as jest.Mock).mock
        .calls[0][0];
      expect(call.update).toHaveProperty('complianceScore', 85);
      expect(call.update).toHaveProperty('checklistResults');
      expect(call.update).toHaveProperty('updatedAt');
    });
  });
});
