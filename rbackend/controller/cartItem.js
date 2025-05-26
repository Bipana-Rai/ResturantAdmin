const express = require("express");
const cartItemSchema = require("../models/cartItemModel");
const router = express.Router();
router.post("/cart", async (req, res) => {
  try {
    const data = req.body;
    console.log(data)
    const newdata = new cartItemSchema(data);
    const saveData = await newdata.save();
    console.log("saveData",saveData)
    res.status(201).json({ message: "cart save item", data: saveData });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/getCart/:userId", async (req, res) => {
  const {userId}=req.params  
  try {
    const data = await cartItemSchema.find({userId});
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
router.delete("/deleteCartOrder/:userId", async (req, res) => {
const {userId}=req.params
  try {
    const deleteItem = await cartItemSchema.deleteMany({userId});
    res.status(200).json(deleteItem);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
