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

async function uploadAvatar(req, res) {
    try {
        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
        const userId = req.user._id;

        const updatedUser = await User.findByIdAndUpdate(
            userId,
            { avatar: req.file.path },
            { new: true }
        ).select('-password -refreshToken');

        if (!updatedUser) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({
            message: 'Avatar uploaded successfully',
            data: updatedUser
        });

    } catch (error) {
        console.error('Avatar upload error:', error);
        res.status(500).json({ error: 'Avatar upload failed' });
    }
}

export { getUsers, getUser, uploadAvatar };