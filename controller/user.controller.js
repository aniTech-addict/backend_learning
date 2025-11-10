import User from '../models/user.model.js';
import { JWT_SECRET_KEY } from '../config/env.js';
import jwt from 'jsonwebtoken';
async function getUsers(req,res){
    const token = req.cookies.token;
    const user = await User.findOne();
    res.status(200).json(user);
}

async function getUser(req,res){
    let token = req.cookies.token;
    token = jwt.decode(token, JWT_SECRET_KEY);
    const user = await User.findById(token.userId).select('-password');
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ data: user });
}

export { getUsers, getUser };