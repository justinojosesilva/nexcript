import { Queue, Worker, Job } from 'bullmq';
import Redis from 'ioredis';
import axios from 'axios';
import { prisma } from '@nexcript/database';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const QUEUE_NAME = 'nexcript-jobs';
const API_URL = process.env.API_URL || 'http://localhost:3002';

const redisConnection = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

const jobsQueue = new Queue(QUEUE_NAME, {
  connection: redisConnection,
});

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
  return { status: 'completed' };
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

// Update job status in database for jobs with entity references
async function updateJobStatusInDatabase(
  job: Job,
  status: 'processing' | 'completed' | 'failed',
  errorMessage?: string,
): Promise<void> {
  const jobData = job.data as Record<string, unknown>;

  // If job has an exportJobId, update ExportJob entity
  if (jobData.exportJobId && typeof jobData.exportJobId === 'string') {
    await prisma.exportJob.update({
      where: { id: jobData.exportJobId },
      data: {
        status: status === 'completed' ? 'completed' : status === 'processing' ? 'processing' : 'failed',
        errorMessage: errorMessage || null,
        startedAt: status === 'processing' ? new Date() : undefined,
        completedAt: status === 'completed' || status === 'failed' ? new Date() : undefined,
      },
    });
  }

  // If job has a narrationId, update Narration entity
  if (jobData.narrationId && typeof jobData.narrationId === 'string') {
    await prisma.narration.update({
      where: { id: jobData.narrationId },
      data: {
        status: status === 'completed' ? 'completed' : status === 'processing' ? 'processing' : 'failed',
        updatedAt: new Date(),
      },
    });
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
      await updateJobStatusInDatabase(job, 'processing');

      let result: unknown;

      switch (job.name) {
        case 'health-check':
          result = await processHealthCheckJob(job);
          break;
        case 'analyze-trends':
          result = await processAnalyzeTrendsJob(job);
          break;
        default:
          throw new Error(`Unknown job type: ${job.name}`);
      }

      // Update database status to DONE (if entity exists)
      await updateJobStatusInDatabase(job, 'completed');

      const duration = Date.now() - startTime;
      console.log(`[Worker] Job ${job.id} completed successfully in ${duration}ms`);
      return result || { status: 'completed' };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      const duration = Date.now() - startTime;

      console.error(
        `[Worker] Job ${job.id} failed after ${duration}ms:`,
        errorMessage,
      );

      // Update database status to FAILED with error message
      await updateJobStatusInDatabase(job, 'failed', errorMessage);

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
worker.on('completed', (job) => {
  console.log(`[Worker] Event: Job ${job.id} completed with result:`, job.returnvalue);
});

worker.on('failed', (job, err) => {
  console.error(`[Worker] Event: Job ${job?.id} failed with error:`, err.message);
});

worker.on('error', (err) => {
  console.error('[Worker] Worker error:', err);
});

worker.on('active', (job) => {
  console.log(`[Worker] Event: Job ${job.id} is now active`);
});

// Graceful shutdown
async function shutdown() {
  console.log('[Worker] Shutting down gracefully...');
  try {
    await worker.close();
    await redisConnection.quit();
    await prisma.$disconnect();
    console.log('[Worker] Shutdown complete');
    process.exit(0);
  } catch (error) {
    console.error('[Worker] Error during shutdown:', error);
    process.exit(1);
  }
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  console.error('[Worker] Uncaught exception:', error);
  shutdown();
});

// Start worker
console.log(`[Worker] Starting BullMQ worker for "${QUEUE_NAME}" queue`);
console.log(`[Worker] Redis URL: ${REDIS_URL}`);
worker.on('ready', () => {
  console.log('[Worker] Worker ready and listening for jobs');
});
