import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { AdaptersModule } from '../adapters/adapters.module';
import { CacheModule } from '../cache/cache.module';
import { GenerateScriptUseCase } from './use-cases/generate-script.use-case';
import { GetScriptsUseCase } from './use-cases/get-scripts.use-case';
import { UpdateScriptUseCase } from './use-cases/update-script.use-case';
import { EnqueueScriptGenerationUseCase } from './use-cases/enqueue-script-generation.use-case';
import { GetBudgetSummaryUseCase } from './use-cases/get-budget-summary.use-case';
import { ScriptsController } from './scripts.controller';

@Module({
  imports: [RepositoriesModule, AdaptersModule, CacheModule],
  controllers: [ScriptsController],
  providers: [
    GenerateScriptUseCase,
    GetScriptsUseCase,
    UpdateScriptUseCase,
    EnqueueScriptGenerationUseCase,
    GetBudgetSummaryUseCase,
  ],
  exports: [
    GenerateScriptUseCase,
    GetScriptsUseCase,
    UpdateScriptUseCase,
    EnqueueScriptGenerationUseCase,
    GetBudgetSummaryUseCase,
  ],
})
export class ScriptsModule {}
