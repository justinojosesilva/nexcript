import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateExportDto {
  @ApiProperty({ description: 'ID do projeto a ser exportado' })
  @IsString()
  projectId: string;
}
