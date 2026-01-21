const userSchema = require("../model/userSchema");


async function loginController(req, res){
    const {email, password} = req.body
    if(!email){
        return res.send("email is required");
    }
    if(!password){
        return res.send("password is required");
    }
    const duplicateUser = await userSchema.findOne({email})
    if(!duplicateUser){
        return res.send("email not found")
    }
    //  if(!duplicateUser.password){
    //     return res.send("password is not match")
    // }
    return res.end("sas")
}

module.exports = loginController