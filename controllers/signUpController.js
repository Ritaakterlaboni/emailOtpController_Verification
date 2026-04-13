const express = require ('express')
const userSchema = require('../model/userSchema');
const emailValidation = require('../helpers/emailValidation');
const router = express.Router()
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const emailVarification = require('../helpers/emailVerification');
const passwordValidation = require('../helpers/passwordValidation');


async function signUpController(req, res){
    // console.log("signupcontroller paisi")
    const {firstname, lastname, email, password} = req.body
      if(!firstname || !lastname){
       return res.send("required name");
    }
    if(!email){
       return res.send("required email");
    }
    if(!password){
        return res.send("required password");
     }
      if(!passwordValidation(password)){
        return res.send("password no validation");
     }
     if(!emailValidation(email)){
        return res.send("no validation");
     }
     const existingEmail = await userSchema.find({email})
    // email duplicate email ache naki na check korar jonno
    if(existingEmail.length > 0){
        return res.send("ache akta email")
    }
    //otp ar jonno 
    const otp = crypto.randomInt(100000, 999999).toString()
        // console.log(otp);
    //otp expire ar jonno
    const expireOtp = new Date(Date.now() +(10 * 60 * 1000))   
    // console.log(expireOtp)
    //hash password ar jonno
    bcrypt.hash(password, 10, function(err, hash) {
         if(err) return res.send("hash error");
      const controller = userSchema({
        firstname,
        lastname,
        email,
        password : hash,
        otp,
        expireOtp
    });
    controller.save();
    emailVarification(email, otp)
    
    return res.send("done!");
});
 
}

module.exports = signUpController



//bar bar res.send dawya te error ase tai return age disi
 