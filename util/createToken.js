import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../config/env.js';
async function createAccessToken(userObj){
    try{
        const token = jwt.sign(userObj, JWT_SECRET_KEY);
        return token;
    }catch(err){
        console.error('Token creation error:', err);
        throw err;
    }
}

export {
    createAccessToken
}