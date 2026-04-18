import {
  Injectable,
  Logger,
  Inject,
  BadRequestException,
} from '@nestjs/common';
import * as archiver from 'archiver';
import { prisma } from '@nexvideo/database';
import { IStoragePort } from '../../adapters/interfaces/storage.port';
import { ExportJobRepository } from '../../repositories/export-job.repository';

interface ProcessExportInput {
  exportJobId: string;
  projectId: string;
  scriptId: string;
  narrationId: string;
  organizationId: string;
}

export interface ProcessExportOutput {
  exportUrl: string;
  zipSize: number;
}

@Injectable()
export class ProcessExportUseCase {
  private readonly logger = new Logger(ProcessExportUseCase.name);

  constructor(
    private readonly exportJobRepo: ExportJobRepository,
    @Inject('IStoragePort') private readonly storagePort: IStoragePort,
  ) {}

  async execute(input: ProcessExportInput): Promise<ProcessExportOutput> {
    const { exportJobId, projectId, scriptId, narrationId, organizationId } =
      input;

    // 1. Fetch all required data
    const [script, narration, selectedAssets, pubMeta] = await Promise.all([
      prisma.script.findUnique({ where: { id: scriptId } }),
      prisma.narration.findUnique({ where: { id: narrationId } }),
      prisma.mediaSuggestion.findMany({
        where: {
          projectId,
          metadata: { path: ['selected'], equals: true },
        },
      }),
      prisma.publicationMetadata.findUnique({ where: { projectId } }),
    ]);

    if (!script) throw new BadRequestException('Script not found');
    if (!narration) throw new BadRequestException('Narration not found');
    if (!pubMeta) throw new BadRequestException('Publication metadata not found');

    // 2. Build package contents
    const scriptJson = JSON.stringify(
      {
        id: script.id,
        projectId: script.projectId,
        formatType: script.formatType,
        blocks: script.blocks,
        wordCount: script.wordCount,
        estimatedDurationSec: script.estimatedDurationSec,
      },
      null,
      2,
    );

    const selectedAssetsJson = JSON.stringify(
      selectedAssets.map((a) => ({
        id: a.id,
        type: a.type,
        url: a.url,
        prompt: a.prompt,
        metadata: a.metadata,
      })),
      null,
      2,
    );

    const publicationMetadataJson = JSON.stringify(
      {
        id: pubMeta.id,
        title: pubMeta.title,
        description: pubMeta.description,
        tags: pubMeta.tags,
        thumbnailUrl: pubMeta.thumbnailUrl,
        platform: pubMeta.platform,
        complianceScore: pubMeta.complianceScore,
        checklistResults: pubMeta.checklistResults,
      },
      null,
      2,
    );

    const narrationJson = JSON.stringify(
      {
        id: narration.id,
        audioUrl: narration.audioUrl,
        provider: narration.provider,
        voiceId: narration.voiceId,
        durationSec: narration.durationSec,
      },
      null,
      2,
    );

    // 3. Create ZIP archive
    const zipBuffer = await this.createZipBuffer({
      'script.json': scriptJson,
      'narration.json': narrationJson,
      'selectedAssets.json': selectedAssetsJson,
      'publicationMetadata.json': publicationMetadataJson,
    });

    // 4. Upload to storage
    const filename = `exports/${organizationId}/${projectId}/export-${exportJobId}.zip`;
    const exportUrl = await this.storagePort.uploadFile(
      zipBuffer,
      filename,
      'application/zip',
    );

    // 5. Update ExportJob with output URL
    await this.exportJobRepo.updateStatus(exportJobId, 'completed', {
      outputUrl: exportUrl,
    });

    const zipSizeKb = zipBuffer.length / 1024;
    this.logger.debug(
      `Export completed: ${exportUrl} (${zipSizeKb.toFixed(2)}KB)`,
    );

    return { exportUrl, zipSize: zipBuffer.length };
  }

  private createZipBuffer(
    files: Record<string, string>,
  ): Promise<Buffer> {
    return new Promise((resolve, reject) => {
      const archive = archiver.create('zip', { zlib: { level: 9 } });
      const chunks: Buffer[] = [];

      archive.on('data', (chunk: Buffer) => chunks.push(chunk));
      archive.on('end', () => resolve(Buffer.concat(chunks)));
      archive.on('error', (err: Error) => reject(err));

      for (const [name, content] of Object.entries(files)) {
        archive.append(content, { name });
      }

      archive.finalize();
    });
  }
}
