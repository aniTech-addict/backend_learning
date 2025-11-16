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
    const newOtp = new Otp({userId, otp});
    sendOtp(otp, email)
    await newOtp.save();
    return await newOtp._id
}

async function verifyOtp(otpId, otp){
    console.log("reached here")
    const existingOtp = await Otp.findOne({_id: otpId,otp});
    if (!existingOtp) {
        console.log("OTP not found");
        console.log(otpId)
        return false;
    }
    if (existingOtp.otp !== otp) {
        return false;
    }
    await Otp.deleteOne(otpId)
    return true
}

export {
     generateOtp,
     verifyOtp
}