import { ContentRepositorie } from '../repositories/content/content.repositorie';
import { ContentService } from '../services/content/Content.service';
import { ContentController } from '../controllers/content/Content.controller';

export function contentProvider() {
  const contentRepositorie = new ContentRepositorie();
  const contentService = new ContentService(contentRepositorie);
  const contentController = new ContentController(contentService);

  return contentController;
}
