import User from '../models/user.model.js';
import Otp from '../models/otp.model.js';
async function generateOtp(userId){
    
    const otp = Math.floor(10031 + Math.random()* 87537);
    const newOtp = new Otp({userId, otp});
    await newOtp.save();
}

async function verifyOtp(userId, otp){
    const existingOtp = await Otp.findOne({userId});
    if (!existingOtp) {
        return false;
    }
    if (existingOtp.otp !== otp) {
        return false;
    }
    await existingOtp.remove();
    return true
}

export {
     generateOtp,
     verifyOtp
}