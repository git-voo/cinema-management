const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success");
const userModel = require("../../models/users");
const lowerCase = require("../../utils/lowercase");
const mail = require("../../utils/nodemailer");
const removePassword = require("../../utils/removePassword");

const registerUser = async (req, res) => {
    const body = req.body;
  
    const verificationCode = Math.floor(100000 + Math.random() * 900000);
    body.verificationCode = verificationCode;
    body.isVerified = false;
    body.fullName = lowerCase(body.fullName);
    body.email = lowerCase(body.email);
  
    const existingUser = await userModel.findOne({ email: req.body.email });
  
    if (existingUser) { handleError(res, 403, "User");
    } else {
      try {
        mail(verificationCode, body);
        const user = await userModel.create(req.body); 
  
        handleSuccess(res, 200, "Account creation successful", removePassword(user)) 
      } catch (error) { 
      handleError(res, 500)
      }
    }
  }


  module.exports = registerUser