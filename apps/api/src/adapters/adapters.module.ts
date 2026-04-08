import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '../cache/cache.module';
import { YouTubeDataAdapter } from './implementations/youtube-data.adapter';
import { GoogleTrendsAdapter } from './implementations/google-trends.adapter';
import { OpenAIAdapter } from './implementations/openai.adapter';

@Module({
  imports: [ConfigModule, CacheModule],
  providers: [
    {
      provide: 'IYouTubePort',
      useClass: YouTubeDataAdapter,
    },
    {
      provide: 'ITrendsPort',
      useClass: GoogleTrendsAdapter,
    },
    {
      provide: 'IOpenAIPort',
      useClass: OpenAIAdapter,
    },
  ],
  exports: ['IYouTubePort', 'ITrendsPort', 'IOpenAIPort'],
})
export class AdaptersModule {}
