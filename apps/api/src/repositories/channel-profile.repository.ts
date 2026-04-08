import { Injectable } from '@nestjs/common';
import { type ChannelProfile } from '@nexcript/database';
import { PrismaService } from '../prisma/prisma.service';
import { IChannelProfileRepository } from './channel-profile.repository.interface';

@Injectable()
export class ChannelProfileRepository implements IChannelProfileRepository {
  constructor(private readonly prismaService: PrismaService) {}

  findByOrg(organizationId: string): Promise<ChannelProfile[]> {
    return this.prismaService.client.channelProfile.findMany({
      where: { organizationId },
    });
  }

  findById(id: string): Promise<ChannelProfile | null> {
    return this.prismaService.client.channelProfile.findUnique({
      where: { id },
    });
  }

  create(data: Record<string, unknown>): Promise<ChannelProfile> {
    return this.prismaService.client.channelProfile.create({
      data: data as any,
    });
  }

  update(id: string, data: Record<string, unknown>): Promise<ChannelProfile> {
    return this.prismaService.client.channelProfile.update({
      where: { id },

      data: data as any,
    });
  }

  async delete(id: string): Promise<void> {
    await this.prismaService.client.channelProfile.delete({ where: { id } });
  }
}
