import { Injectable } from '@nestjs/common';
import { type Script } from '@nexcript/database';
import { PrismaService } from '../prisma/prisma.service';
import { IScriptRepository } from './script.repository.interface';

@Injectable()
export class ScriptRepository implements IScriptRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async create(
    data: Omit<Script, 'id' | 'createdAt' | 'updatedAt'>,
  ): Promise<Script> {
    return this.prismaService.client.script.create({
      data: data as any,
    });
  }

  async findById(id: string): Promise<Script | null> {
    return this.prismaService.client.script.findUnique({
      where: { id },
    });
  }

  async findByOrganizationAndDateRange(
    organizationId: string,
    startDate: Date,
    endDate: Date,
  ): Promise<Script[]> {
    return this.prismaService.client.script.findMany({
      where: {
        createdAt: {
          gte: startDate,
          lte: endDate,
        },
        contentProject: {
          organizationId: organizationId,
        },
      },
      orderBy: {
        createdAt: 'desc',
      },
    });
  }
}
