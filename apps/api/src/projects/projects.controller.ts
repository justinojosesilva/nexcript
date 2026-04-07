import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { type ContentProject } from '@nexcript/database';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';
import { CreateContentProjectDto } from './dto/create-content-project.dto';
import { UpdateContentProjectDto } from './dto/update-content-project.dto';
import { CreateContentProjectUseCase } from './use-cases/create-content-project.use-case';
import { GetContentProjectUseCase } from './use-cases/get-content-project.use-case';
import { ListContentProjectsUseCase } from './use-cases/list-content-projects.use-case';
import { UpdateContentProjectUseCase } from './use-cases/update-content-project.use-case';
import { type ContentProjectWithChannelProfile } from '../repositories/content-project.repository.interface';

@Controller('projects')
export class ProjectsController {
  constructor(
    private readonly createContentProjectUseCase: CreateContentProjectUseCase,
    private readonly listContentProjectsUseCase: ListContentProjectsUseCase,
    private readonly getContentProjectUseCase: GetContentProjectUseCase,
    private readonly updateContentProjectUseCase: UpdateContentProjectUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() dto: CreateContentProjectDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ContentProject> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.createContentProjectUseCase.execute({
      ...dto,
      organizationId: user.organizationId,
    });
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  list(
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ContentProjectWithChannelProfile[]> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.listContentProjectsUseCase.execute(user.organizationId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  get(
    @Param('id') id: string,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ContentProjectWithChannelProfile> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getContentProjectUseCase.execute(id, user.organizationId);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() dto: UpdateContentProjectDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ContentProject> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.updateContentProjectUseCase.execute(
      id,
      user.organizationId,
      dto,
    );
  }
}
