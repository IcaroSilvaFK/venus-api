import express from 'express';
import cors from 'cors';

import { contentRoute } from './routes';

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(cors());
app.use(contentRoute);

export { app };
