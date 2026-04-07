import { Injectable } from '@nestjs/common';
import { type Organization } from '@nexcript/database';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaRepository } from './base/prisma.repository';

@Injectable()
export class OrganizationRepository extends PrismaRepository<Organization> {
  constructor(prismaService: PrismaService) {
    super(prismaService, 'organization');
  }
}
