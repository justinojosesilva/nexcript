import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { AdaptersModule } from '../adapters/adapters.module';
import { GenerateScriptUseCase } from './use-cases/generate-script.use-case';
import { GetScriptsUseCase } from './use-cases/get-scripts.use-case';
import { UpdateScriptUseCase } from './use-cases/update-script.use-case';
import { ScriptsController } from './scripts.controller';

@Module({
  imports: [RepositoriesModule, AdaptersModule],
  controllers: [ScriptsController],
  providers: [GenerateScriptUseCase, GetScriptsUseCase, UpdateScriptUseCase],
  exports: [GenerateScriptUseCase, GetScriptsUseCase, UpdateScriptUseCase],
})
export class ScriptsModule {}
