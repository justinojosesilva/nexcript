import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

export interface TrendAnalysisResponse {
  id: string;
  organizationId: string;
  projectId: string;
  keyword: string;
  data: unknown;
  analyzedAt: Date;
  createdAt: Date;
}

@Injectable()
export class GetTrendAnalysisUseCase {
  constructor(private readonly prismaService: PrismaService) {}

  async execute(projectId: string): Promise<TrendAnalysisResponse> {
    const trendAnalysis = await this.prismaService.client.trendAnalysis.findFirst({
      where: { projectId },
      orderBy: { analyzedAt: 'desc' },
    });

    if (!trendAnalysis) {
      throw new NotFoundException(
        `TrendAnalysis not found for project: ${projectId}`,
      );
    }

    return trendAnalysis;
  }
}
