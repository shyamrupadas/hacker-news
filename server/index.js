import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import path from 'path';
import axios from 'axios';

const PORT = 5000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const isProduction = process.env.NODE_ENV === 'production'

const app = express();

app.use(cors());

if (isProduction) {
  app.use(express.static(path.join(__dirname, "../dist")));
}

app.get("/api", (req, res) => {
  res.json([1, 2, 3, 4]);
});

app.get("/api/stories-ids", async (req, res) => {
  const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');
  res.json(response.data);
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' })
})

app.listen(PORT, () => console.log(`server start on port : ${PORT}`));
