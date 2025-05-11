const express=require("express")
const router=express.Router()
const bookingData=require("../models/bookingData")
router.post("/addBookingDetail",async(req,res)=>{
    const data=req.body
    try {
        const bookeddata=new bookingData(data)
        const savedData=bookeddata.save()
        res.status(200).json(savedData)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
module.exports=router