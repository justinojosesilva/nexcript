import { Test, TestingModule } from '@nestjs/testing';
import { FormatType } from '@nexvideo/shared';
import { ScriptsController } from './scripts.controller';
import { GetScriptsUseCase } from './use-cases/get-scripts.use-case';
import { UpdateScriptUseCase } from './use-cases/update-script.use-case';
import { GenerateScriptUseCase } from './use-cases/generate-script.use-case';
import { EnqueueScriptGenerationUseCase } from './use-cases/enqueue-script-generation.use-case';
import { GetBudgetSummaryUseCase } from './use-cases/get-budget-summary.use-case';

describe('ScriptsController', () => {
  let controller: ScriptsController;
  let generateScriptUseCase: jest.Mocked<GenerateScriptUseCase>;
  let getScriptsUseCase: jest.Mocked<GetScriptsUseCase>;

  const mockScript = {
    id: 'script-1',
    projectId: 'project-1',
    trendAnalysisId: 'trend-123',
    status: 'draft' as const,
    formatType: FormatType.LONG_FORM,
    blocks: [],
    wordCount: 640,
    estimatedDurationSec: 600,
    originalityScore: 0.85,
    estimatedCostBrl: 15.5,
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  beforeEach(async () => {
    generateScriptUseCase = {
      execute: jest.fn(),
      invalidateCache: jest.fn().mockResolvedValue(undefined),
    } as any;

    getScriptsUseCase = {
      execute: jest.fn(),
      getById: jest.fn().mockResolvedValue(mockScript),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ScriptsController],
      providers: [
        {
          provide: GenerateScriptUseCase,
          useValue: generateScriptUseCase,
        },
        {
          provide: GetScriptsUseCase,
          useValue: getScriptsUseCase,
        },
        {
          provide: UpdateScriptUseCase,
          useValue: {},
        },
        {
          provide: EnqueueScriptGenerationUseCase,
          useValue: {},
        },
        {
          provide: GetBudgetSummaryUseCase,
          useValue: {},
        },
      ],
    }).compile();

    controller = module.get<ScriptsController>(ScriptsController);
  });

  describe('invalidateScriptCache', () => {
    it('should invalidate script cache when user is authorized', async () => {
      const user = {
        organizationId: 'org-1',
        userId: 'user-1',
        email: 'test@example.com',
      };

      await controller.invalidateScriptCache('script-1', user as any);

      expect(getScriptsUseCase.getById).toHaveBeenCalledWith(
        'script-1',
        'org-1',
      );
      expect(generateScriptUseCase.invalidateCache).toHaveBeenCalledWith(
        'project-1',
        'script-1',
      );
    });

    it('should throw error when user is not authenticated', async () => {
      await expect(
        controller.invalidateScriptCache('script-1', undefined),
      ).rejects.toThrow('User not authenticated');
    });

    it('should use projectId from fetched script for invalidation', async () => {
      const customScript = { ...mockScript, projectId: 'custom-project' };
      getScriptsUseCase.getById.mockResolvedValueOnce(customScript as any);

      const user = {
        organizationId: 'org-1',
        userId: 'user-1',
        email: 'test@example.com',
      };

      await controller.invalidateScriptCache('script-1', user as any);

      expect(generateScriptUseCase.invalidateCache).toHaveBeenCalledWith(
        'custom-project',
        'script-1',
      );
    });
  });
});
