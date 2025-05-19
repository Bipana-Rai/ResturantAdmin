const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
var jwt = require("jsonwebtoken");
const secret = require("../config");
const signupSchema = require("../models/signupModel");

router.post("/signupData", async (req, res) => {
  try {
    const { email, password, fullName, phone } = req.body;

    if (!email || !password || !fullName || !phone) {
      return res.status(400).json({ message: "Missing Field" });
    }

    const existingUser = await signupSchema.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    const user = new signupSchema({
      email,
      password: hashPassword,
      fullName,
      phone,
    });
    const saveData = await user.save();

    res.status(201).json({ message: " Register Successfully", user: saveData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post("/loginData", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "field is missing" });
    }
    const doesExistUser = await signupSchema.findOne({ email });
    if (!doesExistUser) {
      return res.status(400).json({ message: "user not found" });
    }
    const isPasswordValidate = await bcrypt.compare(
      password,
      doesExistUser.password
    );
    if (!isPasswordValidate) {
     return res.status(400).json({ message: "Incorrect Password" });
    }
    var token = jwt.sign({ doesExistUser }, secret);
    res.status(201).json({ message: " Login Successfully", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
