import { type ScriptBlock } from '@nexcript/shared';
import { IsOptional, IsArray, IsString, IsNumber } from 'class-validator';

export class UpdateScriptDto {
  @IsOptional()
  @IsArray()
  blocks?: ScriptBlock[];

  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsNumber()
  wordCount?: number;

  @IsOptional()
  @IsNumber()
  estimatedDurationSec?: number;
}
