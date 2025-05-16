const mongoose = require("mongoose");
const dineIn = new mongoose.Schema({
  tableNumber: {
    type: String,
    require: true,
  },
  cartItems: [
    {
      dishName: { type: String, required: true },
      dishPrice: { type: Number, required: true, min: 0 },
      quantity: { type: Number, required: true, min: 1 },
    },
  ],
      totalAmount: {
      type: Number,
      required: true,
      min: 0,
    },

},{  timestamps: true,});
const DineInModel = mongoose.model("DineIn", dineIn);

module.exports = DineInModel;
