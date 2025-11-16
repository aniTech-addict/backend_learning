import User from '../models/user.model.js';
import Otp from '../models/otp.model.js';
import {createMail, sendMail} from './sendMail.util.js';
async function sendOtp(otp,email){
    const mailContent =new createMail("Opt verification",`Your Otp is`,`<h1> ${otp} </h1>`)
    sendMail(email, mailContent);
}

async function generateOtp(userId, email){
    // console.log("User id ",userId)
    const otp = Math.floor(10031 + Math.random()* 87537);
    const newOtp = new Otp({otp});
    sendOtp(otp, email)
    await newOtp.save();
    return await newOtp._id
}

async function verifyOtp(userId, otp){
    console.log("reached here")
    const existingOtp = await User.findOne({userId});
    if (!existingOtp) {
        console.log("OTP not found");
        return false;
    }
    if (existingOtp.otp !== otp) {
        return false;
    }
    return true
}

export {
     generateOtp,
     verifyOtp
}