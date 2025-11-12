import express from 'express';
import { PORT } from './config/env.js';
import cookieParser from 'cookie-parser';
import userRouter from './routes/user.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import authRouter from './routes/auth.routes.js';
import connectDb from './DB/connectDb.js';
import authorizationMiddleware from './middleware/authorization.middleware.js';
import arcjetMiddleware from './middleware/arcjet.middleware.js';
import { authorizeAdmin } from './middleware/authorizeAdmin.middleware.js';
import postRouter from './routes/post.routes.js';

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(arcjetMiddleware);

app.use('/api/v1/users', userRouter);

app.use('/api/v1/subscriptions', subscriptionRouter);

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/post', postRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
}); 

await connectDb();

export default app;