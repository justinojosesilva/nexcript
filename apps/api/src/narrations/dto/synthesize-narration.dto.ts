import {
  IsString,
  IsNumber,
  IsEnum,
  IsOptional,
  IsArray,
} from 'class-validator';
import { ContentTone } from '@nexcript/shared';
import { ApiProperty } from '@nestjs/swagger';

export class ScriptBlockInput {
  @ApiProperty({
    description: 'Block ID',
    example: '550e8400-e29b-41d4-a716-446655440000',
  })
  @IsString()
  id: string;

  @ApiProperty({
    description: 'Block type',
    example: 'HOOK',
  })
  @IsString()
  type: string;

  @ApiProperty({
    description: 'Block content text',
    example: 'Hey, did you know that most people waste hours on tasks...',
  })
  @IsString()
  content: string;
}

export class SynthesizeNarrationDto {
  @ApiProperty({
    description: 'Script blocks to narrate',
    example: [{ id: '1', type: 'HOOK', content: 'Hey...' }],
  })
  @IsArray()
  scriptBlocks: ScriptBlockInput[];

  @ApiProperty({
    description: 'Voice tone',
    enum: ContentTone,
    example: ContentTone.CASUAL,
  })
  @IsEnum(ContentTone)
  tone: ContentTone;

  @ApiProperty({
    description: 'Voice ID to use',
    example: 'en-US-Neural2-C',
  })
  @IsString()
  voiceId: string;

  @ApiProperty({
    description: 'Speech speed (0.5 to 2.0)',
    example: 1.0,
    required: false,
  })
  @IsNumber()
  @IsOptional()
  speed?: number;
}
