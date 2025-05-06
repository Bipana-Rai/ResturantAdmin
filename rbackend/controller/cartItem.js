const express = require("express");
const cartItemSchema = require("../models/cartItemModel");
const router = express.Router();
router.post("/cart", async (req, res) => {
  try {
const data=req.body
    const newdata = new cartItemSchema(data)
    const saveData = await newdata.save();
    console.log(data);
    res.status(201).json({ message: "cart save item", data: saveData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
