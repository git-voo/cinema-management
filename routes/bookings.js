const express = require("express")
const bookings_model = require("../models/bookings")
const router = express.Router()


//To get all bookings
router.get("/", async (req, res) => {
    const bookings = await bookings_model.find().lean()
    res.send(bookings)
})


//GET Single movie booking in the set

router.get("/movie", async (req, res) => {
    const { movie_id } = req.body
    const booking = await bookings_model.findOne({ _id: movie_id })
    res.send(booking)
})


//To get all vendor's booking
router.get("/vendor", async (req, res)=>{
    const vendor_id =req.body.vendor_id;
    const bookings = await bookings_model.find({ vendor_id: vendor_id}).lean()
    res.send(bookings)
})



//To create A booking
router.post("/", async(req, res)=>{
    const booking = await bookings_model.create(req.body)
    res.send(booking)
})



//DELETE Booking
router.delete("/delete", async (req, res)=>{
    const {id} = req.body 
    const booking = await bookings_model.findOne({_id:id})
   if(booking){
    await bookings_model.deleteOne({_id:id})

    res.send("This booking have been deleted")
   }else{
    res.send("No booking found with this id")
   }
})


// UPDATE Booking

router.put("/update", async (req, res)=>{
    const {id} = req.body
    const booking = await bookings_model.findOne({_id:id})
    if(booking){
       await bookings_model.updateOne({_id:id}, req.body)
       const updatedBooking = await bookings_model.findOne({_id:id})
        res.send(updatedBooking)
    }else{
        res.send("No booking found with this id")
    }
})




module.exports = router


//NOTES: We should also be able to get all schedules for a cinema, theater and vendor