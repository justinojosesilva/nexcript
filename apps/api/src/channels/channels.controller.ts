import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { type ChannelProfile } from '@nexvideo/database';
import { CurrentUser } from '../auth/decorators/current-user.decorator';
import { type JwtPayload } from '../auth/strategies/jwt.strategy';
import { CreateChannelProfileDto } from './dto/create-channel-profile.dto';
import { UpdateChannelProfileDto } from './dto/update-channel-profile.dto';
import { CreateChannelProfileUseCase } from './use-cases/create-channel-profile.use-case';
import { DeleteChannelProfileUseCase } from './use-cases/delete-channel-profile.use-case';
import { GetChannelProfileUseCase } from './use-cases/get-channel-profile.use-case';
import { ListChannelProfilesUseCase } from './use-cases/list-channel-profiles.use-case';
import { UpdateChannelProfileUseCase } from './use-cases/update-channel-profile.use-case';

@Controller('channels')
export class ChannelsController {
  constructor(
    private readonly createChannelProfileUseCase: CreateChannelProfileUseCase,
    private readonly listChannelProfilesUseCase: ListChannelProfilesUseCase,
    private readonly getChannelProfileUseCase: GetChannelProfileUseCase,
    private readonly updateChannelProfileUseCase: UpdateChannelProfileUseCase,
    private readonly deleteChannelProfileUseCase: DeleteChannelProfileUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    @Body() dto: CreateChannelProfileDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ChannelProfile> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.createChannelProfileUseCase.execute({
      ...dto,
      organizationId: user.organizationId,
      userId: user.sub,
    });
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  list(@CurrentUser() user: JwtPayload | undefined): Promise<ChannelProfile[]> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.listChannelProfilesUseCase.execute(user.organizationId);
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  get(
    @Param('id') id: string,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ChannelProfile> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.getChannelProfileUseCase.execute(id, user.organizationId);
  }

  @Patch(':id')
  @HttpCode(HttpStatus.OK)
  update(
    @Param('id') id: string,
    @Body() dto: UpdateChannelProfileDto,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<ChannelProfile> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    return this.updateChannelProfileUseCase.execute(
      id,
      user.organizationId,
      dto,
    );
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param('id') id: string,
    @CurrentUser() user: JwtPayload | undefined,
  ): Promise<void> {
    if (!user) {
      throw new Error('User not authenticated');
    }

    await this.deleteChannelProfileUseCase.execute(id, user.organizationId);
  }
}
