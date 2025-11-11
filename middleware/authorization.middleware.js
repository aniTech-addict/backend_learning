import { JWT_ACCESS_SECRET } from '../config/env.js';
import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';
const authorizationMiddleware = async (req,res,next)=>{
    let token = req.cookies.token;
    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    token = jwt.decode(token, JWT_ACCESS_SECRET);
    const user = await User.findById(token.userId);

    if(!user){
        const error = new Error('Unauthorized');
        Error.status = 401;
        return next(Error);
    }

    next();

}

export default authorizationMiddleware;
