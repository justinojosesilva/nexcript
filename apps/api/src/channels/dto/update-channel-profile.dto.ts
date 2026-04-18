import { IsEnum, IsOptional, IsString } from 'class-validator';
import {
  ContentTone,
  NarrationStyle,
  NicheCategory,
  Platform,
} from '@nexvideo/shared';

export class UpdateChannelProfileDto {
  @IsString()
  @IsOptional()
  name?: string;

  @IsEnum(Platform)
  @IsOptional()
  platform?: Platform;

  @IsEnum(NicheCategory)
  @IsOptional()
  niche?: NicheCategory;

  @IsEnum(ContentTone)
  @IsOptional()
  tone?: ContentTone;

  @IsEnum(NarrationStyle)
  @IsOptional()
  narrationStyle?: NarrationStyle;

  @IsString()
  @IsOptional()
  languageCode?: string;
}
