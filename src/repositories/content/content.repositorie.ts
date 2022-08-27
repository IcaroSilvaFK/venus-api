import { Content } from '@prisma/client';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';

import { prismaClient } from '../../configs/global/prisma';
import { AppErrors } from '../../errors/App.error';

import { IContentRepositorie, ContentProps } from './types/types';

export class ContentRepositorie implements IContentRepositorie {
  async create(data: ContentProps): Promise<Content | undefined> {
    try {
      return await prismaClient.content.create({
        data: {
          ...data,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P1001': {
            throw new AppErrors(err.message, 500, err.cause);
          }
          case 'P1010': {
            throw new AppErrors(err.message, 403, err.cause);
          }
          case 'P2000': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          case 'P2006': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          default: {
            throw new AppErrors(err.message, 500, err.cause);
          }
        }
      }
      throw new AppErrors('Internal server error', 500);
    }
  }
  async update(id: string, data: Partial<ContentProps>) {
    try {
      return await prismaClient.content.update({
        where: {
          id,
        },
        data: {
          ...data,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P1001': {
            throw new AppErrors(err.message, 500, err.cause);
          }
          case 'P1010': {
            throw new AppErrors(err.message, 403, err.cause);
          }
          case 'P2000': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          case 'P2006': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          default: {
            throw new AppErrors(err.message, 500, err.cause);
          }
        }
      }
      throw new AppErrors('Internal server error', 500);
    }
  }
  async delete(id: string) {
    try {
      await prismaClient.content.delete({
        where: {
          id,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P1001': {
            throw new AppErrors(err.message, 500, err.cause);
          }
          case 'P1010': {
            throw new AppErrors(err.message, 403, err.cause);
          }
          case 'P2000': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          case 'P2015': {
            throw new AppErrors(err.message, 404, err.cause);
          }
          default: {
            throw new AppErrors(err.message, 500, err.cause);
          }
        }
      }
      throw new AppErrors('Internal server error', 500);
    }
  }
  async findFirst(id: string) {
    try {
      return await prismaClient.content.findFirstOrThrow({
        where: {
          id,
        },
      });
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P1001': {
            throw new AppErrors(err.message, 500, err.cause);
          }
          case 'P1010': {
            throw new AppErrors(err.message, 403, err.cause);
          }
          case 'P2000': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          case 'P2006': {
            throw new AppErrors(err.message, 400, err.cause);
          }
          default: {
            throw new AppErrors(err.message, 500, err.cause);
          }
        }
      }
      throw new AppErrors('Internal server error', 500);
    }
  }
  async findMany() {
    try {
      return await prismaClient.content.findMany();
    } catch (err) {
      if (err instanceof PrismaClientKnownRequestError) {
        switch (err.code) {
          case 'P1001': {
            throw new AppErrors(err.message, 500, err.cause);
          }
          case 'P1010': {
            throw new AppErrors(err.message, 403, err.cause);
          }
          default: {
            throw new AppErrors(err.message, 500, err.cause);
          }
        }
      }
      throw new AppErrors('Internal server error', 500);
    }
  }
}
