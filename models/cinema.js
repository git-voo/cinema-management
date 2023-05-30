//A CINEMA IS A BRANCH OR OUTLET OWNED BY A VENDOR. 
// FOR INSTANCE, SILVERBIRD, WUSE, ABUJA; GENESIS CINEMA, FESTAC, LAGOS


const mongoose = require("mongoose");
const schema = mongoose.Schema;
const msg = "Field is required";

const cinemaSchema = new schema({
    
  state: {
    type: String,
    required: [true, msg],
  },
  city: {
    type: String,
    required: [true, msg],
  },
  address: {
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
  branchName: {
    type: String,
  },
  vendorId: {
    type: String,
    required: [true, msg],
  },
});
const cinemaModel = mongoose.model("cinemas", cinemaSchema);
module.exports = cinemaModel;
