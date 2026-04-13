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
import { PexelsAdapter } from './implementations/pexels.adapter';
import { PixabayAdapter } from './implementations/pixabay.adapter';
import { MediaAdapter } from './implementations/media.adapter';

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
    {
      provide: 'IPexelsPort',
      useClass: PexelsAdapter,
    },
    {
      provide: 'IPixabayPort',
      useClass: PixabayAdapter,
    },
    {
      provide: 'MediaAdapter',
      useClass: MediaAdapter,
    },
  ],
  exports: [
    'IYouTubePort',
    'ITrendsPort',
    'IOpenAIPort',
    'IStoragePort',
    'ITtsPort',
    'IPexelsPort',
    'IPixabayPort',
    'MediaAdapter',
  ],
})
export class AdaptersModule {}
