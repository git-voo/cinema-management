const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success");  
const cinemaModel = require("../../models/cinema");
const removePassword = require("../../utils/removePassword");

const cinemaLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return handleError(res, 400, "Email and password are required");

  try {
    const cinema = await cinemaModel.findOne({ email });
    if (cinema && cinema.password === password) {
      
      return handleSuccess(res, 200, "Login successful", removePassword(cinema));
    } else if (!cinema) {
      return handleError(
        res,
        404,
        "Cinema does not exist. Please sign up to continue"
      );
    } else if (cinema && cinema.password !== password) {
      return handleError(res, 401, "Incorrect password");
    }
  } catch (err) {
    return handleError(res, 500, "Internal error occurred");
  }
};

module.exports = cinemaLogin;
