 const express = require("express")
const theaters_model = require("../models/theaters")
const router = express.Router()

//GET ALL Theaters
router.get("/", async (req, res) => {
    const theaters = await theaters_model.find().lean()
    res.send(theaters)
})


//GET MOVIE SINGLE Theater

router.get("/movie", async (req, res) => {
    const { movie_id } = req.body
    const theater = await theaters_model.findOne({ _id: movie_id })
    res.send(theater)
})

//To get all vendor's theater
router.get("/vendor", async (req, res)=>{
    const vendor_id =req.body.vendor_id;
    const theaters = await theaters_model.find({ vendor_id: vendor_id}).lean()
    res.send(theaters)
})



//CREATE A Theater
router.post("/", async(req, res)=>{
    const theater = await theaters_model.create(req.body)
    res.send(theater)
})



//DELETE Theater
router.delete("/delete", async (req, res)=>{
    const {id} = req.body 
    const theater = await theaters_model.findOne({_id:id})
   if(theater){
    await theaters_model.deleteOne({_id:id})

    res.send("This theater have been deleted")
   }else{
    res.send("No theater found with this id")
   }
})


// UPDATE Theater

router.put("/update", async (req, res)=>{
    const {id} = req.body
    const theater = await theaters_model.findOne({_id:id})
    if(theater){
       await theaters_model.updateOne({_id:id}, req.body)
       const updatedTheater = await theaters_model.findOne({_id:id})
        res.send(updatedTheater)
    }else{
        res.send("No theater found with this id")
    }
})




module.exports = router


//NOTES: We should also be able to get all schedules for a cinema, theater and vendor