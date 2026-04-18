import {
  Injectable,
  Logger,
  BadRequestException,
  Inject,
} from '@nestjs/common';
import { titleVariantsPrompt, tagsPrompt } from '@nexvideo/prompts';
import { type TitleVariantsOutput, type YoutubeTagsOutput } from '@nexvideo/prompts';
import { prisma } from '@nexvideo/database';
import { IOpenAIPort } from '../../adapters/interfaces/openai.port';
import { GenerateTitleTagsDto } from '../dto/generate-title-tags.dto';

/**
 * Response type for title and tags generation
 */
export interface GenerateTitleTagsResponse {
  titleVariants: any[];
  tags: YoutubeTagsOutput;
  projectId: string;
}

@Injectable()
export class GenerateTitleTagsUseCase {
  private readonly logger = new Logger(GenerateTitleTagsUseCase.name);

  constructor(@Inject('IOpenAIPort') private readonly openaiAdapter: IOpenAIPort) {}

  async execute(
    input: GenerateTitleTagsDto,
  ): Promise<GenerateTitleTagsResponse> {
    const { projectId, scriptId, organizationId } = input;

    // Validate project belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
      include: {
        channelProfile: {
          select: {
            tone: true,
          },
        },
      },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    // Fetch script
    const script = await prisma.script.findUnique({
      where: { id: scriptId },
    });

    if (!script || script.projectId !== projectId) {
      throw new BadRequestException('Script not found or does not belong to project');
    }

    // Generate title variants
    const titleVariantsPromptText = titleVariantsPrompt({
      topic: project.title,
      niche: project.niche.toLowerCase(),
      tone: project.channelProfile.tone.toLowerCase(),
    });

    this.logger.debug(
      `Calling OpenAI for title variants (project: ${projectId}, script: ${scriptId})`,
    );

    const titleVariantsResponse = await this.openaiAdapter.complete(
      titleVariantsPromptText,
      400,
    );

    let titleVariants: any[] = [];
    try {
      const parsed = JSON.parse(titleVariantsResponse) as TitleVariantsOutput;
      titleVariants = parsed.variants || [];
    } catch (error) {
      this.logger.error('Failed to parse title variants response', error);
      throw new BadRequestException('Failed to parse title variants from OpenAI');
    }

    // Extract titles for tags prompt
    const titles = titleVariants.map((v: any) => v.title);

    // Generate tags
    const tagsPromptText = tagsPrompt({
      topic: project.title,
      niche: project.niche.toLowerCase(),
      titles,
    });

    this.logger.debug(
      `Calling OpenAI for tags (project: ${projectId}, script: ${scriptId})`,
    );

    const tagsResponse = await this.openaiAdapter.complete(tagsPromptText, 300);

    let tags: YoutubeTagsOutput = {
      primary: [],
      secondary: [],
      niche: [],
      trending: [],
    };

    try {
      tags = JSON.parse(tagsResponse) as YoutubeTagsOutput;
    } catch (error) {
      this.logger.error('Failed to parse tags response', error);
      throw new BadRequestException('Failed to parse tags from OpenAI');
    }

    // Flatten tags array for storage
    const flattenedTags = [
      ...(tags.primary || []),
      ...(tags.secondary || []),
      ...(tags.niche || []),
      ...(tags.trending || []),
    ];

    // Upsert PublicationMetadata (idempotent: overwrites if exists)
    await prisma.publicationMetadata.upsert({
      where: { projectId },
      update: {
        tags: flattenedTags,
        title: null, // selectedTitle is null - user chooses in UI
        updatedAt: new Date(),
      },
      create: {
        organizationId,
        projectId,
        title: null, // selectedTitle is null initially
        tags: flattenedTags,
        platform: 'youtube', // Default platform, can be updated later
      },
    });

    this.logger.debug(
      `Generated ${titleVariants.length} title variants and ${flattenedTags.length} tags for project ${projectId}`,
    );

    return {
      titleVariants,
      tags,
      projectId,
    };
  }
}
