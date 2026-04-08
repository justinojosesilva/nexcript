import { type Script } from '@nexcript/database';

export interface IScriptRepository {
  create(data: Omit<Script, 'id' | 'createdAt' | 'updatedAt'>): Promise<Script>;
  findById(id: string): Promise<Script | null>;
}
