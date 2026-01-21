const express = require('express');
const signUpController = require('../../controllers/signUpContoller');
const otpController = require('../../controllers/otpController');
const router = express.Router()

router.post("/signup", signUpController);
router.post("/otpVerify", otpController);


module.exports = router

