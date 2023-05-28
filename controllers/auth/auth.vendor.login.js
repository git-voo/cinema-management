const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success"); 
const vendorsModel = require("../../models/vendors");
const removePassword = require("../../utils/removePassword");

const vendorLogin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password)
    return handleError(res, 400, "Email and password are required");

  try {
    const vendor = await vendorsModel.findOne({ email });
    if (vendor && vendor.password === password) {
      
      return handleSuccess(res, 200, "Login successful", removePassword(vendor));
    } else if (!vendor) {
      return handleError(
        res,
        404,
        "vendor does not exist. Please sign up to continue"
      );
    } else if (vendor && vendor.password !== password) {
      return handleError(res, 401, "Incorrect password");
    }
  } catch (err) {
    return handleError(res, 500, "Internal error occurred");
  }
};

module.exports = vendorLogin;
