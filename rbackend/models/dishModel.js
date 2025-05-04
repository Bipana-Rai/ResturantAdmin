const mongoose = require("mongoose");
const item = new mongoose.Schema({
  dishName: {
    type: String,
    require: true,
  },
  dishPrice: {
    type: Number,
    require: true,
  },
  dishImage: {
    type: String,
  },
  dishCategory:{
    type: String,
  }
});
const dishSchema=mongoose.model("dish",item)
module.exports=dishSchema;
