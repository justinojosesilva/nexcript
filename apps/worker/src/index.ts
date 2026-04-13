import { Queue, Worker, Job } from "bullmq";
import Redis from "ioredis";
import axios from "axios";
import { prisma } from "@nexcript/database";

const REDIS_URL = process.env.REDIS_URL || "redis://localhost:6379";
const QUEUE_NAME = "nexcript-jobs";
const API_URL = process.env.API_URL || "http://localhost:3002";

const redisConnection = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

const jobsQueue = new Queue(QUEUE_NAME, {
  connection: redisConnection,
  defaultJobOptions: {
    attempts: 3,
    backoff: {
      type: "exponential",
      delay: 2000,
    },
    removeOnComplete: false,
  },
});

// Special handling for narration jobs with different retry policy
const narrationJobOptions = {
  attempts: 2, // Only 2 retries for narration
  backoff: {
    type: "exponential" as const,
    delay: 2000,
  },
  removeOnComplete: false,
};

// Job processor for health-check jobs
async function processHealthCheckJob(job: Job): Promise<{ status: string }> {
  console.log(`[Worker] Processing health-check job: ${job.id}`);

  // Update progress - health-check doesn't have a database entity
  await job.updateProgress(50);

  // Simulate work
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Update progress to completion
  await job.updateProgress(100);

  console.log(`[Worker] Completed health-check job: ${job.id}`);
  return { status: "completed" };
}

// Job processor for analyze-trends jobs
async function processAnalyzeTrendsJob(job: Job): Promise<unknown> {
  console.log(`[Worker] Processing analyze-trends job: ${job.id}`);

  const jobData = job.data as Record<string, unknown>;
  const { projectId, organizationId, keyword, geo, niche } = jobData;

  try {
    // Call the internal API endpoint to execute the analysis
    await job.updateProgress(10);

    const response = await axios.post(`${API_URL}/trends/internal/execute`, {
      projectId,
      organizationId,
      keyword,
      geo,
      niche,
    });

    await job.updateProgress(90);

    console.log(`[Worker] Completed analyze-trends job: ${job.id}`);
    await job.updateProgress(100);

    return response.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(
      `[Worker] Error calling trends API for job ${job.id}:`,
      errorMessage,
    );
    throw error;
  }
}

// Job processor for generate-script jobs
async function processGenerateScriptJob(job: Job): Promise<unknown> {
  console.log(`[Worker] Processing generate-script job: ${job.id}`);

  const jobData = job.data as Record<string, unknown>;
  const { projectId, organizationId, trendAnalysisId, formatType, tone } =
    jobData;

  try {
    // Update progress: starting
    await job.updateProgress(20);

    // Fetch current prompt version for logging
    let promptVersion = "unknown";
    try {
      const versionsResponse = await axios.get(`${API_URL}/prompts/versions`);
      promptVersion = versionsResponse.data?.scripts || "unknown";
    } catch {
      // Silently fail if versions endpoint is not available
    }

    // Call the internal API endpoint to generate script
    const response = await axios.post(`${API_URL}/scripts/internal/generate`, {
      projectId,
      organizationId,
      trendAnalysisId,
      formatType,
      tone,
    });

    await job.updateProgress(80);

    // Extract cost information from response
    const { script } = response.data;
    if (script?.estimatedCostBrl) {
      console.log(
        `[Worker] Script generated with estimated cost: R$ ${script.estimatedCostBrl.toFixed(2)}, prompt version: ${promptVersion}`,
      );
    }

    await job.updateProgress(100);

    console.log(`[Worker] Completed generate-script job: ${job.id}`);
    return response.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(
      `[Worker] Error calling script generation API for job ${job.id}:`,
      errorMessage,
    );
    throw error;
  }
}

