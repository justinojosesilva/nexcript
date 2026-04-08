import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import Redis from 'ioredis';
import { RedisCacheAdapter } from './adapters/redis-cache.adapter';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'REDIS_INSTANCE',
      useFactory: (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL');
        if (!redisUrl) {
          // Fallback to localhost:6379 if REDIS_URL is not set
          return new Redis({
            host: 'localhost',
            port: 6379,
          });
        }
        return new Redis(redisUrl);
      },
      inject: [ConfigService],
    },
    {
      provide: 'ICachePort',
      useClass: RedisCacheAdapter,
    },
  ],
  exports: ['ICachePort', 'REDIS_INSTANCE'],
})
export class CacheModule {}
