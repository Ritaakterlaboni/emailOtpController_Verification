const express = require('express');
const {otpController, resendOtpController} = require('../../controllers/otpController');
const signUpController = require('../../controllers/signUpController');
const loginController = require('../../controllers/loginController');
const router = express.Router()

router.post("/signup", signUpController);
router.post("/otpVerify", otpController);
router.post("/resendotp", resendOtpController);
router.post("/login", loginController);





module.exports = router

