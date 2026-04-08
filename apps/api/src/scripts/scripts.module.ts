import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { AdaptersModule } from '../adapters/adapters.module';
import { GenerateScriptUseCase } from './use-cases/generate-script.use-case';

@Module({
  imports: [RepositoriesModule, AdaptersModule],
  providers: [GenerateScriptUseCase],
  exports: [GenerateScriptUseCase],
})
export class ScriptsModule {}
