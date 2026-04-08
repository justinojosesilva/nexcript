import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { ScoringModule } from '../scoring/scoring.module';
import { BullmqModule } from '../bullmq/bullmq.module';
import { AnalyzeTrendsUseCase } from './use-cases/analyze-trends.use-case';
import { EnqueueTrendAnalysisUseCase } from './use-cases/enqueue-trend-analysis.use-case';
import { GetTrendAnalysisUseCase } from './use-cases/get-trend-analysis.use-case';
import { ExecuteTrendAnalysisUseCase } from './use-cases/execute-trend-analysis.use-case';
import { TrendsController } from './trends.controller';

@Module({
  imports: [PrismaModule, ScoringModule, BullmqModule],
  controllers: [TrendsController],
  providers: [
    AnalyzeTrendsUseCase,
    EnqueueTrendAnalysisUseCase,
    GetTrendAnalysisUseCase,
    ExecuteTrendAnalysisUseCase,
  ],
  exports: [AnalyzeTrendsUseCase],
})
export class TrendsModule {}
