import { Injectable, Logger } from '@nestjs/common';
import {
  AnalyzeTrendsUseCase,
  AnalyzeTrendsInput,
} from './analyze-trends.use-case';

/**
 * ExecuteTrendAnalysisUseCase
 *
 * Wrapper around AnalyzeTrendsUseCase for internal use by the BullMQ worker.
 * This allows the worker to execute the trend analysis by calling the API,
 * rather than trying to instantiate all dependencies in the worker process.
 */
@Injectable()
export class ExecuteTrendAnalysisUseCase {
  private readonly logger = new Logger(ExecuteTrendAnalysisUseCase.name);

  constructor(private readonly analyzeTrendsUseCase: AnalyzeTrendsUseCase) {}

  async execute(input: AnalyzeTrendsInput): Promise<unknown> {
    this.logger.log(
      `Executing trend analysis for project: ${input.projectId}, keyword: ${input.keyword}`,
    );
    return this.analyzeTrendsUseCase.execute(input);
  }
}
