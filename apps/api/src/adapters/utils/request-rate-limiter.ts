/**
 * Simple rate limiter to prevent exceeding API quotas
 * Enforces a minimum delay between consecutive requests
 */
export class RequestRateLimiter {
  private lastRequestTime: number = 0;
  private minDelayMs: number;

  constructor(minDelayMs: number = 1000) {
    this.minDelayMs = minDelayMs;
  }

  /**
   * Wait if necessary to respect the minimum delay between requests
   */
  async waitIfNeeded(): Promise<void> {
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;

    if (timeSinceLastRequest < this.minDelayMs) {
      const delayNeeded = this.minDelayMs - timeSinceLastRequest;
      await new Promise((resolve) => setTimeout(resolve, delayNeeded));
    }

    this.lastRequestTime = Date.now();
  }

  /**
   * Reset the rate limiter
   */
  reset(): void {
    this.lastRequestTime = 0;
  }
}
