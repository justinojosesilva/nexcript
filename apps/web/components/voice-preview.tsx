'use client';

import { useRef, useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, AlertCircle, Loader } from 'lucide-react';

interface VoicePreviewProps {
  narration: {
    id: string;
    provider: 'google' | 'microsoft' | 'eleven_labs' | 'amazon' | 'openai';
    audioUrl?: string;
    durationSec?: number;
    status: 'pending' | 'processing' | 'completed' | 'failed' | 'cancelled';
  };
  onRetry?: () => void;
}

// Provider display names and colors
const PROVIDER_CONFIG = {
  eleven_labs: {
    label: 'ElevenLabs',
    color: 'text-blue-300',
    bgColor: 'bg-blue-500/20',
  },
  openai: {
    label: 'OpenAI TTS',
    color: 'text-green-300',
    bgColor: 'bg-green-500/20',
  },
  google: {
    label: 'Google TTS',
    color: 'text-red-300',
    bgColor: 'bg-red-500/20',
  },
  microsoft: {
    label: 'Microsoft TTS',
    color: 'text-purple-300',
    bgColor: 'bg-purple-500/20',
  },
  amazon: {
    label: 'Amazon Polly',
    color: 'text-orange-300',
    bgColor: 'bg-orange-500/20',
  },
} as const;

function getProviderConfig(
  provider: VoicePreviewProps['narration']['provider'],
) {
  return PROVIDER_CONFIG[provider] || PROVIDER_CONFIG.google;
}

// Format time as mm:ss
function formatTime(seconds: number | undefined): string {
  if (!seconds || isNaN(seconds)) return '0:00';
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${String(secs).padStart(2, '0')}`;
}

export function VoicePreview({ narration, onRetry }: VoicePreviewProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const providerConfig = getProviderConfig(narration.provider);

  // Update duration when metadata is loaded
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration || narration.durationSec || 0);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    // Set duration from narration data if available
    if (narration.durationSec) {
      setDuration(narration.durationSec);
    }

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [narration.durationSec]);

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    const newTime = percent * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleRetry = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
    onRetry?.();
  };

  // Loading state
  if (narration.status === 'processing' || narration.status === 'pending') {
    return (
      <div className="rounded-lg border border-outline-variant bg-surface-container p-6">
        <div className="flex items-center gap-3">
          <Loader className="h-5 w-5 animate-spin text-primary" />
          <div>
            <p className="text-sm font-medium text-on-surface">
              Gerando narração...
            </p>
            <p className="text-xs text-on-surface-variant">
              Aguarde enquanto o áudio está sendo processado
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (narration.status === 'failed') {
    return (
      <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-6">
        <div className="flex items-start gap-3">
          <AlertCircle className="h-5 w-5 flex-shrink-0 text-red-400 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-red-300">
              Erro ao gerar narração
            </p>
            <p className="text-xs text-red-200/70 mt-1">
              Ocorreu um problema durante a geração do áudio. Tente novamente.
            </p>
            <button
              onClick={handleRetry}
              className="mt-3 inline-flex items-center gap-2 rounded-lg bg-red-500/20 px-3 py-1.5 text-xs font-medium text-red-300 transition-colors hover:bg-red-500/30"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Tentar Novamente
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Completed state - show player
  if (narration.status === 'completed' && narration.audioUrl) {
    const progressPercent = duration ? (currentTime / duration) * 100 : 0;

    return (
      <div className="space-y-4 rounded-lg border border-outline-variant bg-surface-container p-6">
        {/* Header with provider badge */}
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-on-surface">
            Preview de Narração
          </h3>
          <span
            className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${providerConfig.color} ${providerConfig.bgColor}`}
          >
            {providerConfig.label}
          </span>
        </div>

        {/* Audio element (hidden) */}
        <audio
          ref={audioRef}
          src={narration.audioUrl}
          crossOrigin="anonymous"
        />

        {/* Player controls */}
        <div className="space-y-3">
          {/* Play/Pause button and time display */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayPause}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-on-primary transition-all hover:shadow-lg hover:shadow-primary/30 active:scale-95"
              aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="h-5 w-5 translate-x-0.5 fill-current" />
              )}
            </button>

            {/* Time display */}
            <div className="text-xs font-medium text-on-surface-variant">
              {formatTime(currentTime)} / {formatTime(duration)}
            </div>
          </div>

          {/* Progress bar */}
          <div
            onClick={handleProgressClick}
            className="group cursor-pointer rounded-full bg-surface-container-low p-1"
          >
            <div className="relative h-1 w-full overflow-hidden rounded-full bg-on-surface-variant/20">
              {/* Filled portion */}
              <div
                className="absolute left-0 top-0 h-full bg-primary transition-all"
                style={{ width: `${progressPercent}%` }}
              />

              {/* Playhead */}
              <div
                className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-primary shadow-lg transition-all opacity-0 group-hover:opacity-100"
                style={{ left: `${progressPercent}%`, transform: 'translate(-50%, -50%)' }}
              />
            </div>
          </div>
        </div>

        {/* Duration info */}
        {narration.durationSec && (
          <div className="rounded-lg bg-surface-container-low p-3">
            <p className="text-xs text-on-surface-variant">
              <span className="font-medium text-on-surface">Duração:</span>{' '}
              {formatTime(narration.durationSec)}
            </p>
          </div>
        )}
      </div>
    );
  }

  // Default state (cancelled or unknown)
  return (
    <div className="rounded-lg border border-outline-variant bg-surface-container p-6">
      <p className="text-sm text-on-surface-variant">
        Narração não disponível
      </p>
    </div>
  );
}
