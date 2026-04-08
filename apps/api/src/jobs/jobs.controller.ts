import { Controller, Get, Param, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { EnqueueHealthCheckUseCase } from './use-cases/enqueue-health-check.use-case';
import { GetJobStatusUseCase } from './use-cases/get-job-status.use-case';
import { JobStatusResponse } from './dto/job-status.response';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';

@ApiTags('jobs')
@ApiBearerAuth()
@Controller('jobs')
export class JobsController {
  constructor(
    private enqueueHealthCheckUseCase: EnqueueHealthCheckUseCase,
    private getJobStatusUseCase: GetJobStatusUseCase,
  ) {}

  @Post('health-check')
  @HttpCode(HttpStatus.ACCEPTED)
  @ApiOperation({
    summary: 'Enqueue a health check job',
  })
  @ApiResponse({
    status: 202,
    description: 'Job enqueued',
    schema: { example: { jobId: 'health-check-123' } },
  })
  async healthCheck(): Promise<{ jobId: string }> {
    const jobId = await this.enqueueHealthCheckUseCase.execute();
    return { jobId };
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Get job status',
    description: 'Retrieve the status of a job (script generation, narration, trends analysis, etc.)',
  })
  @ApiResponse({
    status: 200,
    description: 'Job status',
    schema: {
      example: {
        jobId: 'generate-script-proj-123-trend-456-1712580000000',
        status: 'DONE',
        type: 'generate-script',
        progress: 100,
        result: {
          scriptId: 'script-xyz',
        },
        createdAt: '2026-04-08T12:00:00Z',
        updatedAt: '2026-04-08T12:05:00Z',
      },
    },
  })
  @ApiResponse({
    status: 404,
    description: 'Job not found',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden - job does not belong to user organization',
  })
  async getStatus(
    @Param('id') id: string,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<JobStatusResponse> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getJobStatusUseCase.execute({
      jobId: id,
      organizationId: user.organizationId,
    });
  }
}
