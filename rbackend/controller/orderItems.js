const express = require("express");
const router = express.Router();
const DineInModel = require("../models/dineInOrder");
router.post("/addDineIn", async (req, res) => {
  const data = req.body;
  console.log(data);
  try {
    const dineOeder = new DineInModel(data);
    const saveData = await dineOeder.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500), { message: error.message };
  }
});
router.get("/getDineIn", async (req, res) => {
  try {
    const dineOrder = await DineInModel.find();
    res.status(200).json(dineOrder);
  } catch (error) {
    res.status(500), { message: error.message };
  }
});
router.put("/updateDineInStatus/:id", async (req, res) => {
  const{id}=req.params
  const data = req.body;
  // console.log(data,id);
  try {
    const dineOeder = await DineInModel.findByIdAndUpdate(id,data)
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500), { message: error.message };
  }
});
module.exports = router;
