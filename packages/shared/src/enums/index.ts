// Content & Format
export enum NicheCategory {
  FINANCE = 'finance',
  TECHNOLOGY = 'technology',
  PRODUCTIVITY = 'productivity',
  LIFESTYLE = 'lifestyle',
  EDUCATION = 'education',
  ENTERTAINMENT = 'entertainment',
  BUSINESS = 'business',
  HEALTH = 'health',
  PERSONAL_DEVELOPMENT = 'personal_development',
  OTHER = 'other',
}

export enum FormatType {
  LONG_FORM = 'long_form', // 10+ minutos
  MEDIUM_FORM = 'medium_form', // 5-10 minutos
  SHORT_FORM = 'short_form', // <1 minuto (Shorts/TikTok)
  CAROUSEL = 'carousel', // Instagram Carousel
  PODCAST = 'podcast',
}

export enum Platform {
  YOUTUBE = 'youtube',
  YOUTUBE_SHORTS = 'youtube_shorts',
  TIKTOK = 'tiktok',
  INSTAGRAM_REELS = 'instagram_reels',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin',
  PODCAST = 'podcast',
}

export enum ContentTone {
  FORMAL = 'formal',
  CASUAL = 'casual',
  FUNNY = 'funny',
  SERIOUS = 'serious',
  INSPIRATIONAL = 'inspirational',
  EDUCATIONAL = 'educational',
  DARK_COMEDY = 'dark_comedy',
  SARCASTIC = 'sarcastic',
}

export enum NarrationStyle {
  PROFESSIONAL = 'professional',
  CONVERSATIONAL = 'conversational',
  ENERGETIC = 'energetic',
  CALM = 'calm',
  DRAMATIC = 'dramatic',
  FRIENDLY = 'friendly',
}

// Project & Job Management
export enum ProjectStatus {
  PLANNING = 'planning',
  IN_DEVELOPMENT = 'in_development',
  IN_REVIEW = 'in_review',
  ACTIVE = 'active',
  PAUSED = 'paused',
  ARCHIVED = 'archived',
}

export enum JobStatus {
  PENDING = 'pending',
  PROCESSING = 'processing',
  COMPLETED = 'completed',
  FAILED = 'failed',
  CANCELLED = 'cancelled',
}

// Scoring & Assessment
export enum Recommendation {
  HIGHLY_RECOMMENDED = 'highly_recommended',
  RECOMMENDED = 'recommended',
  NEUTRAL = 'neutral',
  NOT_RECOMMENDED = 'not_recommended',
  REJECTED = 'rejected',
}

// Text-to-Speech
export enum TtsProvider {
  GOOGLE = 'google',
  MICROSOFT = 'microsoft',
  ELEVEN_LABS = 'eleven_labs',
  AMAZON = 'amazon',
  OPENAI = 'openai',
  LOCAL = 'local',
}

// Content Assets
export enum AssetType {
  SCRIPT = 'script',
  TITLE = 'title',
  THUMBNAIL = 'thumbnail',
  DESCRIPTION = 'description',
  NARRATION = 'narration',
  VIDEO = 'video',
  THUMBNAIL_IMAGE = 'thumbnail_image',
  METADATA = 'metadata',
}

// Monetization & Billing
export enum RpmTier {
  TIER_0 = 'tier_0', // $0-2
  TIER_1 = 'tier_1', // $2-5
  TIER_2 = 'tier_2', // $5-10
  TIER_3 = 'tier_3', // $10-20
  TIER_4 = 'tier_4', // $20+
}

export enum Plan {
  FREE = 'free',
  STARTER = 'starter',
  PROFESSIONAL = 'professional',
  ENTERPRISE = 'enterprise',
}

// User Management
export enum Role {
  ADMIN = 'admin',
  MANAGER = 'manager',
  CREATOR = 'creator',
  VIEWER = 'viewer',
}
