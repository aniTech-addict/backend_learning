import mongoose, { Schema } from "mongoose";
import User from '../models/user.model.js';

const otpSchema = new Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    otp:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now,
        required:true
    }
})

const Otp = mongoose.models.Otp || mongoose.model('Otp', otpSchema) 
export default Otp