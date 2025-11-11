import User from '../models/user.model.js';
import { JWT_ACCESS_SECRET } from '../config/env.js';   
import jwt from 'jsonwebtoken';
async function getUsers(req,res){
    const token = req.cookies.token;
    const user = await User.findOne();
    res.status(200).json(user);
}


async function getUser(req,res){
    const userId = req.params.id;
    const user = await User.findById(userId).select('-password -refreshToken');
    if(!user){
        return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json({ data: user });
}

export { getUsers, getUser };