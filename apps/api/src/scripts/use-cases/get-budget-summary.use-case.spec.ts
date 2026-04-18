import { Test, TestingModule } from '@nestjs/testing';
import { GetBudgetSummaryUseCase } from './get-budget-summary.use-case';
import { ScriptRepository } from '../../repositories/script.repository';
import { FormatType } from '@nexvideo/shared';

describe('GetBudgetSummaryUseCase', () => {
  let useCase: GetBudgetSummaryUseCase;
  let scriptRepository: jest.Mocked<ScriptRepository>;

  const currentDate = new Date();
  const monthStart = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  );
  const monthEnd = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0,
    23,
    59,
    59,
  );

  const mockScripts = [
    {
      id: 'script-1',
      projectId: 'project-1',
      trendAnalysisId: null,
      status: 'draft' as const,
      formatType: FormatType.LONG_FORM,
      blocks: [],
      wordCount: 640,
      estimatedDurationSec: 600,
      originalityScore: 0.85,
      estimatedCostBrl: 20.0,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'script-2',
      projectId: 'project-1',
      trendAnalysisId: null,
      status: 'draft' as const,
      formatType: FormatType.SHORT_FORM,
      blocks: [],
      wordCount: 100,
      estimatedDurationSec: 60,
      originalityScore: 0.75,
      estimatedCostBrl: 10.5,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 'script-3',
      projectId: 'project-2',
      trendAnalysisId: null,
      status: 'draft' as const,
      formatType: FormatType.MEDIUM_FORM,
      blocks: [],
      wordCount: 400,
      estimatedDurationSec: 300,
      originalityScore: 0.8,
      estimatedCostBrl: 15.25,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];

  beforeEach(async () => {
    scriptRepository = {
      findByOrganizationAndDateRange: jest.fn().mockResolvedValue(mockScripts),
      create: jest.fn(),
      findById: jest.fn(),
    } as any;

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetBudgetSummaryUseCase,
        {
          provide: ScriptRepository,
          useValue: scriptRepository,
        },
      ],
    }).compile();

    useCase = module.get<GetBudgetSummaryUseCase>(GetBudgetSummaryUseCase);
  });

  describe('execute', () => {
    it('should return budget summary for current month', async () => {
      const result = await useCase.execute('org-1');

      expect(result).toEqual({
        organizationId: 'org-1',
        month: `${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, '0')}`,
        totalCostBrl: 45.75,
        scriptCount: 3,
        averageCostPerScript: 15.25,
      });
    });

    it('should call findByOrganizationAndDateRange with correct parameters', async () => {
      await useCase.execute('org-1');

      expect(
        scriptRepository.findByOrganizationAndDateRange,
      ).toHaveBeenCalledWith('org-1', monthStart, monthEnd);
    });

    it('should handle empty script list', async () => {
      scriptRepository.findByOrganizationAndDateRange.mockResolvedValueOnce([]);

      const result = await useCase.execute('org-1');

      expect(result).toEqual({
        organizationId: 'org-1',
        month: `${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, '0')}`,
        totalCostBrl: 0,
        scriptCount: 0,
        averageCostPerScript: 0,
      });
    });

    it('should handle scripts with null estimatedCostBrl', async () => {
      const scriptsWithNullCost = [
        { ...mockScripts[0], estimatedCostBrl: null },
        { ...mockScripts[1], estimatedCostBrl: 10.5 },
      ];

      scriptRepository.findByOrganizationAndDateRange.mockResolvedValueOnce(
        scriptsWithNullCost as any,
      );

      const result = await useCase.execute('org-1');

      expect(result.totalCostBrl).toEqual(10.5);
      expect(result.scriptCount).toEqual(2);
      expect(result.averageCostPerScript).toEqual(5.25);
    });

    it('should calculate correct month string for all months', async () => {
      const result = await useCase.execute('org-1');
      expect(result.month).toMatch(/\d{4}-\d{2}/);
    });
  });
});
