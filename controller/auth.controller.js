import mongoose, { startSession } from "mongoose"
import User from '../models/user.model.js';
import { createAccessToken, createRefreshToken} from '../util/createToken.js';
import bcrypt from 'bcrypt';

export const sign_up = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const { username, email, password } = req.body;
        const existingUser = await User.findOne({
            $or: [{ username }, { email }]
        });

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const newUser = new User({ username, email, password });
        const payload = { userId: newUser._id, username: newUser.username };
        const accessToken = await createAccessToken(payload);
        const refreshToken = await createRefreshToken(payload);

        //set or update cookies
        res.cookie(
            'token',
             accessToken,
            { httpOnly: true, secure: true, sameSite: 'strict' }
            );

        newUser.refreshToken = refreshToken;

        await newUser.save({ session });

        await session.commitTransaction();
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        await session.abortTransaction();
        console.log(err);
        res.status(500).json({ message: 'Internal server error' });
    } finally {
        session.endSession();
    }
}

export const sign_in = async (req,res,next)=>{
    const { username, password } = req.body;
    try{
        if (!username || !password) {
            return res.status(400).json({status: 'failed',message: 'Username and password are required' });
        }

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({status: 'failed', message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({status: 'failed', message: 'Invalid password ' });
        }

        const token = await createAccessToken({ userId: user._id, username: user.username });
        const refreshToken = await createRefreshToken({ userId: user._id, username: user.username });

        user.refreshToken = refreshToken;
        await user.save();
        //Sets cookies
        res.cookie('token', token, { httpOnly: true, secure: true, sameSite: 'strict' });
        res.status(200).json({ status: 'success',message: 'User signed in successfully' });

    }catch(err){
        console.log('Sign-in error:', err.message);
        res.status(400).json({ status: 'failed',message: err.message });
    }
}
export const sign_out = (req,res,next)=>{

}