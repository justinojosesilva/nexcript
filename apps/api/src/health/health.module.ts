import { Module } from '@nestjs/common';
import { HealthService } from './health.service';
import { HealthController } from './health.controller';
import { CacheModule } from '../cache/cache.module';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [CacheModule, PrismaModule],
  controllers: [HealthController],
  providers: [HealthService],
  exports: [HealthService],
})
export class HealthModule {}
