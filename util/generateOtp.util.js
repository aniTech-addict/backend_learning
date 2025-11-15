async function generateOtp(){
    const otp = Math.floor(100000 + Math.random() * 900000);
    return otp;
}
export default generateOtp

// tf this file is so small for, embarrassing shit i do