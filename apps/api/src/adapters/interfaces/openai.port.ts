/**
 * Port interface for OpenAI API integration
 * Defines the contract for AI-powered content analysis
 */
export interface IOpenAIPort {
  /**
   * Complete a chat prompt and return the text response
   * @param prompt The user prompt to send
   * @param maxTokens Maximum tokens in the response (controls cost)
   * @returns The model's text response
   * @throws Error if the API call fails
   */
  complete(prompt: string, maxTokens?: number): Promise<string>;
}
