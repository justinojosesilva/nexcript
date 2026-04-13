import { Injectable, Logger, BadRequestException, Inject } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { OpenAIAdapter } from '../adapters/implementations/openai.adapter';
import { MonetizationScorer } from './monetization.scorer';
import { NicheCategory } from '@nexcript/shared';

export interface ComplianceScorerInput {
  projectId: string;
  organizationId: string;
  niche: NicheCategory;
}

export interface ComplianceScorerResult {
  originalityScore: number;
  copyrightScore: number;
  monetizationScore: number;
  complianceScore: number; // weighted average
}

/**
 * ComplianceScorer
 *
 * Calculates compliance scores for publication:
 * - originalityScore: semantic similarity between script and top trend videos (0-100)
 * - copyrightScore: percentage of selected media with commercial use rights (0-100)
 * - monetizationScore: inherited from MonetizationScorer (0-100)
 * - complianceScore: weighted average (0-100)
 *
 * Score weights:
 * - originality: 40%
 * - copyright: 40%
 * - monetization: 20%
 */
@Injectable()
export class ComplianceScorer {
  private readonly logger = new Logger(ComplianceScorer.name);

  constructor(
    @Inject('IOpenAIPort')
    private readonly openaiAdapter: OpenAIAdapter,
    private readonly monetizationScorer: MonetizationScorer,
  ) {}

  async execute(input: ComplianceScorerInput): Promise<ComplianceScorerResult> {
    const { projectId, organizationId, niche } = input;

    // Fetch required data
    const [script, trendAnalysis, mediaList, projectData] = await Promise.all([
      this.fetchScript(projectId),
      this.fetchTrendAnalysis(projectId),
      this.fetchSelectedMedia(projectId),
      this.fetchProject(projectId, organizationId),
    ]);

    if (!projectData) {
      throw new BadRequestException('Project not found or unauthorized');
    }

    // Calculate individual scores
    const originalityScore = await this.calculateOriginalityScore(
      script,
      trendAnalysis,
    );
    const copyrightScore = this.calculateCopyrightScore(mediaList);
    const monetizationScore = await this.calculateMonetizationScore(niche);

    // Calculate weighted compliance score
    const complianceScore = Math.round(
      originalityScore * 0.4 +
        copyrightScore * 0.4 +
        monetizationScore * 0.2,
    );

    this.logger.debug(
      `ComplianceScorer for project ${projectId}: ` +
        `originality=${originalityScore}, copyright=${copyrightScore}, ` +
        `monetization=${monetizationScore}, compliance=${complianceScore}`,
    );

    return {
      originalityScore,
      copyrightScore,
      monetizationScore,
      complianceScore,
    };
  }

  /**
   * Calculate originality score by comparing script with trend analysis data
   * Uses semantic similarity based on embedded text comparisons
   */
  private async calculateOriginalityScore(
    script: any,
    trendAnalysis: any,
  ): Promise<number> {
    if (!script || !trendAnalysis) {
      // If missing data, return neutral score
      return 50;
    }

    try {
      // Extract script content from blocks
      let scriptContent = '';
      if (Array.isArray(script.blocks)) {
        scriptContent = (script.blocks as any[])
          .map((block: any) => block.content || '')
          .join('\n')
          .slice(0, 2000); // Limit to 2000 chars for embedding
      }

      if (!scriptContent.trim()) {
        return 50;
      }

      // Get top videos from trend analysis data
      const trendData = trendAnalysis.data as any;
      const topVideos = trendData?.scores?.topVideos || [];

      if (topVideos.length === 0) {
        // No trend data to compare against - assume original
        return 80;
      }

      // Get embeddings for script and top videos
      const scriptEmbedding = await this.getEmbedding(scriptContent);

      const similarityScores: number[] = [];
      for (const video of topVideos.slice(0, 5)) {
        const videoTitle = video.title || '';
        if (!videoTitle.trim()) continue;

        const videoEmbedding = await this.getEmbedding(videoTitle);
        const similarity = this.cosineSimilarity(
          scriptEmbedding,
          videoEmbedding,
        );
        similarityScores.push(similarity);
      }

      if (similarityScores.length === 0) {
        return 80; // No comparison data
      }

      // Average similarity score (higher = more similar = less original)
      const avgSimilarity =
        similarityScores.reduce((a, b) => a + b, 0) /
        similarityScores.length;

      // Invert: high similarity (0.8) → low originality (20), low similarity (0.3) → high originality (70)
      const originalityScore = Math.round((1 - avgSimilarity) * 100);

      return Math.max(0, Math.min(100, originalityScore));
    } catch (error) {
      this.logger.warn(
        `Failed to calculate originality score: ${error instanceof Error ? error.message : 'unknown error'}`,
      );
      return 50; // Neutral fallback
    }
  }

