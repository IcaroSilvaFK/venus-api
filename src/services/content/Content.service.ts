import { ContentProps, IContentService } from './types/types';

import { IContentRepositorie } from '../../repositories/content/types/types';
import { Content } from '@prisma/client';

export class ContentService implements IContentService {
  constructor(private readonly contentRepositorie: IContentRepositorie) {}
  async create(data: ContentProps): Promise<Content | undefined> {
    return this.contentRepositorie.create(data);
  }
  async update(
    id: string,
    data: Partial<ContentProps>,
  ): Promise<Content | undefined> {
    return this.contentRepositorie.update(id, data);
  }
  async delete(id: string): Promise<void> {
    await this.contentRepositorie.delete(id);
  }
  async findFirst(id: string): Promise<Content> {
    return await this.contentRepositorie.findFirst(id);
  }
  async findMany(): Promise<Content[] | undefined> {
    return await this.contentRepositorie.findMany();
  }
}
