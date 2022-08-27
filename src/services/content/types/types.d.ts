import { Content } from '@prisma/client';

export interface IContentService {
  create(data: ContentProps): Promise<Content | undefined>;
  update(id: string, data: Partial<ContentProps>): Promise<Content | undefined>;
  delete(id: string): Promise<void>;
  findFirst(id: string): Promise<Content>;
  findMany(): Promise<Content[] | undefined>;
}

export type ContentProps = Omit<Content, 'id'>;
