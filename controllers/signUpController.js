const express = require("express");
const userSchema = require("../model/userSchema");
const emailValidation = require("../helpers/emailValidation");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const emailVarification = require("../helpers/emailVerification");

const router = express.Router();

async function signUpController(req, res) {
  try {
    const { firstname, lastname, fullname, email, password } = req.body;

    // validation
    if (!firstname || !lastname || !fullname) {
      return res.status(400).send("Name required");
    }

    if (!email) {
      return res.status(400).send("Email required");
    }

    if (!password) {
      return res.status(400).send("Password required");
    }

    if (!emailValidation(email)) {
      return res.status(400).send("Invalid email");
    }

    // duplicate check
    const existingEmail = await userSchema.findOne({ email });
    if (existingEmail) {
      return res.status(409).send("Email already exists");
    }

    // OTP generate
    const otp = crypto.randomInt(100000, 999999).toString();
    const expireOtp = new Date(Date.now() + 10 * 60 * 1000);

    // hash password
    const hash = await bcrypt.hash(password, 10);

    // create user
    const newUser = await userSchema.create({
      firstname,
      lastname,
      fullname,
      email,
      password: hash,
      otp,
      expireOtp,
    });

    // send email (OTP)
    await emailVarification(email, otp);

    return res.status(201).send("Signup successful, OTP sent!");

  } catch (error) {
    return res.status(500).send(error.message);
  }
}

module.exports = signUpController;