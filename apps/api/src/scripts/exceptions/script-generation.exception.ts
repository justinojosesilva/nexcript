export class ScriptGenerationException extends Error {
  constructor(
    message: string,
    public readonly originalError?: Error,
  ) {
    super(message);
    this.name = 'ScriptGenerationException';
  }
}
