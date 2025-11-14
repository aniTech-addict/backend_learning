import { Router } from 'express';
import upload from '../middleware/multer.middleware.js';
import uploadAvatar from '../controller/user.controller.js';
// Posts
import { uploadPost } from '../controller/post.controller.js';

const uploadRouter = Router();

uploadRouter.get('/', (req, res) => {
    res.send('Upload Route');
});
uploadRouter.post('/profile', upload.single('avatar'), uploadAvatar);
uploadRouter.post('/post', upload.single('avatar'), uploadPost);

export default uploadRouter;
