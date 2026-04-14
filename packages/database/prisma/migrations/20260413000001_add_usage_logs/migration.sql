-- CreateTable
CREATE TABLE "usage_logs" (
    "id" TEXT NOT NULL,
    "organizationId" TEXT NOT NULL,
    "month" VARCHAR(7) NOT NULL,
    "scripts" INTEGER NOT NULL DEFAULT 0,
    "narrations" INTEGER NOT NULL DEFAULT 0,
    "exports" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usage_logs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usage_logs_organizationId_month_key" ON "usage_logs"("organizationId", "month");

-- CreateIndex
CREATE INDEX "usage_logs_organizationId_idx" ON "usage_logs"("organizationId");

-- CreateIndex
CREATE INDEX "usage_logs_month_idx" ON "usage_logs"("month");

-- AddForeignKey
ALTER TABLE "usage_logs" ADD CONSTRAINT "usage_logs_organizationId_fkey" FOREIGN KEY ("organizationId") REFERENCES "organizations"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
