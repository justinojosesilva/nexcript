import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';
import { AnalyzeTrendsInput } from './analyze-trends.use-case';

@Injectable()
export class EnqueueTrendAnalysisUseCase {
  constructor(@Inject(JOBS_QUEUE_TOKEN) private jobsQueue: Queue) {}

  async execute(input: AnalyzeTrendsInput): Promise<string> {
    const jobId = `analyze-trends-${input.projectId}-${Date.now()}`;
    const job = await this.jobsQueue.add(
      'analyze-trends',
      input,
      { jobId },
    );
    return job.id!;
  }
}
