jest.mock('@nexcript/database', () => ({
  prisma: {},
  PrismaClient: jest.fn(),
}));

import { OrganizationRepository } from './organization.repository';

const mockOrg = {
  id: 'org-1',
  name: 'Acme',
  slug: 'acme',
  plan: 'free',
  createdAt: new Date(),
  updatedAt: new Date(),
};

const mockPrismaService = {
  client: {
    organization: {
      findUnique: jest.fn(),
      findMany: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    },
  },
};

describe('OrganizationRepository', () => {
  let repo: OrganizationRepository;

  beforeEach(() => {
    jest.clearAllMocks();
    repo = new OrganizationRepository(mockPrismaService as any);
  });

  it('findById — returns organization when found', async () => {
    mockPrismaService.client.organization.findUnique.mockResolvedValue(mockOrg);
    const result = await repo.findById('org-1');
    expect(
      mockPrismaService.client.organization.findUnique,
    ).toHaveBeenCalledWith({
      where: { id: 'org-1' },
    });
    expect(result).toEqual(mockOrg);
  });

  it('findById — returns null when not found', async () => {
    mockPrismaService.client.organization.findUnique.mockResolvedValue(null);
    const result = await repo.findById('non-existent');
    expect(result).toBeNull();
  });

  it('find — returns all organizations without filter', async () => {
    mockPrismaService.client.organization.findMany.mockResolvedValue([mockOrg]);
    const result = await repo.find();
    expect(mockPrismaService.client.organization.findMany).toHaveBeenCalledWith(
      { where: undefined },
    );
    expect(result).toHaveLength(1);
  });

  it('find — passes where filter to prisma', async () => {
    mockPrismaService.client.organization.findMany.mockResolvedValue([mockOrg]);
    const where = { plan: 'free' };
    await repo.find(where);
    expect(mockPrismaService.client.organization.findMany).toHaveBeenCalledWith(
      { where },
    );
  });

  it('create — creates and returns organization', async () => {
    mockPrismaService.client.organization.create.mockResolvedValue(mockOrg);
    const data = { name: 'Acme', slug: 'acme', plan: 'free' };
    const result = await repo.create(data);
    expect(mockPrismaService.client.organization.create).toHaveBeenCalledWith({
      data,
    });
    expect(result).toEqual(mockOrg);
  });

  it('update — updates and returns organization', async () => {
    const updated = { ...mockOrg, name: 'Acme Corp' };
    mockPrismaService.client.organization.update.mockResolvedValue(updated);
    const result = await repo.update('org-1', { name: 'Acme Corp' });
    expect(mockPrismaService.client.organization.update).toHaveBeenCalledWith({
      where: { id: 'org-1' },
      data: { name: 'Acme Corp' },
    });
    expect(result).toEqual(updated);
  });

  it('delete — deletes organization by id', async () => {
    mockPrismaService.client.organization.delete.mockResolvedValue(mockOrg);
    await repo.delete('org-1');
    expect(mockPrismaService.client.organization.delete).toHaveBeenCalledWith({
      where: { id: 'org-1' },
    });
  });
});
