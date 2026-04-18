import { BadRequestException } from '@nestjs/common';
import { prisma } from '@nexvideo/database';
import { SelectTitleUseCase } from './select-title.use-case';

jest.mock('@nexvideo/database', () => ({
  prisma: {
    contentProject: {
      findFirst: jest.fn(),
    },
    publicationMetadata: {
      update: jest.fn(),
    },
  },
}));

describe('SelectTitleUseCase', () => {
  let useCase: SelectTitleUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new SelectTitleUseCase();
  });

  describe('execute', () => {
    const validInput = {
      projectId: 'project-123',
      organizationId: 'org-789',
      selectedTitle: '7 Ways to Make Money Fast',
    };

    it('should select and save title', async () => {
      const mockProject = {
        id: 'project-123',
        organizationId: 'org-789',
        title: 'Test Project',
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.publicationMetadata.update as jest.Mock).mockResolvedValueOnce({
        id: 'meta-1',
      });

      const result = await useCase.execute(validInput);

      expect(result.success).toBe(true);
      expect(prisma.publicationMetadata.update).toHaveBeenCalledWith({
        where: { projectId: 'project-123' },
        data: {
          title: '7 Ways to Make Money Fast',
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

    it('should handle empty title', async () => {
      const mockProject = {
        id: 'project-123',
        organizationId: 'org-789',
        title: 'Test Project',
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.publicationMetadata.update as jest.Mock).mockResolvedValueOnce({
        id: 'meta-1',
      });

      const result = await useCase.execute({
        ...validInput,
        selectedTitle: '',
      });

      expect(result.success).toBe(true);
      expect(prisma.publicationMetadata.update).toHaveBeenCalledWith({
        where: { projectId: 'project-123' },
        data: {
          title: '',
          updatedAt: expect.any(Date),
        },
      });
    });
  });
});
