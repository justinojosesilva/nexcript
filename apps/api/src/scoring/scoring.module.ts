import { Module } from '@nestjs/common';
import { CacheModule } from '../cache/cache.module';
import { AdaptersModule } from '../adapters/adapters.module';
import { MonetizationScorer } from './monetization.scorer';
import { DemandScorer } from './demand.scorer';
import { SaturationScorer } from './saturation.scorer';
import { QualityGapScorer } from './quality-gap.scorer';
import { ComplianceScorer } from './compliance.scorer';
import { CalculateComplianceUseCase } from './use-cases/calculate-compliance.use-case';
import { GetComplianceUseCase } from './use-cases/get-compliance.use-case';
import { ScoringController } from './scoring.controller';

@Module({
  imports: [CacheModule, AdaptersModule],
  controllers: [ScoringController],
  providers: [
    MonetizationScorer,
    DemandScorer,
    SaturationScorer,
    QualityGapScorer,
    ComplianceScorer,
    CalculateComplianceUseCase,
    GetComplianceUseCase,
  ],
  exports: [
    MonetizationScorer,
    DemandScorer,
    SaturationScorer,
    QualityGapScorer,
    ComplianceScorer,
    CalculateComplianceUseCase,
    GetComplianceUseCase,
  ],
})
export class ScoringModule {}
