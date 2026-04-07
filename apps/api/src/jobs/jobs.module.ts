import { Module } from '@nestjs/common';
import { JobsController } from './jobs.controller';
import { EnqueueHealthCheckUseCase } from './use-cases/enqueue-health-check.use-case';
import { GetJobStatusUseCase } from './use-cases/get-job-status.use-case';
import { BullmqModule } from '../bullmq/bullmq.module';

@Module({
  imports: [BullmqModule],
  controllers: [JobsController],
  providers: [EnqueueHealthCheckUseCase, GetJobStatusUseCase],
})
export class JobsModule {}
