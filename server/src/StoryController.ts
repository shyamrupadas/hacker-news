import { Request, Response } from 'express';
import { getItem, getStories } from './api.js';

class StoryController {
  async getAll(_, res: Response) {
    try {
      const response = await getStories();

      const promises = response.slice(0, 100).map((storyId: string) => getItem(storyId));

      const result = await Promise.allSettled(promises);
      res.json(result.map((res: any) => res.value));
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req: Request, res: Response) {
    try {
      const result = await getItem(req.params.id);

      res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new StoryController();
