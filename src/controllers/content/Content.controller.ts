import { Request, Response } from 'express';

import { IContentService } from '../../services/content/types/types';
import { createContentValdiation } from '../../helpers/createContent';
import { AppErrors } from '../../errors/App.error';

import { IContentController } from './types/types';
import { CreateDTO } from '../../DTOs/content/create';

export class ContentController implements IContentController {
  constructor(private readonly contentService: IContentService) {}
  async create(request: Request, response: Response): Promise<Response> {
    const data: CreateDTO = request.body;

    if (!createContentValdiation(data)) {
      return response.status(400).json({
        message: 'Is missing a fields',
      });
    }

    try {
      const content = await this.contentService.create(data);

      return response.status(201).json({
        message: 'Created success',
        content,
      });
    } catch (err) {
      if (err instanceof AppErrors) {
        return response.status(err.status).json({
          message: err.message,
          err: err.error,
        });
      }
      return response.status(500).json({
        message: 'Internal server error',
      });
    }
  }
  async update(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  async delete(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  async findFirst(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
  async findMany(request: Request, response: Response): Promise<Response> {
    throw new Error('Method not implemented.');
  }
}
