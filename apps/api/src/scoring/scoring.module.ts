import { Module } from '@nestjs/common';
import { CacheModule } from '../cache/cache.module';
import { AdaptersModule } from '../adapters/adapters.module';
import { MonetizationScorer } from './monetization.scorer';
import { DemandScorer } from './demand.scorer';
import { SaturationScorer } from './saturation.scorer';
import { QualityGapScorer } from './quality-gap.scorer';

@Module({
  imports: [CacheModule, AdaptersModule],
  providers: [MonetizationScorer, DemandScorer, SaturationScorer, QualityGapScorer],
  exports: [MonetizationScorer, DemandScorer, SaturationScorer, QualityGapScorer],
})
export class ScoringModule {}
