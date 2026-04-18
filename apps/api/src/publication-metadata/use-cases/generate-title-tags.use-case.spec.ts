import { BadRequestException } from '@nestjs/common';
import { prisma } from '@nexvideo/database';
import { GenerateTitleTagsUseCase } from './generate-title-tags.use-case';
import { GenerateTitleTagsDto } from '../dto/generate-title-tags.dto';

// Mock prisma
jest.mock('@nexvideo/database', () => ({
  prisma: {
    contentProject: {
      findFirst: jest.fn(),
    },
    script: {
      findUnique: jest.fn(),
    },
    publicationMetadata: {
      upsert: jest.fn(),
    },
  },
}));

// Mock prompts
jest.mock('@nexvideo/prompts', () => ({
  titleVariantsPrompt: jest.fn(({ topic }) => `Generate titles for: ${topic}`),
  tagsPrompt: jest.fn(({ topic }) => `Generate tags for: ${topic}`),
}));

describe('GenerateTitleTagsUseCase', () => {
  let useCase: GenerateTitleTagsUseCase;
  let mockOpenAIAdapter: any;

  const mockProject = {
    id: 'project-123',
    organizationId: 'org-789',
    title: 'How to Make Money Online',
    niche: 'finance',
    channelProfile: {
      tone: 'professional',
    },
  };

  const mockScript = {
    id: 'script-456',
    projectId: 'project-123',
  };

  const mockTitleVariantsResponse = {
    variants: [
      {
        title: '7 Ways to Make Money Fast',
        ctReason: 'Curiosity + Number hook',
        score: 92,
      },
      {
        title: 'Stop Working 9-5: Earn $5K/Month',
        ctReason: 'Benefit + Urgency',
        score: 88,
      },
      {
        title: 'The $10K Money Making Formula',
        ctReason: 'Specificity + Number',
        score: 85,
      },
    ],
  };

  const mockTagsResponse = {
    primary: ['make-money', 'passive-income', 'earn-money'],
    secondary: ['work-from-home', 'side-hustle', 'financial-freedom'],
    niche: ['money-making-ideas', 'income-stream'],
    trending: ['remote-work-trends'],
  };

  beforeEach(() => {
    jest.clearAllMocks();

    mockOpenAIAdapter = {
      complete: jest.fn(),
    };

    useCase = new GenerateTitleTagsUseCase(mockOpenAIAdapter);
  });

  describe('execute', () => {
    const validInput: GenerateTitleTagsDto = {
      projectId: 'project-123',
      scriptId: 'script-456',
      organizationId: 'org-789',
    };

    it('should generate and save title variants and tags', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({
        id: 'meta-1',
      });

      const result = await useCase.execute(validInput);

      expect(result.titleVariants).toHaveLength(3);
      expect(result.titleVariants[0].title).toBe('7 Ways to Make Money Fast');
      expect(result.tags.primary).toHaveLength(3);
      expect(result.projectId).toBe('project-123');

      // Verify OpenAI was called twice
      expect(mockOpenAIAdapter.complete).toHaveBeenCalledTimes(2);
      expect(mockOpenAIAdapter.complete).toHaveBeenNthCalledWith(
        1,
        expect.any(String),
        400, // Title max_tokens
      );
      expect(mockOpenAIAdapter.complete).toHaveBeenNthCalledWith(
        2,
        expect.any(String),
        300, // Tags max_tokens
      );
    });

    it('should call OpenAI with correct prompts containing topic/niche/tone', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      await useCase.execute(validInput);

      // Verify prompts were generated correctly
      expect(mockOpenAIAdapter.complete).toHaveBeenCalled();
    });

    it('should upsert PublicationMetadata with flattened tags', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      await useCase.execute(validInput);

      expect(prisma.publicationMetadata.upsert).toHaveBeenCalledWith({
        where: { projectId: 'project-123' },
        update: {
          tags: expect.arrayContaining([
            'make-money',
            'passive-income',
            'work-from-home',
          ]),
          title: null,
          updatedAt: expect.any(Date),
        },
        create: {
          organizationId: 'org-789',
          projectId: 'project-123',
          title: null,
          tags: expect.arrayContaining([
            'make-money',
            'passive-income',
            'work-from-home',
          ]),
          platform: 'youtube',
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

    it('should throw if script not found', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(null);

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw if script does not belong to project', async () => {
      const differentProjectScript = {
        id: 'script-456',
        projectId: 'different-project',
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(
        differentProjectScript,
      );

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should handle invalid title variants JSON response', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock).mockResolvedValueOnce(
        'invalid json',
      );

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should handle invalid tags JSON response', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce('invalid tags json');

      await expect(useCase.execute(validInput)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should be idempotent - re-execution overwrites PublicationMetadata', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      // First execution
      await useCase.execute(validInput);

      // Second execution should use upsert (update path)
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      await useCase.execute(validInput);

      // Verify upsert was called both times
      expect(prisma.publicationMetadata.upsert).toHaveBeenCalledTimes(2);
    });

    it('should handle empty title variants', async () => {
      const emptyVariantsResponse = { variants: [] };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(emptyVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      const result = await useCase.execute(validInput);

      expect(result.titleVariants).toHaveLength(0);
      expect(result.tags.primary.length).toBeGreaterThan(0);
    });

    it('should handle partial tags response', async () => {
      const partialTagsResponse = {
        primary: ['tag1', 'tag2'],
        secondary: [],
        niche: ['tag3'],
        trending: [],
      };

      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(partialTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      const result = await useCase.execute(validInput);

      expect(result.tags.primary).toHaveLength(2);
      expect(result.tags.secondary).toHaveLength(0);
      expect(result.tags.niche).toHaveLength(1);

      // Verify flattened tags include all categories
      const upsertCall = (
        prisma.publicationMetadata.upsert as jest.Mock
      ).mock.calls[0][0];
      expect(upsertCall.update.tags).toHaveLength(3); // tag1, tag2, tag3
    });

    it('should set title to null (selectedTitle not yet chosen)', async () => {
      (prisma.contentProject.findFirst as jest.Mock).mockResolvedValueOnce(
        mockProject,
      );
      (prisma.script.findUnique as jest.Mock).mockResolvedValueOnce(mockScript);
      (mockOpenAIAdapter.complete as jest.Mock)
        .mockResolvedValueOnce(JSON.stringify(mockTitleVariantsResponse))
        .mockResolvedValueOnce(JSON.stringify(mockTagsResponse));
      (prisma.publicationMetadata.upsert as jest.Mock).mockResolvedValueOnce({});

      await useCase.execute(validInput);

      const upsertCall = (
        prisma.publicationMetadata.upsert as jest.Mock
      ).mock.calls[0][0];
      expect(upsertCall.update.title).toBeNull();
      expect(upsertCall.create.title).toBeNull();
    });
  });
});
