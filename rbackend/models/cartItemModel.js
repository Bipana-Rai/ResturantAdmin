const mongoose = require("mongoose");
const cartItem = new mongoose.Schema({
  dishName: String,
  dishPrice: Number,
  dishImage: String,
  dishCategory: String,
  added:Boolean,
 
  
});
const cartItemSchema = mongoose.model("cartItem", cartItem);
module.exports = cartItemSchema;
