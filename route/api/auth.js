const express = require('express');
const {otpController, resendOtpController} = require('../../controllers/otpController');
const signUpController = require('../../controllers/signUpController');
const {loginController, dashboardController }= require('../../controllers/loginController');
const authMiddelware = require('../../middlewares/authMiddleware');
const router = express.Router()

router.post("/signup", signUpController);
router.post("/otpVerify", otpController);
router.post("/resendotp", resendOtpController);
router.post("/login", loginController);
router.get("/dashboard", authMiddelware, dashboardController);





module.exports = router

