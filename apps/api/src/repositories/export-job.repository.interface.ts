import { type ExportJob } from '@nexvideo/database';

export interface IExportJobRepository {
  create(data: {
    organizationId: string;
    projectId: string;
    assetType: string;
  }): Promise<ExportJob>;
  findById(id: string): Promise<ExportJob | null>;
  findByProject(projectId: string): Promise<ExportJob[]>;
  updateStatus(
    id: string,
    status: string,
    data?: { outputUrl?: string; errorMessage?: string },
  ): Promise<ExportJob>;
}
