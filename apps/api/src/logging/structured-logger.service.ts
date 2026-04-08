import { Injectable, Logger } from '@nestjs/common';

export type LogLevel = 'DEBUG' | 'INFO' | 'WARN' | 'ERROR';

export interface JobLog {
  timestamp?: string;
  level: LogLevel;
  jobId: string;
  organizationId?: string;
  type: 'script' | 'narration';
  durationMs?: number;
  costBrl?: number;
  provider?: string;
  status: 'started' | 'completed' | 'failed' | 'queued';
  errorCode?: string;
  errorMessage?: string;
  queueWaitMs?: number;
  processingMs?: number;
  [key: string]: unknown;
}

@Injectable()
export class StructuredLoggerService {
  private readonly logger = new Logger(StructuredLoggerService.name);

  /**
   * Log a job event with structured JSON
   */
  logJob(log: JobLog): void {
    const entry = {
      ...log,
      timestamp: log.timestamp || new Date().toISOString(),
    };

    // Output as JSON string for easy parsing
    this.logger.log(JSON.stringify(entry));
  }

  /**
   * Log cost warning when exceeding 80% of max budget
   */
  logCostWarning(
    jobId: string,
    organizationId: string,
    costBrl: number,
    maxCostBrl: number,
  ): void {
    const percentageOfMax = (costBrl / maxCostBrl) * 100;

    this.logJob({
      timestamp: new Date().toISOString(),
      level: 'WARN',
      jobId,
      organizationId,
      type: 'script',
      status: 'completed',
      costBrl,
      errorCode: 'COST_WARNING',
      errorMessage: `Cost exceeded 80% threshold: ${percentageOfMax.toFixed(1)}% of max budget`,
    });
  }

  /**
   * Log API error with provider and error code
   */
  logApiError(
    jobId: string,
    organizationId: string,
    provider: string,
    errorCode: string,
    errorMessage: string,
    type: 'script' | 'narration' = 'script',
  ): void {
    // Never log full error if it might contain API keys
    const sanitizedMessage = this.sanitizeErrorMessage(errorMessage, provider);

    this.logJob({
      timestamp: new Date().toISOString(),
      level: 'ERROR',
      jobId,
      organizationId,
      type,
      provider,
      status: 'failed',
      errorCode,
      errorMessage: sanitizedMessage,
    });
  }

  /**
   * Log job start with queue wait time
   */
  logJobStart(
    jobId: string,
    organizationId: string,
    type: 'script' | 'narration',
    queueWaitMs: number,
  ): void {
    this.logJob({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      jobId,
      organizationId,
      type,
      status: 'started',
      queueWaitMs,
    });
  }

  /**
   * Log job completion with all metrics
   */
  logJobCompletion(
    jobId: string,
    organizationId: string,
    type: 'script' | 'narration',
    processingMs: number,
    costBrl: number,
    provider: string,
  ): void {
    this.logJob({
      timestamp: new Date().toISOString(),
      level: 'INFO',
      jobId,
      organizationId,
      type,
      status: 'completed',
      processingMs,
      costBrl,
      provider,
      durationMs: processingMs,
    });
  }

  /**
   * Sanitize error messages to remove sensitive data
   */
  private sanitizeErrorMessage(
    message: string,
    provider: string,
  ): string {
    let sanitized = message;

    // Remove common API key patterns
    sanitized = sanitized.replace(
      /api[_-]?key[:\s='"]+[a-zA-Z0-9_-]{20,}/gi,
      'api_key=***',
    );
    sanitized = sanitized.replace(/bearer\s+[a-zA-Z0-9_-]+/gi, 'bearer ***');
    sanitized = sanitized.replace(/token[:\s='"]+[a-zA-Z0-9_-]{20,}/gi,
      'token=***');

    // Provider-specific sanitization
    if (provider.toLowerCase() === 'elevenlabs') {
      sanitized = sanitized.replace(/[a-z0-9]{32,}/gi, (match) => {
        // ElevenLabs IDs are typically 32 chars
        if (match.length >= 32) {
          return `${match.substring(0, 4)}***${match.substring(match.length - 4)}`;
        }
        return match;
      });
    }

    return sanitized;
  }
}
