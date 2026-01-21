const userSchema = require("../model/userSchema")
const crypto = require('crypto')

async function otpController(req, res){
const {email, otp} = req.body
const OTP = await userSchema.findOne({email})
    if(!email){
        return res.send("email not found")
    }
    if(OTP.isVerified){
        return res.send("this email is verfied")
    }
    if(OTP.otp !== otp || OTP.expireOtp < Date.now()){
        return res.send("invalid otp")
    }
    OTP.isVerified = true
    OTP.otp = undefined
    OTP.expireOtp = undefined
    await OTP.save()
    return res.send("verfiy Done!")
}


async function resendOtpController(req, res){
const {email} = req.body
const resendOtpUser = await userSchema.findOne({email})
    if(!resendOtpUser){
        return res.send("email not found")
    }
    // res.end("paisi")
    const otp = crypto.randomInt(100000, 999999).toString();
    const expireOtp = new Date(Date.now() +10 * 60 * 1000);
    resendOtpUser.otp = otp,
    resendOtpUser.expireOtp = expireOtp,
    await resendOtpUser.save()
    return res.send("resend otp successfully!")

}

module.exports = {otpController, resendOtpController}