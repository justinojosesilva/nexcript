/**
 * Port interface for file storage (S3, Cloudinary, etc.)
 */
export interface IStoragePort {
  /**
   * Upload a file to storage
   * @param buffer File buffer
   * @param filename File name (used for public URL)
   * @param contentType MIME type
   * @returns Public URL of the uploaded file
   */
  uploadFile(
    buffer: Buffer,
    filename: string,
    contentType: string,
  ): Promise<string>;
}
