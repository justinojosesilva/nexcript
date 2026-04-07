import { BadRequestException, Injectable } from '@nestjs/common';
import { type ContentProject } from '@nexcript/database';
import { PrismaService } from '../prisma/prisma.service';
import {
  ContentProjectWithChannelProfile,
  IContentProjectRepository,
} from './content-project.repository.interface';

const VALID_TRANSITIONS: Record<string, string[]> = {
  planning: ['in_development', 'archived'],
  in_development: ['in_review', 'archived'],
  in_review: ['active', 'paused', 'archived'],
  active: ['paused', 'archived'],
  paused: ['active', 'archived'],
  archived: [],
};

@Injectable()
export class ContentProjectRepository implements IContentProjectRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByOrg(
    organizationId: string,
  ): Promise<ContentProjectWithChannelProfile[]> {
    return this.prismaService.client.contentProject.findMany({
      where: { organizationId },
      include: {
        channelProfile: {
          select: { id: true, name: true, platform: true },
        },
      },
    }) as Promise<ContentProjectWithChannelProfile[]>;
  }

  findById(id: string): Promise<ContentProjectWithChannelProfile | null> {
    return this.prismaService.client.contentProject.findUnique({
      where: { id },
      include: {
        channelProfile: {
          select: { id: true, name: true, platform: true },
        },
      },
    }) as Promise<ContentProjectWithChannelProfile | null>;
  }

  create(data: Record<string, unknown>): Promise<ContentProject> {
    return this.prismaService.client.contentProject.create({
       
      data: data as any,
    });
  }

  update(id: string, data: Record<string, unknown>): Promise<ContentProject> {
    return this.prismaService.client.contentProject.update({
      where: { id },
       
      data: data as any,
    });
  }

  async updateStatus(id: string, newStatus: string): Promise<ContentProject> {
    const project = await this.prismaService.client.contentProject.findUnique({
      where: { id },
    });

    if (!project) {
      throw new BadRequestException('Project not found');
    }

    const currentStatus = project.status;
    const validTransitions = VALID_TRANSITIONS[currentStatus] || [];

    if (!validTransitions.includes(newStatus)) {
      throw new BadRequestException(
        `Cannot transition from ${currentStatus} to ${newStatus}`,
      );
    }

    return this.prismaService.client.contentProject.update({
      where: { id },
       
      data: { status: newStatus as any },
    });
  }
}
