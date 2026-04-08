import { Module } from '@nestjs/common';
import { AdaptersModule } from '../adapters/adapters.module';
import { CacheModule } from '../cache/cache.module';
import { SynthesizeNarrationUseCase } from './use-cases/synthesize-narration.use-case';
import { CacheTtsSynthesisUseCase } from './use-cases/cache-tts-synthesis.use-case';
import { NarrationsController } from './narrations.controller';

@Module({
  imports: [AdaptersModule, CacheModule],
  controllers: [NarrationsController],
  providers: [SynthesizeNarrationUseCase, CacheTtsSynthesisUseCase],
  exports: [SynthesizeNarrationUseCase],
})
export class NarrationsModule {}