// Job processor for narration jobs
async function processNarrationJob(job: Job): Promise<unknown> {
  console.log(`[Worker] Processing narration job: ${job.id}`);

  const jobData = job.data as Record<string, unknown>;
  const { narrationId, organizationId, scriptBlocks, tone, voiceId, speed } =
    jobData;

  try {
    // Update progress: starting
    await job.updateProgress(20);

    // Fetch current prompt version for logging
    let promptVersion = "unknown";
    try {
      const versionsResponse = await axios.get(`${API_URL}/prompts/versions`);
      promptVersion = versionsResponse.data?.narration || "unknown";
    } catch {
      // Silently fail if versions endpoint is not available
    }

    // Call the internal API endpoint to synthesize narration
    const response = await axios.post(
      `${API_URL}/narrations/internal/synthesize`,
      {
        organizationId,
        narrationId,
        scriptBlocks,
        tone,
        voiceId,
        speed: speed || 1.0,
      },
    );

    await job.updateProgress(80);

    // Extract cost information from response
    const { estimatedCostBrl, durationSec } = response.data;
    if (estimatedCostBrl) {
      console.log(
        `[Worker] Narration synthesized with estimated cost: R$ ${estimatedCostBrl.toFixed(2)}, duration: ${durationSec}s, prompt version: ${promptVersion}`,
      );
    }

    await job.updateProgress(100);

    console.log(`[Worker] Completed narration job: ${job.id}`);
    return response.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(
      `[Worker] Error calling narration API for job ${job.id}:`,
      errorMessage,
    );
    throw error;
  }
}

// Job processor for export jobs
async function processExportJob(job: Job): Promise<unknown> {
  console.log(`[Worker] Processing export job: ${job.id}`);

  const jobData = job.data as Record<string, unknown>;
  const { exportJobId, projectId, scriptId, narrationId, organizationId } =
    jobData;

  try {
    await job.updateProgress(10);

    const response = await axios.post(`${API_URL}/export/internal/process`, {
      exportJobId,
      projectId,
      scriptId,
      narrationId,
      organizationId,
    });

    await job.updateProgress(90);

    // Log export details: ZIP size and URL
    const { exportUrl, zipSize } = response.data as Record<string, unknown>;
    if (zipSize && typeof zipSize === "number") {
      const zipSizeKb = (zipSize / 1024).toFixed(2);
      console.log(
        `[Worker] Export job ${job.id} completed - ZIP size: ${zipSizeKb}KB, URL: ${exportUrl}`,
      );
    } else {
      console.log(`[Worker] Export job ${job.id} completed - URL: ${exportUrl}`);
    }

    await job.updateProgress(100);

    return response.data;
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(
      `[Worker] Error processing export job ${job.id}:`,
      errorMessage,
    );
    throw error;
  }
}

// Update job status in database for jobs with entity references
async function updateJobStatusInDatabase(
  job: Job,
  status: "processing" | "completed" | "failed",
  errorMessage?: string,
): Promise<void> {
  const jobData = job.data as Record<string, unknown>;

  // If job has a projectId and trendAnalysisId, handle script generation
  if (
    jobData.projectId &&
    jobData.trendAnalysisId &&
    job.name === "generate-script"
  ) {
    const projectId = jobData.projectId as string;

    // On failure: revert ContentProject status to planning (indicates needs retry)
    if (status === "failed") {
      await prisma.contentProject.update({
        where: { id: projectId },
        data: {
          status: "planning",
        },
      });
    }
  }

  // If job is narration, handle narration status and project status updates
  if (
    job.name === "generate-narration" &&
    jobData.narrationId &&
    typeof jobData.narrationId === "string"
  ) {
    const narrationId = jobData.narrationId as string;
    const projectId = jobData.projectId as string;

    // Update Narration entity
    if (status === "completed") {
      // Update narration with audio URL (extracted from job result)
      const jobResult = (job as any).returnvalue;
      if (jobResult?.audioUrl) {
        await prisma.narration.update({
          where: { id: narrationId },
          data: {
            status: "completed",
            audioUrl: jobResult.audioUrl,
            durationSec: jobResult.durationSec || null,
            updatedAt: new Date(),
          },
        });
      } else {
        await prisma.narration.update({
          where: { id: narrationId },
          data: {
            status: "completed",
            updatedAt: new Date(),
          },
        });
      }

      // Update project status to READY after narration completion
      if (projectId && typeof projectId === "string") {
        await prisma.contentProject.update({
          where: { id: projectId },
          data: {
            status: "active",
          },
        });
      }
    } else if (status === "processing") {
      // Update Narration status to processing
      await prisma.narration.update({
        where: { id: narrationId },
        data: {
          status: "processing",
          updatedAt: new Date(),
        },
      });

      // Update project status to NARRATING
      if (projectId && typeof projectId === "string") {
        await prisma.contentProject.update({
          where: { id: projectId },
          data: {
            status: "in_review",
          },
        });
      }
    } else if (status === "failed") {
      // On failure: save error message but don't lock project (allow retry)
      await prisma.narration.update({
        where: { id: narrationId },
        data: {
          status: "failed",
          updatedAt: new Date(),
        },
      });

      // Revert project status back to in_development so it's not stuck
      if (projectId && typeof projectId === "string") {
        await prisma.contentProject.update({
          where: { id: projectId },
          data: {
            status: "in_development",
          },
        });
      }
    }
  }

  // If job has an exportJobId, update ExportJob entity
  if (jobData.exportJobId && typeof jobData.exportJobId === "string") {
    const projectId = jobData.projectId as string;

    await prisma.exportJob.update({
      where: { id: jobData.exportJobId },
      data: {
        status:
          status === "completed"
            ? "completed"
            : status === "processing"
              ? "processing"
              : "failed",
        errorMessage: errorMessage || null,
        startedAt: status === "processing" ? new Date() : undefined,
        completedAt:
          status === "completed" || status === "failed"
            ? new Date()
            : undefined,
      },
    });

    // Update ContentProject status to EXPORTED on successful export
    if (status === "completed" && projectId && typeof projectId === "string") {
      await prisma.contentProject.update({
        where: { id: projectId },
        data: {
          status: "exported",
        },
      });
    }
  }
}

