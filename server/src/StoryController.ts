import { Response } from 'express';
import axios from 'axios';


const BASE_URL = 'https://hacker-news.firebaseio.com/v0/';
const STORIES_URL = `${BASE_URL}newstories.json`;
const STORY_URL = `${BASE_URL}item/`;

class StoryController {
  async getAll(_, res: Response) {
    try {
      const response = await axios.get(STORIES_URL);

      const promises = response.data
        .slice(0, 100)
        .map((storyId: number) => (
            axios.get(`${STORY_URL}${storyId}.json`)
              .then(res => res.data)
          )
        );

      const result = await Promise.all(promises);
      res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new StoryController();
