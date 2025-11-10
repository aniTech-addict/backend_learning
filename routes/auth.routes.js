import { Router } from 'express';

const authRouter = Router();

authRouter.get('/login', (req, res) => {
    res.send('login');
});

export default authRouter;