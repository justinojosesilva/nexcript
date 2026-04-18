import { Global, Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Queue } from 'bullmq';
import Redis from 'ioredis';

export const JOBS_QUEUE_TOKEN = 'JOBS_QUEUE';
export const REDIS_CONNECTION_TOKEN = 'REDIS_CONNECTION';

@Global()
@Module({
  providers: [
    {
      provide: REDIS_CONNECTION_TOKEN,
      useFactory: (configService: ConfigService) => {
        const redisUrl = configService.get<string>('REDIS_URL')!;
        return new Redis(redisUrl, {
          maxRetriesPerRequest: null,
          retryStrategy: (times) => {
            const delay = Math.min(times * 50, 2000);
            return delay;
          },
          reconnectOnError: (err) => {
            const targetError = 'READONLY';
            if (err.message.includes(targetError)) {
              return true;
            }
            return false;
          },
        });
      },
      inject: [ConfigService],
    },
    {
      provide: JOBS_QUEUE_TOKEN,
      useFactory: (redisConnection: Redis) => {
        return new Queue('nexvideo-jobs', {
          connection: redisConnection,
          defaultJobOptions: {
            attempts: 3,
            backoff: {
              type: 'exponential',
              delay: 2000,
            },
          },
        });
      },
      inject: [REDIS_CONNECTION_TOKEN],
    },
  ],
  exports: [JOBS_QUEUE_TOKEN, REDIS_CONNECTION_TOKEN],
})
export class BullmqModule {}
