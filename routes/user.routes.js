import { Router } from 'express';
import { getUser, getUsers, uploadAvatar } from '../controller/user.controller.js';
import authorizationMiddleware from '../middleware/authorization.middleware.js';
import { authorizeAdmin } from '../middleware/authorizeAdmin.middleware.js';
import multerCore from '../services/upload/multerCore.service.js';

const upload = multerCore.getUploader('uploads/profile');

const userRouter = Router();

userRouter.get('/', authorizationMiddleware, authorizeAdmin, getUsers);

userRouter.get('/:id', authorizationMiddleware, getUser);

userRouter.post('/avatar', authorizationMiddleware, upload.single('avatar'), uploadAvatar);

userRouter.post('/', (req, res) => {
    res.send('Create new User');
});

userRouter.put('/:id', (req, res) => {
    res.send('Update user details');
});
userRouter.delete('/:id', (req, res) => {
    res.send('Delete user details');
});

export default userRouter;