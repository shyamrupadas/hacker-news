import express, { Express } from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import storyRoutes from './src/StoryRoutes.js';

const PORT = 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app: Express = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../../client/dist")));
app.use('/api/stories', storyRoutes);

app.listen(PORT, () => console.log(`server start on port : ${PORT} \n Local: http://127.0.0.1:${PORT}`));
