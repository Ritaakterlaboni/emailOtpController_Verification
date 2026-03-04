function authMiddelware(req, res, next){
if (req.session.isAuth){
    //req.session.isAuth aita login comtroller thake paise 
    next()
}
else{
    return res.json("Unauthorized")
}
}

module.exports = authMiddelware