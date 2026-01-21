const userSchema = require("../model/userSchema")

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

module.exports = otpController