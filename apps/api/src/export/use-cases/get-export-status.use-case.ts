import {
  Injectable,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { ExportJobRepository } from '../../repositories/export-job.repository';

interface GetExportStatusInput {
  exportJobId: string;
  organizationId: string;
}

export interface ExportStatusOutput {
  status: string;
  exportUrl?: string;
  createdAt: Date;
  isExpired?: boolean;
}

@Injectable()
export class GetExportStatusUseCase {
  constructor(private readonly exportJobRepo: ExportJobRepository) {}

  async execute(input: GetExportStatusInput): Promise<ExportStatusOutput> {
    const { exportJobId, organizationId } = input;

    if (!organizationId) {
      throw new ForbiddenException('Organization context required');
    }

    const exportJob = await this.exportJobRepo.findById(exportJobId);

    if (!exportJob) {
      throw new BadRequestException('Export job not found');
    }

    if (exportJob.organizationId !== organizationId) {
      throw new ForbiddenException('Export job does not belong to organization');
    }

    // Check if export URL has expired (24h)
    const isExpired = exportJob.outputUrl
      ? this.isUrlExpired(exportJob.completedAt)
      : false;

    return {
      status: exportJob.status,
      exportUrl: isExpired ? undefined : exportJob.outputUrl || undefined,
      createdAt: exportJob.createdAt,
      isExpired: isExpired || undefined,
    };
  }

  private isUrlExpired(completedAt: Date | null): boolean {
    if (!completedAt) {
      return false;
    }

    const EXPIRATION_HOURS = 24;
    const expirationTime = new Date(completedAt.getTime() + EXPIRATION_HOURS * 60 * 60 * 1000);
    return new Date() > expirationTime;
  }
}
