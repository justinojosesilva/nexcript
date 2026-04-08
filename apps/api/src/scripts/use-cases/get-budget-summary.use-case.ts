import { Injectable, Logger } from '@nestjs/common';
import { ScriptRepository } from '../../repositories/script.repository';

export interface BudgetSummary {
  organizationId: string;
  month: string; // YYYY-MM
  totalCostBrl: number;
  scriptCount: number;
  averageCostPerScript: number;
}

@Injectable()
export class GetBudgetSummaryUseCase {
  private readonly logger = new Logger(GetBudgetSummaryUseCase.name);

  constructor(private readonly scriptRepository: ScriptRepository) {}

  async execute(organizationId: string): Promise<BudgetSummary> {
    const currentMonth = new Date();
    const monthStart = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1,
    );
    const monthEnd = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0,
      23,
      59,
      59,
    );

    const scripts = await this.scriptRepository.findByOrganizationAndDateRange(
      organizationId,
      monthStart,
      monthEnd,
    );

    const totalCostBrl = scripts.reduce(
      (sum, script) => sum + (script.estimatedCostBrl || 0),
      0,
    );
    const scriptCount = scripts.length;
    const averageCostPerScript =
      scriptCount > 0 ? totalCostBrl / scriptCount : 0;

    const month = `${monthStart.getFullYear()}-${String(monthStart.getMonth() + 1).padStart(2, '0')}`;

    this.logger.debug({
      event: 'budget_summary_calculated',
      organizationId,
      month,
      totalCostBrl,
      scriptCount,
      averageCostPerScript,
    });

    return {
      organizationId,
      month,
      totalCostBrl,
      scriptCount,
      averageCostPerScript,
    };
  }
}
