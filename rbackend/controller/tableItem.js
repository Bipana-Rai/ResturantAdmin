const express = require("express");
const router = express.Router();
const tableInfoSchma = require("../models/tableInfoModel");
router.post("/addTable", async (req, res) => {
  try {
    const data = req.body;
    const newData = new tableInfoSchma(data);
    const saveData = await newData.save();
    res.status(200).json(saveData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get("/getTable", async (req, res) => {
  try {
    const data = await tableInfoSchma.find();
    console.log(data);
    res.status(200).json(data)
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
module.exports = router;
