import { BadRequestException } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { SelectMediaUseCase } from './select-media.use-case';

jest.mock('@nexcript/database', () => ({
  prisma: {
    mediaSuggestion: {
      findFirst: jest.fn(),
      update: jest.fn(),
    },
  },
}));

describe('SelectMediaUseCase', () => {
  let useCase: SelectMediaUseCase;

  beforeEach(() => {
    jest.clearAllMocks();
    useCase = new SelectMediaUseCase();
  });

  describe('execute', () => {
    const validInput = {
      mediaSuggestionId: 'media-123',
      organizationId: 'org-789',
      selected: true,
    };

    it('should mark media as selected', async () => {
      const mockMediaSuggestion = {
        id: 'media-123',
        organizationId: 'org-789',
        projectId: 'project-123',
        metadata: { provider: 'pexels' },
      };

      (prisma.mediaSuggestion.findFirst as jest.Mock).mockResolvedValueOnce(
        mockMediaSuggestion,
      );
      (prisma.mediaSuggestion.update as jest.Mock).mockResolvedValueOnce({
        id: 'media-123',
      });

      const result = await useCase.execute(validInput);

      expect(result.success).toBe(true);
      expect(prisma.mediaSuggestion.update).toHaveBeenCalledWith({
        where: { id: 'media-123' },
        data: {
          metadata: {
            provider: 'pexels',
            selected: true,
          },
        },
      });
    });

    it('should mark media as not selected', async () => {
      const mockMediaSuggestion = {
        id: 'media-123',
        organizationId: 'org-789',
        projectId: 'project-123',
        metadata: { provider: 'pexels', selected: true },
      };

      (prisma.mediaSuggestion.findFirst as jest.Mock).mockResolvedValueOnce(
        mockMediaSuggestion,
      );
      (prisma.mediaSuggestion.update as jest.Mock).mockResolvedValueOnce({
        id: 'media-123',
      });

      const result = await useCase.execute({
        ...validInput,
        selected: false,
      });

      expect(result.success).toBe(true);
      expect(prisma.mediaSuggestion.update).toHaveBeenCalledWith({
        where: { id: 'media-123' },
        data: {
          metadata: {
            provider: 'pexels',
            selected: false,
          },
        },
      });
    });

    it('should handle empty metadata', async () => {
      const mockMediaSuggestion = {
        id: 'media-123',
        organizationId: 'org-789',
        projectId: 'project-123',
        metadata: null,
      };

      (prisma.mediaSuggestion.findFirst as jest.Mock).mockResolvedValueOnce(
        mockMediaSuggestion,
      );
      (prisma.mediaSuggestion.update as jest.Mock).mockResolvedValueOnce({
        id: 'media-123',
      });

      const result = await useCase.execute(validInput);

      expect(result.success).toBe(true);
      expect(prisma.mediaSuggestion.update).toHaveBeenCalledWith({
        where: { id: 'media-123' },
        data: {
          metadata: {
            selected: true,
          },
        },
      });
    });

    it('should throw if media suggestion not found', async () => {
      (prisma.mediaSuggestion.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should verify organization ownership', async () => {
      (prisma.mediaSuggestion.findFirst as jest.Mock).mockResolvedValueOnce(
        null,
      );

      await expect(
        useCase.execute({
          ...validInput,
          organizationId: 'different-org',
        }),
      ).rejects.toThrow(BadRequestException);

      expect(prisma.mediaSuggestion.findFirst).toHaveBeenCalledWith({
        where: {
          id: 'media-123',
          organizationId: 'different-org',
        },
      });
    });
  });
});
