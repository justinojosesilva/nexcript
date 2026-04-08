import { Injectable } from '@nestjs/common';
import { prisma } from '@nexcript/database';
import { type Script } from '@nexcript/database';

@Injectable()
export class GetScriptsUseCase {
  async execute(projectId: string, organizationId: string): Promise<Script[]> {
    // Verify project belongs to organization
    const project = await prisma.contentProject.findFirst({
      where: {
        id: projectId,
        organizationId,
      },
    });

    if (!project) {
      throw new Error('Project not found');
    }

    const scripts = await prisma.script.findMany({
      where: {
        projectId,
      },
      orderBy: {
        createdAt: 'desc',
      },
    });

    return scripts;
  }

  async getById(id: string, organizationId: string): Promise<Script> {
    const script = await prisma.script.findUnique({
      where: {
        id,
      },
      include: {
        contentProject: {
          select: {
            organizationId: true,
          },
        },
      },
    });

    if (!script || script.contentProject.organizationId !== organizationId) {
      throw new Error('Script not found');
    }

    return script;
  }
}
