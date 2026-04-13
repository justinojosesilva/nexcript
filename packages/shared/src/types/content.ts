import { NicheCategory, Platform } from "../enums/index.js";

/**
 * Bloco individual dentro de um roteiro de vídeo
 */
export interface ScriptBlock {
  /** ID único do bloco */
  id: string;

  /** Título/label do bloco (ex: "GANCHO", "PROMESSA") */
  label: string;

  /** Conteúdo textual do bloco */
  content: string;

  /** Tempo de início estimado no vídeo (em segundos) */
  startTime: number;

  /** Duração estimada do bloco (em segundos) */
  duration: number;

  /** Instruções especiais de narração/ênfase */
  notes?: string;

  /** Índice do bloco (ordem) */
  order: number;
}

/**
 * Variação de título para teste A/B ou múltiplas sugestões
 */
export interface TitleVariant {
  /** ID único da variante */
  id: string;

  /** Texto do título */
  title: string;

  /** Comprimento em caracteres */
  length: number;

  /** Gatilhos de copywriting utilizados */
  hooks: string[];

  /** Pontuação de potencial (0-100) */
  score: number;

  /** Observações sobre a variante */
  notes?: string;

  /** Se foi aprovada para uso */
  approved?: boolean;
}

/**
 * Metadados de um vídeo do YouTube
 */
export interface YouTubeVideo {
  /** ID do vídeo no YouTube */
  videoId: string;

  /** Título do vídeo */
  title: string;

  /** Descrição completa */
  description: string;

  /** Thumbnail URL */
  thumbnailUrl: string;

  /** URL do vídeo */
  url: string;

  /** Data de publicação */
  publishedAt: Date;

  /** Duração em segundos */
  duration: number;

  /** Número de views */
  views: number;

  /** Número de likes */
  likes: number;

  /** Número de comentários */
  comments: number;

  /** Taxa de cliques esperada (0-1) */
  ctr?: number;

  /** Categoria do vídeo */
  niche: NicheCategory;

  /** Plataforma principal */
  platform: Platform;

  /** Nicho do canal */
  channelNiche?: NicheCategory;
}

/**
 * Ponto de dado de tendência temporal
 */
export interface TrendsDataPoint {
  /** Data/período do ponto */
  timestamp: Date;

  /** Termo de tendência */
  term: string;

  /** Interesse relativo (0-100, onde 100 é pico) */
  interest: number;

  /** Região geográfica */
  region?: string;

  /** Categoria associada */
  niche?: NicheCategory;

  /** Dados adicionais de contexto */
  metadata?: Record<string, unknown>;
}

/**
 * Ativo de mídia (imagem ou vídeo) retornado por APIs de terceiros
 */
export interface MediaAsset {
  /** ID único do ativo */
  id: string;

  /** URL do ativo (download/acesso) */
  url: string;

  /** URL da miniatura/preview */
  thumbnailUrl: string;

  /** Provedor da mídia (pexels, pixabay, etc) */
  provider: 'pexels' | 'pixabay';

  /** Tipo de licença do ativo */
  license: 'free' | 'commercial';

  /** Tipo de mídia */
  type: 'image' | 'video';

  /** Duração em segundos (apenas para vídeos) */
  duration?: number;
}
