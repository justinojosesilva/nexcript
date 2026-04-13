import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
  ForbiddenException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { Queue } from 'bullmq';
import { prisma } from '@nexcript/database';
import { JOBS_QUEUE_TOKEN } from '../../bullmq/bullmq.module';
import { ExportJobRepository } from '../../repositories/export-job.repository';

interface CreateExportInput {
  projectId: string;
  organizationId: string;
}

export interface CreateExportOutput {
  exportJobId: string;
  bullmqJobId: string;
}

@Injectable()
export class CreateExportUseCase {
  private readonly logger = new Logger(CreateExportUseCase.name);

  constructor(
    private readonly exportJobRepo: ExportJobRepository,
    @Inject(JOBS_QUEUE_TOKEN) private readonly jobsQueue: Queue,
  ) {}

  async execute(input: CreateExportInput): Promise<CreateExportOutput> {
    const { projectId, organizationId } = input;

    if (!organizationId) {
      throw new ForbiddenException('Organization context required');
    }

    // 1. Verify project belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: { id: projectId, organizationId },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    // Collect missing requirements
    const missing: string[] = [];

    // 2. Validate project readiness: Script approved (READY)
    const script = await prisma.script.findFirst({
      where: { projectId, status: 'approved' },
      orderBy: { createdAt: 'desc' },
    });

    if (!script) {
      missing.push('approved_script');
    }

    // 3. Validate: Narration DONE (completed)
    let narration: any = null;
    if (script) {
      narration = await prisma.narration.findFirst({
        where: { scriptId: script.id, status: 'completed' },
        orderBy: { createdAt: 'desc' },
      });

      if (!narration) {
        missing.push('completed_narration');
      }
    } else {
      missing.push('completed_narration');
    }

    // 4. Validate: >= 1 selected asset
    const selectedAssets = await prisma.mediaSuggestion.findMany({
      where: {
        projectId,
        metadata: { path: ['selected'], equals: true },
      },
    });

    if (selectedAssets.length === 0) {
      missing.push('selected_media_assets');
    }

    // 5. Validate: title chosen (publicationMetadata with title set)
    const pubMeta = await prisma.publicationMetadata.findUnique({
      where: { projectId },
    });

    if (!pubMeta || !pubMeta.title) {
      missing.push('publication_title');
    }

    // If any requirement is missing, throw UnprocessableEntityException with 422
    if (missing.length > 0 || !script || !narration) {
      throw new UnprocessableEntityException({
        message: 'Project does not meet export requirements',
        missing: missing.length > 0 ? missing : ['unknown'],
      });
    }

    // 6. Create ExportJob entity
    const exportJob = await this.exportJobRepo.create({
      organizationId,
      projectId,
      assetType: 'metadata',
    });

    // 7. Enqueue BullMQ job
    const bullmqJob = await this.jobsQueue.add(
      'process-export',
      {
        exportJobId: exportJob.id,
        projectId,
        scriptId: script.id,
        narrationId: narration.id,
        organizationId,
      },
      {
        jobId: `process-export-${projectId}-${Date.now()}`,
      },
    );

    this.logger.debug(
      `Export job created: ${exportJob.id}, BullMQ job: ${bullmqJob.id}`,
    );

    return {
      exportJobId: exportJob.id,
      bullmqJobId: bullmqJob.id!,
    };
  }
}
