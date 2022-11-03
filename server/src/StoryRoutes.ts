import express from 'express';
import StoryController from './StoryController.js';

const storyRoutes = express.Router();

storyRoutes.get('', StoryController.getAll);
storyRoutes.get('/:id', StoryController.getOne);

export default storyRoutes;
