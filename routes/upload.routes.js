import { Router } from 'express';
import { uploadAvatar } from '../controller/user.controller.js';
// Posts
import { uploadPost } from '../controller/post.controller.js';
import multerCore from '../services/upload/multerCore.service.js';

const upload = multerCore.getUploader('uploads/posts/images');

const uploadRouter = Router();

uploadRouter.get('/', (req, res) => {
    res.send('Upload Route');
});
uploadRouter.post('/profile', upload.single('avatar'), uploadAvatar);
uploadRouter.post('/post', upload.single('avatar'), uploadPost);

export default uploadRouter;
