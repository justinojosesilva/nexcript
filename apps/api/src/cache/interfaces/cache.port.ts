export interface ICachePort {
  /**
   * Get a value from cache
   * @param key Cache key
   * @returns Cached value or null if not found
   */
  get<T>(key: string): Promise<T | null>;

  /**
   * Set a value in cache
   * @param key Cache key
   * @param value Value to cache
   * @param ttlSeconds Optional TTL in seconds
   */
  set<T>(key: string, value: T, ttlSeconds?: number): Promise<void>;

  /**
   * Delete a key from cache
   * @param key Cache key
   */
  delete(key: string): Promise<void>;

  /**
   * Invalidate all keys matching a prefix pattern
   * @param prefix Prefix to match
   */
  invalidateByPrefix(prefix: string): Promise<void>;
}
