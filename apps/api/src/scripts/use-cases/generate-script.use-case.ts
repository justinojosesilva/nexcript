import { Injectable, Logger, BadRequestException, Inject } from '@nestjs/common';
import { type Script } from '@nexcript/database';
import { genericScriptPrompt, type GenericScriptInput } from '@nexcript/prompts';
import { FormatType, NicheCategory } from '@nexcript/shared';
import { ScriptRepository } from '../../repositories/script.repository';
import { ContentProjectRepository } from '../../repositories/content-project.repository';
import { IOpenAIPort } from '../../adapters/interfaces/openai.port';
import { GenerateScriptDto } from '../dto/generate-script.dto';
import { ScriptGenerationException } from '../exceptions/script-generation.exception';

interface GenerateScriptInput extends GenerateScriptDto {
  organizationId: string;
  keyword?: string;
}

interface ScriptBlock {
  id: string;
  type: 'HOOK' | 'INTRO' | 'DEVELOPMENT' | 'RETENTION_CTA' | 'CONCLUSION';
  content: string;
  estimatedDuration: number;
  wordCount: number;
}

interface GeneratedScriptResponse {
  blocks: ScriptBlock[];
  totalEstimatedDuration: number;
  totalWordCount: number;
  originalityScore: number;
  estimatedCostBrl: number;
}

@Injectable()
export class GenerateScriptUseCase {
  private readonly logger = new Logger(GenerateScriptUseCase.name);

  constructor(
    private readonly scriptRepository: ScriptRepository,
    private readonly contentProjectRepository: ContentProjectRepository,
    @Inject('IOpenAIPort')
    private readonly openaiPort: IOpenAIPort,
  ) {}

  async execute(input: GenerateScriptInput): Promise<Script> {
    if (!input.organizationId) {
      throw new BadRequestException('Missing organization context');
    }

    // Validate project exists
    const project = await this.contentProjectRepository.findById(
      input.projectId,
    );
    if (!project) {
      throw new BadRequestException('Project not found');
    }

    try {
      this.logger.debug(
        `Generating script for project ${input.projectId} with format ${input.formatType}`,
      );

      // Generate script content via OpenAI
      const scriptContent = await this.generateScriptContent(input);

      // Parse and validate JSON response
      let parsedResponse: GeneratedScriptResponse;
      try {
        parsedResponse = JSON.parse(scriptContent);
      } catch (parseError) {
        throw new ScriptGenerationException(
          'OpenAI returned invalid JSON format',
          parseError as Error,
        );
      }

      // Validate required fields
      if (!parsedResponse.blocks || !Array.isArray(parsedResponse.blocks)) {
        throw new ScriptGenerationException(
          'Invalid script structure: blocks must be an array',
        );
      }

      if (parsedResponse.blocks.length === 0) {
        throw new ScriptGenerationException(
          'Script generation returned empty blocks',
        );
      }

      // Create script in database
      const script = await this.scriptRepository.create({
        projectId: input.projectId,
        trendAnalysisId: input.trendAnalysisId || null,
        status: 'draft',
        formatType: input.formatType as any,
        blocks: parsedResponse.blocks as any,
        wordCount: parsedResponse.totalWordCount,
        estimatedDurationSec: parsedResponse.totalEstimatedDuration,
        originalityScore: parsedResponse.originalityScore,
        estimatedCostBrl: parsedResponse.estimatedCostBrl,
      });

      this.logger.debug(`Script created successfully with id ${script.id}`);

      return script;
    } catch (error) {
      if (error instanceof ScriptGenerationException) {
        throw error;
      }

      this.logger.error(
        `Script generation failed: ${error instanceof Error ? error.message : String(error)}`,
      );

      throw new ScriptGenerationException(
        'Failed to generate script. Please try again.',
        error instanceof Error ? error : undefined,
      );
    }
  }

  private async generateScriptContent(
    input: GenerateScriptInput,
  ): Promise<string> {
    const prompt = genericScriptPrompt({
      topic: input.keyword || 'Generic Topic',
      niche: input.niche,
      format: input.formatType,
      tone: input.tone,
      durationMinutes: input.formatType === FormatType.SHORT_FORM ? 1 : 10,
      targetAudience: 'Content creators and learners',
    });

    try {
      const maxTokens = this.calculateMaxTokens(input.formatType);
      return await this.openaiPort.complete(prompt, maxTokens);
    } catch (error) {
      this.logger.error(
        `OpenAI API call failed: ${error instanceof Error ? error.message : String(error)}`,
      );
      throw new ScriptGenerationException(
        'Failed to call OpenAI API. Please ensure your API key is valid and you have sufficient credits.',
        error instanceof Error ? error : undefined,
      );
    }
  }

  private calculateMaxTokens(formatType: FormatType): number {
    const tokenMap: Record<FormatType, number> = {
      [FormatType.LONG_FORM]: 2000,
      [FormatType.MEDIUM_FORM]: 1500,
      [FormatType.SHORT_FORM]: 800,
      [FormatType.CAROUSEL]: 1200,
      [FormatType.PODCAST]: 2500,
    };

    return tokenMap[formatType] || 1500;
  }
}
