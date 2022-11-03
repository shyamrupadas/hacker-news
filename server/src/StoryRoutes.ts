import express from 'express';
import StoryController from './StoryController.js';

const storyRoutes = express.Router();

storyRoutes.get('', StoryController.getAll);

export default storyRoutes;
