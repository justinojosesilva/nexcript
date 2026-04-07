import { Queue, Worker } from 'bullmq';
import Redis from 'ioredis';
import { prisma } from '@nexcript/database';

const REDIS_URL = process.env.REDIS_URL || 'redis://localhost:6379';
const redisConnection = new Redis(REDIS_URL, {
  maxRetriesPerRequest: null,
  retryStrategy: (times) => {
    const delay = Math.min(times * 50, 2000);
    return delay;
  },
});

const jobsQueue = new Queue('nexcript-jobs', {
  connection: redisConnection,
});

// Job processor for health-check jobs
async function processHealthCheckJob(jobId: string): Promise<void> {
  console.log(`[Worker] Processing health-check job: ${jobId}`);

  // Update job status to PROCESSING
  const job = await jobsQueue.getJob(jobId);
  if (job) {
    await job.updateProgress(50);
  }

  // Simulate work
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // Mark as complete
  if (job) {
    await job.updateProgress(100);
  }

  console.log(`[Worker] Completed health-check job: ${jobId}`);
}

// Create worker to process jobs
const worker = new Worker(
  'nexcript-jobs',
  async (job) => {
    try {
      console.log(`[Worker] Processing job ${job.id} of type ${job.name}`);

      switch (job.name) {
        case 'health-check':
          await processHealthCheckJob(job.id!);
          break;
        default:
          throw new Error(`Unknown job type: ${job.name}`);
      }

      console.log(`[Worker] Job ${job.id} completed successfully`);
      return { status: 'completed' };
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`[Worker] Job ${job.id} failed:`, errorMessage);
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
  console.log(`[Worker] Event: Job ${job.id} completed`);
});

worker.on('failed', (job, err) => {
  console.error(`[Worker] Event: Job ${job?.id} failed:`, err.message);
});

worker.on('error', (err) => {
  console.error('[Worker] Worker error:', err);
});

// Graceful shutdown
async function shutdown() {
  console.log('[Worker] Shutting down...');
  await worker.close();
  await redisConnection.quit();
  console.log('[Worker] Shutdown complete');
  process.exit(0);
}

process.on('SIGTERM', shutdown);
process.on('SIGINT', shutdown);

// Start worker
console.log('[Worker] Starting BullMQ worker for nexcript-jobs queue');
worker.on('ready', () => {
  console.log('[Worker] Worker ready and listening for jobs');
});
