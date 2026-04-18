import { type Script } from '@nexvideo/database';

export interface IScriptRepository {
  create(data: Omit<Script, 'id' | 'createdAt' | 'updatedAt'>): Promise<Script>;
  findById(id: string): Promise<Script | null>;
  findByOrganizationAndDateRange(
    organizationId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<Script[]>;
}
