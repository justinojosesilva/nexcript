import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Queue } from 'bullmq';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';
import { JobStatusResponse } from '../dto/job-status.response';

@Injectable()
export class GetJobStatusUseCase {
  constructor(@Inject(JOBS_QUEUE_TOKEN) private jobsQueue: Queue) {}

  async execute(jobId: string): Promise<JobStatusResponse> {
    const job = await this.jobsQueue.getJob(jobId);

    if (!job) {
      throw new NotFoundException('Job not found');
    }

    const state = await job.getState();
    const progress = job.progress;

    let status: JobStatusResponse['status'] = 'PENDING';
    if (state === 'completed') {
      status = 'DONE';
    } else if (state === 'failed') {
      status = 'FAILED';
    } else if (state === 'active') {
      status = 'PROCESSING';
    }

    const response: JobStatusResponse = {
      id: job.id!,
      status,
      progress: typeof progress === 'number' ? progress : undefined,
      data: job.data,
    };

    if (job.failedReason) {
      response.failedReason = job.failedReason;
    }

    return response;
  }
}
