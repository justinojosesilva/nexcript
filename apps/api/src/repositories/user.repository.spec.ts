jest.mock('@nexvideo/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { UserRepository } from './user.repository';

const mockUser = {
  id: 'user-1',
  organizationId: 'org-1',
  email: 'alice@example.com',
  name: 'Alice',
  role: 'creator',
  passwordHash: 'hash',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrismaService = {
  client: {
    user: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
};

describe('UserRepository', () => {
  let repo: UserRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repo = new UserRepository(mockPrismaService as any);
  });

  it('findById — returns user when found', async () => {
    mockPrismaService.client.user.findUnique.mockResolvedValue(mockUser);
    const result = await repo.findById('user-1');
    expect(mockPrismaService.client.user.findUnique).toHaveBeenCalledWith({
      where: { id: 'user-1' },
    });
    expect(result).toEqual(mockUser);
  });

  it('findById — returns null when not found', async () => {
    mockPrismaService.client.user.findUnique.mockResolvedValue(null);
    const result = await repo.findById('non-existent');
    expect(result).toBeNull();
  });

  it('find — returns all users without filter', async () => {
    mockPrismaService.client.user.findMany.mockResolvedValue([mockUser]);
    const result = await repo.find();
    expect(mockPrismaService.client.user.findMany).toHaveBeenCalledWith({
      where: undefined,
    });
    expect(result).toHaveLength(1);
  });

  it('find — passes where filter to prisma', async () => {
    mockPrismaService.client.user.findMany.mockResolvedValue([mockUser]);
    const where = { organizationId: 'org-1' };
    await repo.find(where);
    expect(mockPrismaService.client.user.findMany).toHaveBeenCalledWith({
      where,
    });
  });

  it('create — creates and returns user', async () => {
    mockPrismaService.client.user.create.mockResolvedValue(mockUser);
    const data = {
      organizationId: 'org-1',
      email: 'alice@example.com',
      name: 'Alice',
      role: 'creator',
      passwordHash: 'hash',
    };
    const result = await repo.create(data);
    expect(mockPrismaService.client.user.create).toHaveBeenCalledWith({ data });
    expect(result).toEqual(mockUser);
  });

  it('update — updates and returns user', async () => {
    const updated = { ...mockUser, name: 'Alice Updated' };
    mockPrismaService.client.user.update.mockResolvedValue(updated);
    const result = await repo.update('user-1', { name: 'Alice Updated' });
    expect(mockPrismaService.client.user.update).toHaveBeenCalledWith({
      where: { id: 'user-1' },
      data: { name: 'Alice Updated' },
    });
    expect(result).toEqual(updated);
  });

  it('delete — deletes user by id', async () => {
    mockPrismaService.client.user.delete.mockResolvedValue(mockUser);
    await repo.delete('user-1');
    expect(mockPrismaService.client.user.delete).toHaveBeenCalledWith({
      where: { id: 'user-1' },
    });
  });
});
