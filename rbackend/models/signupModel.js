const mongoose = require("mongoose");
const signup = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  firstName: { type: String, require: true },
  lastName: { type: String, require: true },
  phone: { type: String, require: true },
});
const signupSchema = mongoose.model("signUp", signup);
module.exports = signupSchema;
