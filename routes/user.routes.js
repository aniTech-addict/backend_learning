import { Router } from 'express';
import { getUser, getUsers } from '../controller/user.controller.js';
import authorizationMiddleware from '../middleware/authorization.middleware.js';

const userRouter = Router();

userRouter.get('/',getUsers);

userRouter.get('/:id', authorizationMiddleware, getUser);

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