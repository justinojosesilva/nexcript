-- CreateEnum
CREATE TYPE "ScriptStatus" AS ENUM ('draft', 'reviewing', 'approved', 'published');

-- DropForeignKey
ALTER TABLE "scripts" DROP CONSTRAINT "scripts_organizationId_fkey";

-- DropForeignKey
ALTER TABLE "narrations" DROP CONSTRAINT "narrations_organizationId_fkey";

-- DropIndex
DROP INDEX "scripts_organizationId_idx";

-- DropIndex
DROP INDEX "narrations_organizationId_idx";

-- AlterTable
ALTER TABLE "scripts" DROP COLUMN "organizationId",
DROP COLUMN "version",
DROP COLUMN "estimatedDurationSecs",
ADD COLUMN "trendAnalysisId" TEXT,
ADD COLUMN "status" "ScriptStatus" NOT NULL DEFAULT 'draft',
ADD COLUMN "formatType" "FormatType" NOT NULL DEFAULT 'long_form',
ADD COLUMN "estimatedDurationSec" INTEGER,
ADD COLUMN "originalityScore" DOUBLE PRECISION,
ADD COLUMN "estimatedCostBrl" DOUBLE PRECISION;

-- AlterTable
ALTER TABLE "narrations" DROP COLUMN "organizationId",
DROP COLUMN "durationSecs",
ADD COLUMN "tone" "ContentTone",
ADD COLUMN "speed" DOUBLE PRECISION DEFAULT 1.0,
ADD COLUMN "durationSec" DOUBLE PRECISION;
