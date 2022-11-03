import { Request, Response } from 'express';
import { getItem } from './api.js';

class CommentController {
  async getOne(req: Request, res: Response) {
    try {
      const result = await getItem(req.params.id)

      res.json(result);
    } catch (e) {
      res.status(500).json(e);
    }
  };
}

export default new CommentController();
