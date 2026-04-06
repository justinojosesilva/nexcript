-- CreateEnum
CREATE TYPE "NicheCategory" AS ENUM ('finance', 'technology', 'productivity', 'lifestyle', 'education', 'entertainment', 'business', 'health', 'personal_development', 'other');

-- CreateEnum
CREATE TYPE "FormatType" AS ENUM ('long_form', 'medium_form', 'short_form', 'carousel', 'podcast');

-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('youtube', 'youtube_shorts', 'tiktok', 'instagram_reels', 'instagram', 'linkedin', 'podcast');

-- CreateEnum
CREATE TYPE "ContentTone" AS ENUM ('formal', 'casual', 'funny', 'serious', 'inspirational', 'educational', 'dark_comedy', 'sarcastic');

-- CreateEnum
CREATE TYPE "NarrationStyle" AS ENUM ('professional', 'conversational', 'energetic', 'calm', 'dramatic', 'friendly');

-- CreateEnum
CREATE TYPE "ProjectStatus" AS ENUM ('planning', 'in_development', 'in_review', 'active', 'paused', 'archived');

-- CreateEnum
CREATE TYPE "JobStatus" AS ENUM ('pending', 'processing', 'completed', 'failed', 'cancelled');

-- CreateEnum
CREATE TYPE "TtsProvider" AS ENUM ('google', 'microsoft', 'eleven_labs', 'amazon', 'openai', 'local');

-- CreateEnum
CREATE TYPE "AssetType" AS ENUM ('script', 'title', 'thumbnail', 'description', 'narration', 'video', 'thumbnail_image', 'metadata');

-- CreateEnum
CREATE TYPE "RpmTier" AS ENUM ('tier_0', 'tier_1', 'tier_2', 'tier_3', 'tier_4');

-- CreateEnum
CREATE TYPE "Plan" AS ENUM ('free', 'starter', 'professional', 'enterprise');

-- CreateEnum
CREATE TYPE "Role" AS ENUM ('admin', 'manager', 'creator', 'viewer');

-- CreateTable
CREATE TABLE "organizations" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "plan" "Plan" NOT NULL DEFAULT 'free',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "organizations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'creator',
    "passwordHash" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "channel_profiles" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "niche" "NicheCategory" NOT NULL,
    "tone" "ContentTone" NOT NULL,
    "narrationStyle" "NarrationStyle" NOT NULL,
    "languageCode" TEXT NOT NULL DEFAULT 'pt-BR',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "channel_profiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "content_projects" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "channelProfileId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "niche" "NicheCategory" NOT NULL,
    "format" "FormatType" NOT NULL,
    "status" "ProjectStatus" NOT NULL DEFAULT 'planning',
    "durationMinutes" INTEGER,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "content_projects_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "trend_analyses" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "keyword" TEXT NOT NULL,
    "data" JSONB NOT NULL,
    "analyzedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "trend_analyses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "scripts" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "blocks" JSONB NOT NULL,
    "wordCount" INTEGER,
    "estimatedDurationSecs" INTEGER,
    "version" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "scripts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "narrations" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "scriptId" TEXT NOT NULL,
    "provider" "TtsProvider" NOT NULL,
    "voiceId" TEXT,
    "audioUrl" TEXT,
    "durationSecs" DOUBLE PRECISION,
    "status" "JobStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "narrations_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "media_suggestions" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "type" "AssetType" NOT NULL,
    "prompt" TEXT,
    "url" TEXT,
    "metadata" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "media_suggestions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "publication_metadata" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "title" TEXT,
    "description" TEXT,
    "tags" TEXT[],
    "thumbnailUrl" TEXT,
    "platform" "Platform" NOT NULL,
    "scheduledAt" TIMESTAMP(3),
    "publishedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "publication_metadata_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "export_jobs" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "projectId" TEXT NOT NULL,
    "assetType" "AssetType" NOT NULL,
    "status" "JobStatus" NOT NULL DEFAULT 'pending',
    "outputUrl" TEXT,
    "errorMessage" TEXT,
    "startedAt" TIMESTAMP(3),
    "completedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "export_jobs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "organizations_slug_key" ON "organizations"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE INDEX "users_organizationId_idx" ON "users"("organizationId");

-- CreateIndex
CREATE INDEX "channel_profiles_organizationId_idx" ON "channel_profiles"("organizationId");

-- CreateIndex
CREATE INDEX "content_projects_organizationId_idx" ON "content_projects"("organizationId");

-- CreateIndex
CREATE INDEX "content_projects_keyword_idx" ON "content_projects"("keyword");

-- CreateIndex
CREATE INDEX "trend_analyses_organizationId_idx" ON "trend_analyses"("organizationId");

-- CreateIndex
CREATE INDEX "trend_analyses_projectId_idx" ON "trend_analyses"("projectId");

-- CreateIndex
CREATE INDEX "trend_analyses_keyword_idx" ON "trend_analyses"("keyword");

-- CreateIndex
CREATE INDEX "scripts_organizationId_idx" ON "scripts"("organizationId");

-- CreateIndex
CREATE INDEX "scripts_projectId_idx" ON "scripts"("projectId");

-- CreateIndex
CREATE INDEX "narrations_organizationId_idx" ON "narrations"("organizationId");

-- CreateIndex
CREATE INDEX "narrations_scriptId_idx" ON "narrations"("scriptId");

-- CreateIndex
CREATE INDEX "media_suggestions_organizationId_idx" ON "media_suggestions"("organizationId");

-- CreateIndex
CREATE INDEX "media_suggestions_projectId_idx" ON "media_suggestions"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "publication_metadata_projectId_key" ON "publication_metadata"("projectId");

-- CreateIndex
CREATE INDEX "publication_metadata_organizationId_idx" ON "publication_metadata"("organizationId");

-- CreateIndex
CREATE INDEX "export_jobs_organizationId_idx" ON "export_jobs"("organizationId");

-- CreateIndex
CREATE INDEX "export_jobs_projectId_idx" ON "export_jobs"("projectId");

-- AddForeignKey
ALTER TABLE "users" ADD CONSTRAINT "users_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel_profiles" ADD CONSTRAINT "channel_profiles_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "channel_profiles" ADD CONSTRAINT "channel_profiles_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_projects" ADD CONSTRAINT "content_projects_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "content_projects" ADD CONSTRAINT "content_projects_channelProfileId_fkey" FOREIGN KEY ("channelProfileId") REFERENCES "channel_profiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trend_analyses" ADD CONSTRAINT "trend_analyses_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "trend_analyses" ADD CONSTRAINT "trend_analyses_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "content_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scripts" ADD CONSTRAINT "scripts_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "scripts" ADD CONSTRAINT "scripts_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "content_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "narrations" ADD CONSTRAINT "narrations_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "narrations" ADD CONSTRAINT "narrations_scriptId_fkey" FOREIGN KEY ("scriptId") REFERENCES "scripts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_suggestions" ADD CONSTRAINT "media_suggestions_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "media_suggestions" ADD CONSTRAINT "media_suggestions_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "content_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publication_metadata" ADD CONSTRAINT "publication_metadata_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "publication_metadata" ADD CONSTRAINT "publication_metadata_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "content_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "export_jobs" ADD CONSTRAINT "export_jobs_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "export_jobs" ADD CONSTRAINT "export_jobs_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "content_projects"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
