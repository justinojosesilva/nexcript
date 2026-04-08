import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CacheModule } from '../cache/cache.module';
import { YouTubeDataAdapter } from './implementations/youtube-data.adapter';
import { GoogleTrendsAdapter } from './implementations/google-trends.adapter';
import { OpenAIAdapter } from './implementations/openai.adapter';
import { ElevenLabsTtsAdapter } from './implementations/elevenlabs-tts.adapter';
import { OpenAITtsAdapter } from './implementations/openai-tts.adapter';
import { FallbackTtsAdapter } from './implementations/fallback-tts.adapter';
import { MemoryStorageAdapter } from './implementations/memory-storage.adapter';

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
    {
      provide: 'IStoragePort',
      useClass: MemoryStorageAdapter,
    },
    ElevenLabsTtsAdapter,
    OpenAITtsAdapter,
    {
      provide: 'ITtsPort',
      useClass: FallbackTtsAdapter,
    },
  ],
  exports: [
    'IYouTubePort',
    'ITrendsPort',
    'IOpenAIPort',
    'IStoragePort',
    'ITtsPort',
  ],
})
export class AdaptersModule {}
