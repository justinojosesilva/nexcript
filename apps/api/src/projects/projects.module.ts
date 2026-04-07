import { Module } from '@nestjs/common';
import { RepositoriesModule } from '../repositories/repositories.module';
import { ProjectsController } from './projects.controller';
import { CreateContentProjectUseCase } from './use-cases/create-content-project.use-case';
import { GetContentProjectUseCase } from './use-cases/get-content-project.use-case';
import { ListContentProjectsUseCase } from './use-cases/list-content-projects.use-case';
import { UpdateContentProjectUseCase } from './use-cases/update-content-project.use-case';

@Module({
  imports: [RepositoriesModule],
  controllers: [ProjectsController],
  providers: [
    CreateContentProjectUseCase,
    ListContentProjectsUseCase,
    GetContentProjectUseCase,
    UpdateContentProjectUseCase,
  ],
})
export class ProjectsModule {}
