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

app.get("/api/stories", async (req, res) => {
  try {
    const response = await axios.get('https://hacker-news.firebaseio.com/v0/newstories.json');

    const promises = response.data.slice(0, 100).map((storyId) => (
        axios.get(`https://hacker-news.firebaseio.com/v0/item/${storyId}.json`).then(res => res.data)
      )
    );
    const result = await Promise.all(promises);
    res.json(result);
  } catch {
    res.status(500).send('Server error');
  }
});

app.use('*', (req, res) => {
  res.status(404).json({ message: 'Page not found' })
})

app.listen(PORT, () => console.log(`server start on port : ${PORT}`));
