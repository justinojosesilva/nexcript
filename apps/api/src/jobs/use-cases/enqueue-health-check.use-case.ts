import { Inject, Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';

@Injectable()
export class EnqueueHealthCheckUseCase {
  constructor(@Inject(JOBS_QUEUE_TOKEN) private jobsQueue: Queue) {}

  async execute(): Promise<string> {
    const job = await this.jobsQueue.add(
      'health-check',
      { timestamp: new Date().toISOString() },
      { jobId: `health-check-${Date.now()}` },
    );
    return job.id!;
  }
}
