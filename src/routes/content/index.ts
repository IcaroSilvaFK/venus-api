import { Router } from 'express';

import { contentProvider } from '../../providers/content.provider';

const router = Router();

router.post('/', (req, res) => contentProvider().create(req, res));

export { router };
