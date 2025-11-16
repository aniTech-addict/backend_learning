import mongoose, { Schema } from "mongoose";
import User from '../models/user.model.js';

const otpSchema = new Schema({

    otp:{
        type: String,
        default:null,
        required: true
    },
    expireAt: {
         type: Date,
        expires: '5m',
        default: Date.now,
        required: true
    }
},{timestamps: true})

const Otp = mongoose.models.Otp || mongoose.model('Otp', otpSchema) 
export default Otp