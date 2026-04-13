import {
  Injectable,
  Logger,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { prisma } from '@nexcript/database';

export interface ComplianceResponse {
  projectId: string;
  complianceScore: number | null;
  originalityScore: number | null;
  copyrightScore: number | null;
  monetizationScore: number | null;
  warnings: string[];
}

interface GetComplianceInput {
  projectId: string;
  organizationId: string;
}

@Injectable()
export class GetComplianceUseCase {
  private readonly logger = new Logger(GetComplianceUseCase.name);

  async execute(input: GetComplianceInput): Promise<ComplianceResponse> {
    const { projectId, organizationId } = input;

    if (!organizationId) {
      throw new ForbiddenException('Organization context required');
    }

    // 1. Verify project belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    // 2. Fetch PublicationMetadata with compliance scores
    const metadata = await prisma.publicationMetadata.findUnique({
      where: { projectId },
    });

    if (!metadata) {
      // No compliance data yet
      return {
        projectId,
        complianceScore: null,
        originalityScore: null,
        copyrightScore: null,
        monetizationScore: null,
        warnings: [],
      };
    }

    // 3. Extract individual scores from checklistResults
    const checklist = (metadata.checklistResults as any) || {};
    const originalityScore = checklist.originalityScore ?? null;
    const copyrightScore = checklist.copyrightScore ?? null;
    const monetizationScore = checklist.monetizationScore ?? null;

    // 4. Generate warnings if any score < 60
    const warnings: string[] = [];
    if (
      originalityScore !== null &&
      originalityScore < 60
    ) {
      warnings.push(
        `Originality score is low (${originalityScore}). Content may have high similarity to existing videos.`,
      );
    }
    if (
      copyrightScore !== null &&
      copyrightScore < 60
    ) {
      warnings.push(
        `Copyright score is low (${copyrightScore}). Some selected media may have limited commercial use rights.`,
      );
    }
    if (
      monetizationScore !== null &&
      monetizationScore < 60
    ) {
      warnings.push(
        `Monetization score is low (${monetizationScore}). Content may face monetization restrictions.`,
      );
    }

    this.logger.debug(
      `Retrieved compliance data for project ${projectId}: score=${metadata.complianceScore}, warnings=${warnings.length}`,
    );

    return {
      projectId,
      complianceScore: metadata.complianceScore,
      originalityScore,
      copyrightScore,
      monetizationScore,
      warnings,
    };
  }
}
