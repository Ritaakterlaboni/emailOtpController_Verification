const nodemailer = require ('nodemailer');

async function emailVerification(email, otp){

    const transporter = nodemailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use true for port 465, false for port 587
  auth: {
    user: "ritaakterlaboni4@gmail.com",
    pass: "dwigysbswgnnxkio",
  },
   //j pass disi aita amar email thake app password a giye generate korte hoi oita aikhane
});

 const info = await transporter.sendMail({
    from: '"Mern Ecom" <ritaakterlaboni4@gmail.com>',
    to: email,
    subject: "OTP",
    text: "OTP", // Plain-text version of the message
    html: `<h1> your otp is : ${otp}</h1>`, // HTML version of the message
  });

  console.log("Message sent:", info.messageId);

}


module.exports = emailVerification