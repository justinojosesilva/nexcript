import { Injectable, Logger, Inject } from '@nestjs/common';
import { ICachePort } from '../../cache/interfaces/cache.port';
import {
  ITtsPort,
  SynthesizeInput,
  SynthesizeOutput,
} from '../../adapters/interfaces/tts.port';

interface TtsCacheEntry {
  audioUrl: string;
  durationSec: number;
  provider: string;
  estimatedCostBrl?: number;
}

@Injectable()
export class CacheTtsSynthesisUseCase {
  private readonly logger = new Logger(CacheTtsSynthesisUseCase.name);
  private readonly ttlSeconds = 48 * 60 * 60; // 48 hours

  constructor(
    @Inject('ICachePort')
    private readonly cachePort: ICachePort,
  ) {}

  /**
   * Generate cache key based on synthesis parameters
   * Format: tts:scriptId:voiceId:speed:tone
   */
  private generateCacheKey(
    scriptId: string,
    voiceId: string,
    speed: number = 1.0,
    tone?: string,
  ): string {
    const normalizedSpeed = speed.toFixed(2);
    const normalizedTone = tone || 'neutral';
    return `tts:${scriptId}:${voiceId}:${normalizedSpeed}:${normalizedTone}`;
  }

  /**
   * Try to get synthesis result from cache, otherwise synthesize and cache
   */
  async synthesizeWithCache(
    input: SynthesizeInput & { scriptId: string },
    ttsPort: ITtsPort,
  ): Promise<{ output: SynthesizeOutput; cacheHit: boolean }> {
    const cacheKey = this.generateCacheKey(
      input.scriptId,
      input.voiceId,
      input.speed,
      input.tone,
    );

    // Try to get from cache first
    const cachedResult = await this.cachePort.get<TtsCacheEntry>(cacheKey);

    if (cachedResult) {
      this.logger.debug(`TTS cache hit for key ${cacheKey}`);
      this.logCacheHit(input, true);

      return {
        output: {
          audioUrl: cachedResult.audioUrl,
          durationSec: cachedResult.durationSec,
          provider: cachedResult.provider,
          estimatedCostBrl: cachedResult.estimatedCostBrl,
        },
        cacheHit: true,
      };
    }

    // Cache miss - synthesize
    this.logger.debug(`TTS cache miss for key ${cacheKey}, synthesizing...`);
    const synthesisResult = await ttsPort.synthesize(input);

    // Cache the result (TTL: 48h)
    const cacheEntry: TtsCacheEntry = {
      audioUrl: synthesisResult.audioUrl,
      durationSec: synthesisResult.durationSec,
      provider: synthesisResult.provider,
      estimatedCostBrl: synthesisResult.estimatedCostBrl,
    };

    await this.cachePort.set(cacheKey, cacheEntry, this.ttlSeconds);
    this.logCacheHit(input, false);

    return {
      output: synthesisResult,
      cacheHit: false,
    };
  }

  /**
   * Invalidate TTS cache for a script
   */
  async invalidateCacheByScriptId(scriptId: string): Promise<void> {
    const pattern = `tts:${scriptId}:*`;
    await this.cachePort.invalidateByPrefix(pattern);

    this.logger.log({
      event: 'tts_cache_invalidated',
      scriptId,
      pattern,
      timestamp: new Date().toISOString(),
    });
  }

  /**
   * Log cache hit/miss for monitoring
   */
  private logCacheHit(
    input: SynthesizeInput & { scriptId: string },
    hit: boolean,
  ): void {
    this.logger.log({
      event: 'tts_synthesis',
      scriptId: input.scriptId,
      voiceId: input.voiceId,
      speed: input.speed,
      tone: input.tone,
      cacheHit: hit,
      timestamp: new Date().toISOString(),
    });
  }
}
