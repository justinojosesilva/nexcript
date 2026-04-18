import { Injectable } from '@nestjs/common';
import { type User } from '@nexvideo/database';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaRepository } from './base/prisma.repository';

@Injectable()
export class UserRepository extends PrismaRepository<User> {
  constructor(prismaService: PrismaService) {
    super(prismaService, 'user');
  }
}
