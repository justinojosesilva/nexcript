import { FormatType, NicheCategory, ContentTone } from '@nexcript/shared';
import { IsString, IsEnum, IsOptional } from 'class-validator';

export class GenerateScriptDto {
  @IsString()
  projectId?: string;

  @IsString()
  @IsOptional()
  organizationId?: string;

  @IsString()
  @IsOptional()
  trendAnalysisId?: string;

  @IsEnum(FormatType)
  formatType: FormatType;

  @IsEnum(NicheCategory)
  niche: NicheCategory;

  @IsEnum(ContentTone)
  @IsOptional()
  tone?: ContentTone;
}
