const mongoose = require("mongoose");
const schema = mongoose.Schema;
const msg = "Field is required";
const userSchema = new schema({
  fullName: {
    type: String,
    required: [true, msg],
  },

  email: {
    type: String,
    required: [true, msg],
  },

  password: {
    type: String,
    required: [true, msg],
  },
 

  // vendorId: {
  //   type: String,
  //   required: [true, msg],
  // },

  verificationCode: {
    type: String,
    required: [true, msg],
  },
  confirmedVerification: {
    type: Boolean, 
    default:false,
  },

  isVerified: {
    type: Boolean,
    required: [true, msg],
  },
  //MODEL SHOULD INCLUDE AN ELEMENT THAT HOLDS VERIFICATION CODE
});

const userModel = mongoose.model("users", userSchema);
module.exports = userModel;
