jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { ChannelProfileRepository } from './channel-profile.repository';

const mockProfile = {
  id: 'cp-1',
  organizationId: 'org-1',
  userId: 'user-1',
  name: 'Finance Channel',
  platform: 'youtube',
  niche: 'finance',
  tone: 'formal',
  narrationStyle: 'professional',
  languageCode: 'pt-BR',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrismaService = {
  client: {
    channelProfile: {
      findMany: jest.fn(),
      findUnique: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
};

describe('ChannelProfileRepository', () => {
  let repo: ChannelProfileRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repo = new ChannelProfileRepository(mockPrismaService as any);
  });

  it('findByOrg — filters by organizationId', async () => {
    mockPrismaService.client.channelProfile.findMany.mockResolvedValue([
      mockProfile,
    ]);
    const result = await repo.findByOrg('org-1');
    expect(
      mockPrismaService.client.channelProfile.findMany,
    ).toHaveBeenCalledWith({
      where: { organizationId: 'org-1' },
    });
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(mockProfile);
  });

  it('findByOrg — returns empty array when org has no profiles', async () => {
    mockPrismaService.client.channelProfile.findMany.mockResolvedValue([]);
    const result = await repo.findByOrg('org-empty');
    expect(result).toEqual([]);
  });

  it('findById — returns profile when found', async () => {
    mockPrismaService.client.channelProfile.findUnique.mockResolvedValue(
      mockProfile,
    );
    const result = await repo.findById('cp-1');
    expect(
      mockPrismaService.client.channelProfile.findUnique,
    ).toHaveBeenCalledWith({
      where: { id: 'cp-1' },
    });
    expect(result).toEqual(mockProfile);
  });

  it('findById — returns null when not found', async () => {
    mockPrismaService.client.channelProfile.findUnique.mockResolvedValue(null);
    const result = await repo.findById('non-existent');
    expect(result).toBeNull();
  });

  it('create — creates and returns channel profile', async () => {
    mockPrismaService.client.channelProfile.create.mockResolvedValue(
      mockProfile,
    );
    const data = {
      organizationId: 'org-1',
      userId: 'user-1',
      name: 'Finance Channel',
      platform: 'youtube',
      niche: 'finance',
      tone: 'formal',
      narrationStyle: 'professional',
    };
    const result = await repo.create(data);
    expect(mockPrismaService.client.channelProfile.create).toHaveBeenCalledWith(
      { data },
    );
    expect(result).toEqual(mockProfile);
  });

  it('update — updates and returns channel profile', async () => {
    const updated = { ...mockProfile, name: 'Tech Channel' };
    mockPrismaService.client.channelProfile.update.mockResolvedValue(updated);
    const result = await repo.update('cp-1', { name: 'Tech Channel' });
    expect(mockPrismaService.client.channelProfile.update).toHaveBeenCalledWith(
      {
        where: { id: 'cp-1' },
        data: { name: 'Tech Channel' },
      },
    );
    expect(result).toEqual(updated);
  });

  it('delete — deletes channel profile by id', async () => {
    mockPrismaService.client.channelProfile.delete.mockResolvedValue(
      mockProfile,
    );
    await repo.delete('cp-1');
    expect(mockPrismaService.client.channelProfile.delete).toHaveBeenCalledWith(
      {
        where: { id: 'cp-1' },
      },
    );
  });
});
