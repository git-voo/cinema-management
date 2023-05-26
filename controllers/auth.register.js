const userModel = require("../models/users");
const lowerCase = require("../utils/lowercase");
const mail = require("../utils/nodemailer");

const registerUser = async (req, res) => {
    const body = req.body;
  
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    body.verificationCode = verificationCode;
    body.isVerified = false;
    body.fullName = lowerCase(body.fullName);
    body.email = lowerCase(body.email);
  
    const existingUser = await userModel.findOne({ email: req.body.email });
  
    if (existingUser) {
      res.status(403).json({
        code: 403,
        message: "User with email already exist. Login to continue",
      });
    } else {
      try {
        mail(verificationCode, body);
        const user = await userModel.create(req.body);
  
        const { password, ...noPasswordUser } = user.toObject();
  
        res.status(200).json({
          code: 200,
          message: "Account creation successful",
          data: noPasswordUser,
        });
      } catch (error) {
        console.log(error);
        res.status(500).json({
          message: "server error",
          error: error,
        });
      }
    }
  }


  module.exports = registerUser