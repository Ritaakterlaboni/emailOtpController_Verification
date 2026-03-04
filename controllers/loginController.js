const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation")
const bcrypt = require('bcrypt');

async function loginController(req, res){
    const {email, password} = req.body

    const duplicateUser = await userSchema.findOne({email})


    if(!email){
        return res.send("email is required");
    }
    if(!password){
        return res.send("password is required");
    }
    if(!emailValidation(email)){
        return res.json({
            error: "Email format Issue",
        });
    }
     if(!duplicateUser){
        return res.send("Email not found")
    }

    if(!duplicateUser.isVerified){
        return res.json({
            message: "User is not verified",
        })
    }
    else{
        bcrypt.compare(password, duplicateUser.password , (err, result)  =>{
            if(!result){
                return res.json({
                     message: "Password is not matched",
                })
            }
            req.session.isAuth = true;
            req.session.userSchema = {
            id: existingEmailUser.id,
            email: existingEmailUser.email,
            firstName: existingEmailUser.firstName,
      };
});

    }


    return res.end("sas")
}

function dashboardController(req,res){
    return res.json({
        message:"welcome to Dashboard"
    })
}


function lgoutController(req, res){
     req.session.destroy(function (err) {
        //destroy() ata asynchronous tai sathe sathe delet kore na jokhon delet hoi tahole jate msg dai kno tai if condition use kora
    if (err) {
      return res.json({ message: "Wrong" });
    } else {
      res.clearCookie("connect.sid");
      return res.status(200).json({ message: "Logout Successful" });
    }
  });
}

module.exports = {loginController,lgoutController, dashboardController}