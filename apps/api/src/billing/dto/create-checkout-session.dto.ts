import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCheckoutSessionDto {
  @ApiProperty({
    description: 'Plan slug to subscribe to (e.g. starter, creator, professional, enterprise)',
    example: 'starter',
  })
  @IsString()
  @IsNotEmpty()
  planSlug: string;
}
