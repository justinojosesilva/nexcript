import { Injectable } from '@nestjs/common';
import { getAllPromptVersions } from '@nexcript/prompts';

export interface PromptsVersionResponse {
  [category: string]: string;
}

@Injectable()
export class PromptsService {
  /**
   * Get current versions for all prompt categories
   * Respects PROMPT_VERSION_OVERRIDE env var for rollback
   */
  getVersions(): PromptsVersionResponse {
    return getAllPromptVersions();
  }
}
