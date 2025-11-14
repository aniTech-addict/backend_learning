import express from 'express';

//Config
import { PORT } from './config/env.js';
import cookieParser from 'cookie-parser';
import connectDb from './DB/connectDb.js';


//Security
import arcjetMiddleware from './middleware/arcjet.middleware.js';

//Authorization
import authRouter from './routes/auth.routes.js';
import authorizationMiddleware from './middleware/authorization.middleware.js';
import { authorizeAdmin } from './middleware/authorizeAdmin.middleware.js';

//Routers
import userRouter from './routes/user.routes.js';
import uploadRouter from './routes/upload.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';

//apply  arcjet middleware later

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(arcjetMiddleware);

// Serve uploaded files
app.use('/uploads', express.static('uploads'));

app.use('/api/v1/users', userRouter);

app.use('/api/v1/subscriptions', subscriptionRouter);

app.use('/api/v1/auth', authRouter);

app.use('/api/v1/upload', uploadRouter);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`);
}); 

await connectDb();

export default app;