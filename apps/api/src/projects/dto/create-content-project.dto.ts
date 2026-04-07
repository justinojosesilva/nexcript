import {
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';
import { FormatType, NicheCategory } from '@nexcript/shared';

export class CreateContentProjectDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  keyword: string;

  @IsEnum(NicheCategory)
  niche: NicheCategory;

  @IsEnum(FormatType)
  format: FormatType;

  @IsString()
  @IsNotEmpty()
  channelProfileId: string;

  @IsInt()
  @IsOptional()
  durationMinutes?: number;
}
