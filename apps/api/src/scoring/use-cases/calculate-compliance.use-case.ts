import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { ComplianceScorer, ComplianceScorerResult } from '../compliance.scorer';
import { NicheCategory } from '@nexcript/shared';

interface CalculateComplianceInput {
  projectId: string;
  organizationId: string;
  niche: NicheCategory;
}

@Injectable()
export class CalculateComplianceUseCase {
  private readonly logger = new Logger(CalculateComplianceUseCase.name);

  constructor(private readonly complianceScorer: ComplianceScorer) {}

  async execute(input: CalculateComplianceInput): Promise<ComplianceScorerResult> {
    const { projectId, organizationId, niche } = input;

    // Verify project exists and belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
    });

    if (!project) {
      throw new BadRequestException('Project not found or unauthorized');
    }

    // Calculate compliance scores
    const scores = await this.complianceScorer.execute({
      projectId,
      organizationId,
      niche,
    });

    // Save compliance scores to PublicationMetadata
    await prisma.publicationMetadata.upsert({
      where: { projectId },
      create: {
        projectId,
        organizationId,
        platform: 'youtube', // Default platform
        complianceScore: scores.complianceScore,
        checklistResults: {
          originalityScore: scores.originalityScore,
          copyrightScore: scores.copyrightScore,
          monetizationScore: scores.monetizationScore,
        } as any,
      },
      update: {
        complianceScore: scores.complianceScore,
        checklistResults: {
          originalityScore: scores.originalityScore,
          copyrightScore: scores.copyrightScore,
          monetizationScore: scores.monetizationScore,
        } as any,
        updatedAt: new Date(),
      },
    });

    this.logger.debug(
      `Saved compliance scores for project ${projectId}: ${JSON.stringify(scores)}`,
    );

    return scores;
  }
}