  /**
   * Calculate copyright score based on selected media's commercial use rights
   * 100 if all selected media have commercialUse = true, penalized proportionally
   */
  private calculateCopyrightScore(mediaList: any[]): number {
    if (!mediaList || mediaList.length === 0) {
      // No media selected - assume compliant (conservative)
      return 100;
    }

    const selectedMedia = mediaList.filter((m: any) => {
      const metadata = m.metadata as any;
      return metadata?.selected === true;
    });

    if (selectedMedia.length === 0) {
      // No media selected explicitly
      return 100;
    }

    const commercialCount = selectedMedia.filter((m: any) => {
      const metadata = m.metadata as any;
      return metadata?.commercialUse === true;
    }).length;

    // Score = (commercial / total) * 100
    const score = Math.round((commercialCount / selectedMedia.length) * 100);
    return Math.max(0, Math.min(100, score));
  }

  /**
   * Get monetization score from MonetizationScorer
   */
  private async calculateMonetizationScore(niche: NicheCategory): Promise<number> {
    try {
      const dimensions = await this.monetizationScorer.calculateDimensions({
        niche,
      });
      const result = this.monetizationScorer.calculateScore(dimensions);
      return result.score;
    } catch (error) {
      this.logger.warn(
        `Failed to calculate monetization score: ${error instanceof Error ? error.message : 'unknown error'}`,
      );
      return 50; // Neutral fallback
    }
  }

  /**
   * Get embedding vector for text using OpenAI
   */
  private async getEmbedding(text: string): Promise<number[]> {
    try {
      // Truncate to avoid token limits
      const truncated = text.slice(0, 1000);
      return await this.openaiAdapter.getEmbedding(truncated);
    } catch (error) {
      this.logger.warn(
        `Failed to get embedding: ${error instanceof Error ? error.message : 'unknown error'}`,
      );
      // Return zero vector as fallback
      return new Array(1536).fill(0);
    }
  }

  /**
   * Calculate cosine similarity between two vectors
   */
  private cosineSimilarity(a: number[], b: number[]): number {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const normB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));

    if (normA === 0 || normB === 0) return 0;
    return dotProduct / (normA * normB);
  }

  /**
   * Fetch script for a project
   */
  private async fetchScript(projectId: string): Promise<any> {
    return await prisma.script.findFirst({
      where: { projectId },
    });
  }

  /**
   * Fetch trend analysis for a project
   */
  private async fetchTrendAnalysis(projectId: string): Promise<any> {
    return await prisma.trendAnalysis.findFirst({
      where: { projectId },
      orderBy: { analyzedAt: 'desc' },
    });
  }

  /**
   * Fetch selected media for a project
   */
  private async fetchSelectedMedia(projectId: string): Promise<any[]> {
    return await prisma.mediaSuggestion.findMany({
      where: { projectId },
    });
  }

  /**
   * Fetch and verify project ownership
   */
  private async fetchProject(
    projectId: string,
    organizationId: string,
  ): Promise<any> {
    return await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
    });
  }
}
