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
router.post("/getDineIn", async (req, res) => {
  try {
    const dineOeder = await DineInModel.find();
    res.status(200).json(dineOeder);
  } catch (error) {
    res.status(500), { message: error.message };
  }
});
module.exports = router;
