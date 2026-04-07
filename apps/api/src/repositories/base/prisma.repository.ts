/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import { PrismaService } from '../../prisma/prisma.service';
import { IRepository } from '../interfaces/repository.interface';

export abstract class PrismaRepository<T> implements IRepository<T> {
  constructor(
    protected readonly prismaService: PrismaService,
    private readonly modelName: string,
  ) {}

  private get model(): any {
    return (this.prismaService.client as any)[this.modelName];
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findUnique({ where: { id } }) as Promise<T | null>;
  }

  async find(where?: Record<string, unknown>): Promise<T[]> {
    return this.model.findMany({ where }) as Promise<T[]>;
  }

  async create(data: Record<string, unknown>): Promise<T> {
    return this.model.create({ data }) as Promise<T>;
  }

  async update(id: string, data: Record<string, unknown>): Promise<T> {
    return this.model.update({ where: { id }, data }) as Promise<T>;
  }

  async delete(id: string): Promise<void> {
    await this.model.delete({ where: { id } });
  }
}
