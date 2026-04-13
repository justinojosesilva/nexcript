import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import OpenAI from 'openai';
import { IOpenAIPort } from '../interfaces/openai.port';

/**
 * OpenAI adapter using the official OpenAI SDK
 * Provides chat completion capabilities for content analysis
 */
@Injectable()
export class OpenAIAdapter implements IOpenAIPort {
  private readonly logger = new Logger(OpenAIAdapter.name);
  private readonly client: OpenAI;

  /** Default model for analysis tasks */
  private static readonly DEFAULT_MODEL = 'gpt-4o';

  /** Default max tokens to control cost */
  private static readonly DEFAULT_MAX_TOKENS = 500;

  constructor(private readonly configService: ConfigService) {
    this.client = new OpenAI({
      apiKey: this.configService.get<string>('OPENAI_API_KEY'),
    });
  }

  /**
   * Complete a chat prompt using GPT-4o
   * @param prompt The user prompt
   * @param maxTokens Maximum tokens (default 500 for cost control)
   * @returns The model's text response
   */
  async complete(
    prompt: string,
    maxTokens: number = OpenAIAdapter.DEFAULT_MAX_TOKENS,
  ): Promise<string> {
    this.logger.debug(
      `Calling OpenAI ${OpenAIAdapter.DEFAULT_MODEL} (max_tokens: ${maxTokens})`,
    );

    const response = await this.client.chat.completions.create({
      model: OpenAIAdapter.DEFAULT_MODEL,
      messages: [{ role: 'user', content: prompt }],
      max_tokens: maxTokens,
      response_format: { type: 'json_object' },
    });

    const content = response.choices[0]?.message?.content;

    if (!content) {
      throw new Error('OpenAI returned an empty response');
    }

    return content;
  }

  /**
   * Get embedding vector for text using text-embedding-3-small
   * @param text The text to embed
   * @returns Embedding vector (1536 dimensions)
   */
  async getEmbedding(text: string): Promise<number[]> {
    this.logger.debug(`Getting embedding for text (${text.length} chars)`);

    const response = await this.client.embeddings.create({
      model: 'text-embedding-3-small',
      input: text,
    });

    const embedding = response.data[0]?.embedding;

    if (!embedding) {
      throw new Error('OpenAI returned an empty embedding');
    }

    return embedding;
  }
}
