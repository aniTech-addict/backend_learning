import jwt from 'jsonwebtoken';
import { JWT_ACCESS_SECRET, JWT_REFRESH_SECRET } from '../config/env.js';
async function createAccessToken(userObj){
    try{
        const token = jwt.sign(userObj, JWT_ACCESS_SECRET);
        return token;
    }catch(err){
        console.error('Token creation error:', err);
        throw err;
    }
}

async function createRefreshToken(userObj){
    try{
        const token = jwt.sign(userObj, JWT_REFRESH_SECRET);
        return token;
    }catch(err) {
        console.error('Token creation error:', err);
        throw err;
    }
}

export {
    createAccessToken
}