import express, { Express } from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import storyRoutes from './src/StoryRoutes.js';

const PORT = 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const isProduction = process.env.NODE_ENV === 'production'
const app: Express = express();

app.use(cors());
app.use('/api/stories', storyRoutes);

if (isProduction) {
  app.use(express.static(path.join(__dirname, "../client/dist")));
}

app.use('*', (_, res) => {
  res.status(404).json({ message: 'Page not found' })
})

app.listen(PORT, () => console.log(`server start on port : ${PORT}`));
