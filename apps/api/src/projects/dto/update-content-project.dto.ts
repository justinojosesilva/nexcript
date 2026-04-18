import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { FormatType } from '@nexvideo/shared';

export class UpdateContentProjectDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsEnum(FormatType)
  @IsOptional()
  format?: FormatType;

  @IsInt()
  @IsOptional()
  durationMinutes?: number;
}
