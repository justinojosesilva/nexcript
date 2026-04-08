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
import { type Script } from '@nexcript/database';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';
import { GetScriptsUseCase } from './use-cases/get-scripts.use-case';
import { UpdateScriptUseCase } from './use-cases/update-script.use-case';
import { GenerateScriptUseCase } from './use-cases/generate-script.use-case';
import { UpdateScriptDto } from './dto/update-script.dto';
import { GenerateScriptDto } from './dto/generate-script.dto';

@Controller('scripts')
export class ScriptsController {
  constructor(
    private readonly getScriptsUseCase: GetScriptsUseCase,
    private readonly updateScriptUseCase: UpdateScriptUseCase,
    private readonly generateScriptUseCase: GenerateScriptUseCase,
  ) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async listScripts(
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<Script[]> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    // This route is for getting all scripts for a user
    // Implementation depends on requirements
    return [];
  }

  @Get('project/:projectId')
  @HttpCode(HttpStatus.OK)
  async getScriptsByProject(
    @Param('projectId') projectId: string,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<Script[]> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getScriptsUseCase.execute(projectId, user.organizationId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async getScript(
    @Param('id') id: string,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<Script> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getScriptsUseCase.getById(id, user.organizationId);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  async updateScript(
    @Param('id') id: string,
    @Body() dto: UpdateScriptDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<Script> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.updateScriptUseCase.execute(
      id,
      user.organizationId,
      dto,
    );
  }

  @Post('project/:projectId/generate')
  @HttpCode(HttpStatus.CREATED)
  async generateScript(
    @Param('projectId') projectId: string,
    @Body() dto: GenerateScriptDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<Script> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.generateScriptUseCase.execute({
      ...dto,
      projectId,
      organizationId: user.organizationId,
    });
  }
}
