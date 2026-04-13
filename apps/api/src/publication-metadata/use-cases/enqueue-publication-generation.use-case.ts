import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import { Queue } from 'bullmq';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';
import { prisma } from '@nexcript/database';

interface EnqueuePublicationGenerationInput {
  projectId: string;
  scriptId: string;
  organizationId: string;
}

@Injectable()
export class EnqueuePublicationGenerationUseCase {
  private readonly logger = new Logger(EnqueuePublicationGenerationUseCase.name);

  constructor(@Inject(JOBS_QUEUE_TOKEN) private jobsQueue: Queue) {}

  async execute(input: EnqueuePublicationGenerationInput): Promise<string> {
    const { projectId, scriptId, organizationId } = input;

    // Verify project belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    // Verify script belongs to project
    const script = await prisma.script.findUnique({
      where: { id: scriptId },
    });

    if (!script || script.projectId !== projectId) {
      throw new BadRequestException('Script not found or does not belong to project');
    }

    // Enqueue job
    const job = await this.jobsQueue.add(
      'generate-publication',
      {
        projectId,
        scriptId,
        organizationId,
      },
      {
        jobId: `generate-publication-${projectId}-${scriptId}-${Date.now()}`,
      },
    );

    this.logger.debug(
      `Enqueued publication generation job for project ${projectId}, script ${scriptId}`,
    );

    return job.id!;
  }
}
