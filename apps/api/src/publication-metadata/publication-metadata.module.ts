import { Module } from '@nestjs/common';
import { AdaptersModule } from '../adapters/adapters.module';
import { BullmqModule } from '../bullmq/bullmq.module';
import { GenerateTitleTagsUseCase } from './use-cases/generate-title-tags.use-case';
import { SelectTitleUseCase } from './use-cases/select-title.use-case';
import { EnqueuePublicationGenerationUseCase } from './use-cases/enqueue-publication-generation.use-case';
import { PublicationMetadataController } from './publication-metadata.controller';

@Module({
  imports: [AdaptersModule, BullmqModule],
  controllers: [PublicationMetadataController],
  providers: [
    GenerateTitleTagsUseCase,
    SelectTitleUseCase,
    EnqueuePublicationGenerationUseCase,
  ],
  exports: [GenerateTitleTagsUseCase, SelectTitleUseCase, EnqueuePublicationGenerationUseCase],
})
export class PublicationMetadataModule {}
