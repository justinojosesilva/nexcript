jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { BadRequestException } from '@nestjs/common';
import { ContentProjectRepository } from './content-project.repository';

const mockChannelProfile = {
  id: 'cp-1',
  name: 'Finance Channel',
  platform: 'youtube',
};

const mockProject = {
  id: 'proj-1',
  organizationId: 'org-1',
  channelProfileId: 'cp-1',
  title: 'Finance Tips',
  keyword: 'money management',
  niche: 'finance',
  format: 'long_form',
  status: 'planning',
  durationMinutes: 10,
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrismaService = {
  client: {
    contentProject: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
    },
  },
};

describe('ContentProjectRepository', () => {
  let repo: ContentProjectRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repo = new ContentProjectRepository(mockPrismaService as any);
  });

  it('findByOrg — returns projects with channelProfile included', async () => {
    const withProfile = { ...mockProject, channelProfile: mockChannelProfile };
    mockPrismaService.client.contentProject.findMany.mockResolvedValue([
      withProfile,
    ]);
    const result = await repo.findByOrg('org-1');
    expect(
      mockPrismaService.client.contentProject.findMany,
    ).toHaveBeenCalledWith({
      where: { organizationId: 'org-1' },
      include: {
        channelProfile: {
          select: { id: true, name: true, platform: true },
        },
      },
    });
    expect(result).toHaveLength(1);
    expect(result[0].channelProfile).toEqual(mockChannelProfile);
  });

  it('findById — returns project with channelProfile included', async () => {
    const withProfile = { ...mockProject, channelProfile: mockChannelProfile };
    mockPrismaService.client.contentProject.findUnique.mockResolvedValue(
      withProfile,
    );
    const result = await repo.findById('proj-1');
    expect(
      mockPrismaService.client.contentProject.findUnique,
    ).toHaveBeenCalledWith({
      where: { id: 'proj-1' },
      include: {
        channelProfile: {
          select: { id: true, name: true, platform: true },
        },
      },
    });
    expect(result?.channelProfile).toEqual(mockChannelProfile);
  });

  it('findById — returns null if project not found', async () => {
    mockPrismaService.client.contentProject.findUnique.mockResolvedValue(null);
    const result = await repo.findById('non-existent');
    expect(result).toBeNull();
  });

  it('create — creates and returns project', async () => {
    mockPrismaService.client.contentProject.create.mockResolvedValue(
      mockProject,
    );
    const data = {
      organizationId: 'org-1',
      channelProfileId: 'cp-1',
      title: 'Finance Tips',
      keyword: 'money management',
      niche: 'finance',
      format: 'long_form',
    };
    const result = await repo.create(data);
    expect(mockPrismaService.client.contentProject.create).toHaveBeenCalledWith(
      { data },
    );
    expect(result).toEqual(mockProject);
  });

  it('update — updates and returns project', async () => {
    const updated = { ...mockProject, title: 'Updated Title' };
    mockPrismaService.client.contentProject.update.mockResolvedValue(updated);
    const result = await repo.update('proj-1', { title: 'Updated Title' });
    expect(mockPrismaService.client.contentProject.update).toHaveBeenCalledWith(
      {
        where: { id: 'proj-1' },
        data: { title: 'Updated Title' },
      },
    );
    expect(result).toEqual(updated);
  });

  it('updateStatus — transitions from planning to in_development', async () => {
    mockPrismaService.client.contentProject.findUnique.mockResolvedValue(
      mockProject,
    );
    const updated = { ...mockProject, status: 'in_development' };
    mockPrismaService.client.contentProject.update.mockResolvedValue(updated);

    const result = await repo.updateStatus('proj-1', 'in_development');
    expect(mockPrismaService.client.contentProject.update).toHaveBeenCalledWith(
      {
        where: { id: 'proj-1' },
        data: { status: 'in_development' },
      },
    );
    expect(result).toEqual(updated);
  });

  it('updateStatus — throws BadRequestException for invalid transition', async () => {
    mockPrismaService.client.contentProject.findUnique.mockResolvedValue(
      mockProject,
    );
    await expect(repo.updateStatus('proj-1', 'active')).rejects.toThrow(
      BadRequestException,
    );
    expect(
      mockPrismaService.client.contentProject.update,
    ).not.toHaveBeenCalled();
  });

  it('updateStatus — throws BadRequestException if project not found', async () => {
    mockPrismaService.client.contentProject.findUnique.mockResolvedValue(null);
    await expect(
      repo.updateStatus('non-existent', 'in_development'),
    ).rejects.toThrow('Project not found');
  });

  it('updateStatus — allows transition to archived from any state', async () => {
    const activeProject = { ...mockProject, status: 'active' };
    mockPrismaService.client.contentProject.findUnique.mockResolvedValue(
      activeProject,
    );
    const archived = { ...activeProject, status: 'archived' };
    mockPrismaService.client.contentProject.update.mockResolvedValue(archived);

    const result = await repo.updateStatus('proj-1', 'archived');
    expect(result.status).toBe('archived');
  });
});
