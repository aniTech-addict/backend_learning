import { Router} from 'express';
import { createPost } from '../controller/post.controller.js';

const uploadRouter = Router();

uploadRouter.post('/post', createPost);

export default uploadRouter