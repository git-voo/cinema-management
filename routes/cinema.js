const express = require("express")
const cinema_model = require("../models/cinema")
const router = express.Router()


//To get all Cinema
router.get("/", async (req, res) => {
    const cinema = await cinema_model.find().lean()
    res.send(cinema)
})


//To get Single Movie cinema

router.get("/movie", async (req, res) => {
    const { movie_id } = req.body
    const cinema = await cinema_model.findOne({ _id: movie_id })
    res.send(cinema)
})


//To get all vendor's cinema
router.get("/vendor", async (req, res)=>{
    const vendor_id =req.body.vendor_id;
    const cinemas = await cinema_model.find({ vendor_id: vendor_id}).lean()
    res.send(cinemas)
})



//To create A Cinema
router.post("/", async(req, res)=>{
    const cinema = await cinema_model.create(req.body)
    res.send(cinema)
})



//DELETE Cinema
router.delete("/delete", async (req, res)=>{
    const {id} = req.body 
    const cinema = await cinema_model.findOne({_id:id})
   if(cinema){
    await cinema_model.deleteOne({_id:id})

    res.send("This cinema have been deleted")
   }else{
    res.send("cinema not found")
   }
})


// UPDATE Booking

router.put("/update", async (req, res)=>{
    const {id} = req.body
    const cinema = await cinema_model.findOne({_id:id})
    if(cinema){
       await cinema_model.updateOne({_id:id}, req.body)
       const updatedCinema = await cinema_model.findOne({_id:id})
        res.send(updatedCinema)
    }else{
        res.send("No cinema found with this id")
    }
})




module.exports = router


//NOTES: We should also be able to get all vendor cinema