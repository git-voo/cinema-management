//A VENDOR IS THE MOTHER ORGANIZATION THAT RUNS CINEMAS 
// FOR INSTANCE, SILVERBIRD CINEMAS, GENESIS CINEMAS

const mongoose = require("mongoose");
const schema = mongoose.Schema;
const msg = "Field is required";

const vendorsSchema = new schema({
  name: {
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
  logo: {
    type: String, 
  },
});

const vendorsModel = mongoose.model("vendors", vendorsSchema);
module.exports = vendorsModel;
