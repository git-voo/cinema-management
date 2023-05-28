const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success");
const userModel = require("../../models/users");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return handleError(res, 400, "Email and password are required");

  try {
    const user = await userModel.findOne({ email });
    if (user && user.password === password) {
      const { password, ...noPasswordUser } = user.toObject();
      return handleSuccess(res, 200, "Login successful", noPasswordUser);
    } else if (!user) {
      return handleError(
        res,
        404,
        "User does not exist. Please sign up to continue"
      );
    } else if (user && user.password !== password) {
      return handleError(res, 401, "Incorrect password");
    }
  } catch (err) {
    return handleError(res, 500, "Internal error occurred");
  }
};

module.exports = userLogin;
