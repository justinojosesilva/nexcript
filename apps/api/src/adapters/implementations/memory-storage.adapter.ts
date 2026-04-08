import { Injectable } from '@nestjs/common';
import { IStoragePort } from '../interfaces/storage.port';

/**
 * In-memory storage adapter for testing and development.
 * In production, replace with S3StorageAdapter or CloudinaryStorageAdapter
 */
@Injectable()
export class MemoryStorageAdapter implements IStoragePort {
  private storage: Map<string, Buffer> = new Map();

  async uploadFile(
    buffer: Buffer,
    filename: string,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    contentType: string,
  ): Promise<string> {
    this.storage.set(filename, buffer);
    // Return a mock URL that would work in a real scenario
    return `https://storage.example.com/${filename}`;
  }

  /**
   * Get file for testing purposes
   */
  getFile(filename: string): Buffer | undefined {
    return this.storage.get(filename);
  }

  /**
   * Clear all files for testing purposes
   */
  clear(): void {
    this.storage.clear();
  }
}
