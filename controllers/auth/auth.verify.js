const handleError = require("../../middlewares/error");
const userModel = require("../../models/users");

const verifyEmail = async (req, res) => {
  const { email, verificationCode } = req.body;

  if(email && verificationCode){
    userModel.findOne({ email }, (err, user) => {
      if (err)
        return res
          .status(500)
          .json({ code: 500, error: "An error occurred. Please retry" });
  
      if (user) {
        const userCode = user.verificationCode;
        const newUser = user;
        if (verificationCode === userCode) {
          newUser.isVerified = true;
          newUser.confirmedVerification = true;
  
          userModel.findOneAndUpdate(
            { email },
            newUser,
            { new: true },
            (err, updatedUser) => {
              if (err)
              return res
                .status(500)
                .json({ code: 500, error: "An error occurred. Please retry" });
                
              const { password, ...noPasswordUser } = updatedUser.toObject();
              res
                .status(200)
                .json({
                  code: 200,
                  message: "email verification successful",
                  data: noPasswordUser,
                });
            }
          );
        } else {
          res.status(400).json({ code: 400, message: "Invalid code" });
        }
      } else {
        res.status(404).json({ code: 404, message: "Account not found" });
      }
    });
  }else{
    if(!email){
      handleError(res, 404, "email")
    }else{
      handleError(res, 404, "code")

    }
  }




  
};

module.exports = verifyEmail;
