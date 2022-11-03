import express, { Express, Response } from 'express';
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
isProduction && app.use(express.static(path.join(__dirname, "../../client/dist")));
isProduction && app.use('*', (_, res: Response) => res.redirect('/'));
app.use('*', (_, res) => res.status(404).json({ message: 'Page not found' }));

app.listen(PORT, () => console.log(`server start on port : ${PORT} \n Local: http://127.0.0.1:${PORT}`));
