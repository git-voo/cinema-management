const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success");
const userModel = require("../../models/users");
const removePassword = require("../../utils/removePassword");

const updatePassword = async (req, res) => {
  const { newPassword, id, email } = req.body;

  if (!newPassword || (!id && !email)) {
    if (!newPassword) return handleError(res, 400, "password is required");
    return handleError(res, 400, "user identifier is required");
  } else {
    try {
      const oldUser = await userModel.findOne(id?{ _id: id }:{email})
      if (oldUser && oldUser.confirmedVerification) {
        const newUser = await userModel.findOneAndUpdate(
          id?{ _id: id }:{email},
          { password: newPassword }
        );
        return handleSuccess(
          res,
          200,
          "operation successful",
          removePassword(newUser)
        );
      }else{
          if(!oldUser)return handleError(res, 404, "account");
          return handleError(res, 400, "verify your email first");
      }
    } catch (error) {
        console.log(error)
      return handleError(res, 500, error);
    }
  }
};

module.exports = updatePassword;
