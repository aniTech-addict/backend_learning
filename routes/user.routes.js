import { Router } from 'express';

const userRouter = Router();

userRouter.get('/', (req, res) => {
    res.send('get All user details');
});

userRouter.get('/:id', (req, res) => {
    res.send('Get user details');
});

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