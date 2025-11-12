import {Router} from 'express';

// Posts
import { uploadPost } from '../controller/post.controller.js';


const uploadRouter = Router();

uploadRouter.get('/', (req, res) => {
    res.send('Upload Route');
});

uploadRouter.post('/post', uploadPost);

export default uploadRouter;
