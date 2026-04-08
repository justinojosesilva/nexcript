import { IsString, IsEnum } from 'class-validator';
import { NicheCategory } from '@nexcript/shared';

export class AnalyzeTrendsRequest {
  @IsString()
  projectId: string;

  @IsString()
  keyword: string;

  @IsString()
  geo: string;

  @IsEnum(NicheCategory)
  niche: NicheCategory;
}
