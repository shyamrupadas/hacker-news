import express from 'express';
import CommentController from './CommentController.js';

const commentRoutes = express.Router();

commentRoutes.get('/:id', CommentController.getOne);

export default commentRoutes;
