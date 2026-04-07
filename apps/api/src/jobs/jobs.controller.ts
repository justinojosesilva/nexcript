import { Controller, Get, Param, Post } from '@nestjs/common';
import { EnqueueHealthCheckUseCase } from './use-cases/enqueue-health-check.use-case';
import { GetJobStatusUseCase } from './use-cases/get-job-status.use-case';
import { JobStatusResponse } from './dto/job-status.response';

@Controller('jobs')
export class JobsController {
  constructor(
    private enqueueHealthCheckUseCase: EnqueueHealthCheckUseCase,
    private getJobStatusUseCase: GetJobStatusUseCase,
  ) {}

  @Post('health-check')
  async healthCheck(): Promise<{ jobId: string }> {
    const jobId = await this.enqueueHealthCheckUseCase.execute();
    return { jobId };
  }

  @Get(':id')
  async getStatus(@Param('id') id: string): Promise<JobStatusResponse> {
    return this.getJobStatusUseCase.execute(id);
  }
}
