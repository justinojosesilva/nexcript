import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import {
  ContentTone,
  NarrationStyle,
  NicheCategory,
  Platform,
} from '@nexvideo/shared';

export class CreateChannelProfileDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(Platform)
  platform: Platform;

  @IsEnum(NicheCategory)
  niche: NicheCategory;

  @IsEnum(ContentTone)
  tone: ContentTone;

  @IsEnum(NarrationStyle)
  narrationStyle: NarrationStyle;

  @IsString()
  @IsOptional()
  languageCode?: string;
}
