export interface IRepository<T> {
  find(where?: Record<string, unknown>): Promise<T[]>;
  findById(id: string): Promise<T | null>;
  create(data: Record<string, unknown>): Promise<T>;
  update(id: string, data: Record<string, unknown>): Promise<T>;
  delete(id: string): Promise<void>;
}
