import { Content } from '@prisma/client';

export type CreateDTO = Omit<Content, 'id'>;
