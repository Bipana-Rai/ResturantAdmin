const express = require("express");
const cartItemSchema = require("../models/cartItemModel");
const router = express.Router();
router.post("/cart", async (req, res) => {
  try {
    const data = req.body;
    const newdata = new cartItemSchema(data);
    const saveData = await newdata.save();
    res.status(201).json({ message: "cart save item", data: saveData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/getCart", async (req, res) => {
  try {
    const data = await cartItemSchema.find();
    res.status(201).json({ message: "cart save item", data });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put("/updateQuantity/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { quantity } = req.body;
    const newData = await cartItemSchema.findByIdAndUpdate(
      id,
      { quantity: quantity },
      { new: true }
    );
    res.status(200).json(newData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/deleteCartItem/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deleteItem = await cartItemSchema.findByIdAndDelete(id);
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.delete("/deleteCartOrder", async (req, res) => {
  try {
    const deleteItem = await cartItemSchema.deleteMany({});
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
