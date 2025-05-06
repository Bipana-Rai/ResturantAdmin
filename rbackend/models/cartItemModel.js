const mongoose = require("mongoose");
const cartItem = new mongoose.Schema({
  dishName: String,
  dishPrice: Number,
  dishImage: String,
  dishCategory: String,
 
  
});
const cartItemSchema = mongoose.model("cartItem", cartItem);
module.exports = cartItemSchema;
