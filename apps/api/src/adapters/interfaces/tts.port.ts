/**
 * Port interface for Text-to-Speech API integration
 * Defines the contract for AI-powered audio synthesis
 */
export interface SynthesizeInput {
  text: string;
  voiceId: string;
  speed?: number; // 0.5 to 2.0, default 1.0
  tone?: string; // Optional tone guidance
}

export interface SynthesizeOutput {
  audioUrl: string; // Public URL of the audio file
  durationSec: number; // Duration of the audio in seconds
  provider: string; // Name of the TTS provider used
  estimatedCostBrl?: number; // Estimated cost in BRL
}

export interface ITtsPort {
  /**
   * Synthesize text to speech
   * @param input Synthesis parameters
   * @returns Audio URL, duration, and provider information
   * @throws Error if synthesis fails
   */
  synthesize(input: SynthesizeInput): Promise<SynthesizeOutput>;
}
