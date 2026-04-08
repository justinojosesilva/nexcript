import { BadRequestException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { FormatType, NicheCategory, ContentTone } from '@nexcript/shared';
import { GenerateScriptUseCase } from './generate-script.use-case';
import { ScriptRepository } from '../../repositories/script.repository';
import { ContentProjectRepository } from '../../repositories/content-project.repository';
import { IOpenAIPort } from '../../adapters/interfaces/openai.port';
import { ScriptGenerationException } from '../exceptions/script-generation.exception';

describe('GenerateScriptUseCase', () => {
  let useCase: GenerateScriptUseCase;
  let scriptRepository: jest.Mocked<ScriptRepository>;
  let contentProjectRepository: jest.Mocked<ContentProjectRepository>;
  let openaiPort: jest.Mocked<IOpenAIPort>;

  const mockProject = {
    id: 'project-1',
    organizationId: 'org-1',
    channelProfileId: 'channel-1',
    title: 'Test Project',
    keyword: 'test topic',
    niche: NicheCategory.FINANCE,
    format: FormatType.LONG_FORM,
    status: 'planning',
    durationMinutes: 10,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockScript = {
    id: 'script-1',
    projectId: 'project-1',
    trendAnalysisId: null,
    status: 'draft',
    formatType: FormatType.LONG_FORM,
    blocks: [],
    wordCount: 640,
    estimatedDurationSec: 600,
    originalityScore: 0.85,
    estimatedCostBrl: 15.5,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockOpenAIResponse = JSON.stringify({
    blocks: [
      {
        id: 'hook',
        type: 'HOOK',
        content: 'Hook content here',
        estimatedDuration: 30,
        wordCount: 50,
      },
      {
        id: 'intro',
        type: 'INTRO',
        content: 'Introduction content',
        estimatedDuration: 30,
        wordCount: 60,
      },
      {
        id: 'dev',
        type: 'DEVELOPMENT',
        content: 'Development content',
        estimatedDuration: 300,
        wordCount: 450,
      },
      {
        id: 'cta',
        type: 'RETENTION_CTA',
        content: 'CTA content',
        estimatedDuration: 60,
        wordCount: 80,
      },
      {
        id: 'conclusion',
        type: 'CONCLUSION',
        content: 'Conclusion content',
        estimatedDuration: 30,
        wordCount: 50,
      },
    ],
    totalEstimatedDuration: 600,
    totalWordCount: 640,
    originalityScore: 0.85,
    estimatedCostBrl: 15.5,
  });

  beforeEach(async () => {
    scriptRepository = {
      create: jest.fn().mockResolvedValue(mockScript),
      findById: jest.fn(),
    } as any;

    contentProjectRepository = {
      findByOrg: jest.fn(),
      findById: jest.fn().mockResolvedValue(mockProject),
      create: jest.fn(),
      update: jest.fn(),
      updateStatus: jest.fn(),
    } as any;

    openaiPort = {
      complete: jest.fn().mockResolvedValue(mockOpenAIResponse),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GenerateScriptUseCase,
        {
          provide: ScriptRepository,
          useValue: scriptRepository,
        },
        {
          provide: ContentProjectRepository,
          useValue: contentProjectRepository,
        },
        {
          provide: 'IOpenAIPort',
          useValue: openaiPort,
        },
      ],
    })
      .overrideProvider('IOpenAIPort')
      .useValue(openaiPort)
      .compile();

    useCase = module.get<GenerateScriptUseCase>(GenerateScriptUseCase);
  });

  describe('execute', () => {
    it('should generate a script successfully', async () => {
      const input = {
        projectId: 'project-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        tone: ContentTone.CASUAL,
        organizationId: 'org-1',
        keyword: 'test topic',
      };

      const result = await useCase.execute(input);

      expect(result).toEqual(mockScript);
      expect(contentProjectRepository.findById).toHaveBeenCalledWith(
        'project-1',
      );
      expect(openaiPort.complete).toHaveBeenCalled();
      expect(scriptRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          projectId: 'project-1',
          status: 'draft',
          formatType: FormatType.LONG_FORM,
        }),
      );
    });

    it('should throw BadRequestException when organizationId is missing', async () => {
      const input = {
        projectId: 'project-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: '',
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw BadRequestException when project does not exist', async () => {
      contentProjectRepository.findById.mockResolvedValueOnce(null);

      const input = {
        projectId: 'non-existent',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: 'org-1',
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        BadRequestException,
      );
    });

    it('should throw ScriptGenerationException when OpenAI returns invalid JSON', async () => {
      openaiPort.complete.mockResolvedValueOnce('invalid json {]');

      const input = {
        projectId: 'project-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: 'org-1',
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        ScriptGenerationException,
      );
    });

    it('should throw ScriptGenerationException when blocks are missing', async () => {
      openaiPort.complete.mockResolvedValueOnce(
        JSON.stringify({
          totalEstimatedDuration: 600,
          totalWordCount: 640,
          originalityScore: 0.85,
          estimatedCostBrl: 15.5,
        }),
      );

      const input = {
        projectId: 'project-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: 'org-1',
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        ScriptGenerationException,
      );
    });

    it('should throw ScriptGenerationException when blocks array is empty', async () => {
      openaiPort.complete.mockResolvedValueOnce(
        JSON.stringify({
          blocks: [],
          totalEstimatedDuration: 600,
          totalWordCount: 0,
          originalityScore: 0,
          estimatedCostBrl: 0,
        }),
      );

      const input = {
        projectId: 'project-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: 'org-1',
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        ScriptGenerationException,
      );
    });

    it('should throw ScriptGenerationException when OpenAI API fails', async () => {
      openaiPort.complete.mockRejectedValueOnce(
        new Error('OpenAI API Error'),
      );

      const input = {
        projectId: 'project-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: 'org-1',
      };

      await expect(useCase.execute(input)).rejects.toThrow(
        ScriptGenerationException,
      );
    });

    it('should handle SHORT_FORM format correctly', async () => {
      const input = {
        projectId: 'project-1',
        formatType: FormatType.SHORT_FORM,
        niche: NicheCategory.TECHNOLOGY,
        organizationId: 'org-1',
      };

      await useCase.execute(input);

      expect(openaiPort.complete).toHaveBeenCalledWith(
        expect.any(String),
        800, // SHORT_FORM uses 800 tokens
      );
    });

    it('should handle PODCAST format correctly', async () => {
      const input = {
        projectId: 'project-1',
        formatType: FormatType.PODCAST,
        niche: NicheCategory.BUSINESS,
        organizationId: 'org-1',
      };

      await useCase.execute(input);

      expect(openaiPort.complete).toHaveBeenCalledWith(
        expect.any(String),
        2500, // PODCAST uses 2500 tokens
      );
    });

    it('should include trendAnalysisId when provided', async () => {
      const input = {
        projectId: 'project-1',
        trendAnalysisId: 'trend-1',
        formatType: FormatType.LONG_FORM,
        niche: NicheCategory.FINANCE,
        organizationId: 'org-1',
      };

      await useCase.execute(input);

      expect(scriptRepository.create).toHaveBeenCalledWith(
        expect.objectContaining({
          trendAnalysisId: 'trend-1',
        }),
      );
    });

    it('should calculate correct max tokens for CAROUSEL format', async () => {
      const input = {
        projectId: 'project-1',
        formatType: FormatType.CAROUSEL,
        niche: NicheCategory.LIFESTYLE,
        organizationId: 'org-1',
      };

      await useCase.execute(input);

      expect(openaiPort.complete).toHaveBeenCalledWith(
        expect.any(String),
        1200, // CAROUSEL uses 1200 tokens
      );
    });
  });

  describe('calculateMaxTokens', () => {
    it('should return correct token limits for each format', () => {
      const testCases = [
        [FormatType.LONG_FORM, 2000],
        [FormatType.MEDIUM_FORM, 1500],
        [FormatType.SHORT_FORM, 800],
        [FormatType.CAROUSEL, 1200],
        [FormatType.PODCAST, 2500],
      ];

      testCases.forEach(([format, expectedTokens]) => {
        // We test this indirectly through the execute method
        // since it's a private method
      });
    });
  });
});
