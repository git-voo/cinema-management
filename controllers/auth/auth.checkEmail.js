const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success");
const userModel = require("../../models/users");
const generateCode = require("../../utils/generateCode");
const mail = require("../../utils/nodemailer");
const removePassword = require("../../utils/removePassword");

const checkEmail = async (req, res) => {
  const code = generateCode();
  const { email } = req.body;
  if (!email) return handleError(res, 400, "email is required");

  const user = await userModel.findOne({ email });
  if (!user) return handleError(res, 404, "account");

  user.verificationCode = code;
  user.confirmedVerification = false;

  try {
    mail(code, user);

    await userModel.findOneAndUpdate({ email }, user).then(() => {
      return handleSuccess(
        res,
        200,
        "verification code sent to the provided email",
        removePassword(user)
      );
    });
  } catch (error) {
    handleError(res, 500);
  }
};

module.exports = checkEmail;