// Create worker to process jobs
const worker = new Worker(
  QUEUE_NAME,
  async (job) => {
    const startTime = Date.now();

    try {
      console.log(`[Worker] Job ${job.id} started - Type: ${job.name}`);

      // Update database status to PROCESSING (if entity exists)
      await updateJobStatusInDatabase(job, "processing");

      let result: unknown;

      switch (job.name) {
        case "health-check":
          result = await processHealthCheckJob(job);
          break;
        case "analyze-trends":
          result = await processAnalyzeTrendsJob(job);
          break;
        case "generate-script":
          result = await processGenerateScriptJob(job);
          break;
        case "generate-narration":
          result = await processNarrationJob(job);
          break;
        case "process-export":
          result = await processExportJob(job);
          break;
        default:
          throw new Error(`Unknown job type: ${job.name}`);
      }

      // Update database status to DONE (if entity exists)
      await updateJobStatusInDatabase(job, "completed");

      const duration = Date.now() - startTime;
      console.log(
        `[Worker] Job ${job.id} completed successfully in ${duration}ms`,
      );
      return result || { status: "completed" };
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      const duration = Date.now() - startTime;

      console.error(
        `[Worker] Job ${job.id} failed after ${duration}ms:`,
        errorMessage,
      );

      // Update database status to FAILED with error message
      await updateJobStatusInDatabase(job, "failed", errorMessage);

      throw error;
    }
  },
  {
    connection: redisConnection,
    concurrency: 1,
    settings: {
      lockDuration: 30000,
      lockRenewTime: 15000,
    },
  },
);

// Event handlers
worker.on("completed", (job) => {
  console.log(
    `[Worker] Event: Job ${job.id} completed with result:`,
    job.returnvalue,
  );
});

worker.on("failed", (job, err) => {
  console.error(
    `[Worker] Event: Job ${job?.id} failed with error:`,
    err.message,
  );
});

worker.on("error", (err) => {
  console.error("[Worker] Worker error:", err);
});

worker.on("active", (job) => {
  console.log(`[Worker] Event: Job ${job.id} is now active`);
});

// Graceful shutdown
async function shutdown() {
  console.log("[Worker] Shutting down gracefully...");
  try {
    await worker.close();
    await redisConnection.quit();
    await prisma.$disconnect();
    console.log("[Worker] Shutdown complete");
    process.exit(0);
  } catch (error) {
    console.error("[Worker] Error during shutdown:", error);
    process.exit(1);
  }
}

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);

// Handle uncaught exceptions
process.on("uncaughtException", (error) => {
  console.error("[Worker] Uncaught exception:", error);
  shutdown();
});

// Start worker
console.log(`[Worker] Starting BullMQ worker for "${QUEUE_NAME}" queue`);
console.log(`[Worker] Redis URL: ${REDIS_URL}`);
worker.on("ready", () => {
  console.log("[Worker] Worker ready and listening for jobs");
});
