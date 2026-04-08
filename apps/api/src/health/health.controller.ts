import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Public } from '../auth/decorators/public.decorator';
import { HealthService, type HealthStatus } from './health.service';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  constructor(private readonly healthService: HealthService) {}

  @Public()
  @Get()
  @HttpCode(HttpStatus.OK)
  @ApiOperation({
    summary: 'Infrastructure health check',
    description:
      'Returns detailed health status of Redis, PostgreSQL, and worker queues. Internal endpoint for infrastructure monitoring (no auth required).',
  })
  @ApiResponse({
    status: 200,
    description: 'Health status returned (may be healthy, degraded, or unhealthy)',
    schema: {
      example: {
        status: 'healthy',
        timestamp: '2026-04-08T20:30:00Z',
        redis: {
          status: 'ok',
          responseTime: 2,
        },
        database: {
          status: 'ok',
          responseTime: 5,
        },
        workers: {
          status: 'ok',
          activeCount: 3,
        },
      },
    },
  })
  async getHealth(): Promise<HealthStatus> {
    return await this.healthService.getHealth();
  }
}
