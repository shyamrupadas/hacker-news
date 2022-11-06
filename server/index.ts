import express, { Express, Response } from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import storyRoutes from './src/StoryRoutes.js';
import commentRoutes from './src/CommentRoutes.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production';
const PORT = isProduction ? process.env.PORT || 3000 : 5000;
const app: Express = express();

app.use(cors());
app.use('/api/stories', storyRoutes);
app.use('/api/comments', commentRoutes);

isProduction && app.use(express.static(path.join(__dirname, '../../client/dist')));
isProduction &&
  app.use('*', (_, res: Response) => {
    res.sendFile('index.html', { root: path.join(__dirname, '../../client/dist') });
  });

app.use('*', (_, res) => res.status(404).json({ message: 'Page not found' }));

app.listen(PORT, () =>
  console.log(`server start on port : ${PORT} \n Local: http://127.0.0.1:${PORT}`)
);
