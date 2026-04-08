import { Module } from '@nestjs/common';
import { AdaptersModule } from '../adapters/adapters.module';
import { SynthesizeNarrationUseCase } from './use-cases/synthesize-narration.use-case';
import { NarrationsController } from './narrations.controller';

@Module({
  imports: [AdaptersModule],
  controllers: [NarrationsController],
  providers: [SynthesizeNarrationUseCase],
  exports: [SynthesizeNarrationUseCase],
})
export class NarrationsModule {}
