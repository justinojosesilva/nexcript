import { Injectable } from '@nestjs/common';
import { type ExportJob } from '@nexcript/database';
import { PrismaService } from '../prisma/prisma.service';
import { IExportJobRepository } from './export-job.repository.interface';

@Injectable()
export class ExportJobRepository implements IExportJobRepository {
  constructor(private readonly prismaService: PrismaService) {}

  create(data: {
    organizationId: string;
    projectId: string;
    assetType: string;
  }): Promise<ExportJob> {
    return this.prismaService.client.exportJob.create({
      data: {
        organizationId: data.organizationId,
        projectId: data.projectId,
        assetType: data.assetType as any,
        status: 'pending',
      },
    });
  }

  findById(id: string): Promise<ExportJob | null> {
    return this.prismaService.client.exportJob.findUnique({
      where: { id },
    });
  }

  findByProject(projectId: string): Promise<ExportJob[]> {
    return this.prismaService.client.exportJob.findMany({
      where: { projectId },
      orderBy: { createdAt: 'desc' },
    });
  }

  updateStatus(
    id: string,
    status: string,
    data?: { outputUrl?: string; errorMessage?: string },
  ): Promise<ExportJob> {
    return this.prismaService.client.exportJob.update({
      where: { id },
      data: {
        status: status as any,
        outputUrl: data?.outputUrl,
        errorMessage: data?.errorMessage,
        startedAt: status === 'processing' ? new Date() : undefined,
        completedAt:
          status === 'completed' || status === 'failed'
            ? new Date()
            : undefined,
      },
    });
  }
}
