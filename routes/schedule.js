 const express = require("express")
const schedules_model = require("../models/schedules")
const router = express.Router()

//GET ALL SCHEDULES
router.get("/", async (req, res) => {
    const schedules = await schedules_model.find().lean()
    res.send(schedules)
})


//GET MOVIE SINGLE SCHEDULE

router.get("/:movie_id", async (req, res) => {
    const { movie_id } = req.params
    const schedule = await schedules_model.findOne({ _id: movie_id })
    res.send(schedule)
})



//CREATE A SCHEDULE
router.post("/", async(req, res)=>{
    const schedule = await schedules_model.create(req.body)
    res.send(schedule)
})



//DELETE SCHEDULE
router.delete("/:id", async (req, res)=>{
    const {id} = req.params 
    const schedule = await schedules_model.findOne({_id:id})
   if(schedule){
    await schedules_model.deleteOne({_id:id})

    res.send("schedule deleted")
   }else{
    res.send("No schedule found with this id")
   }
})


// UPDATE SCHEDULE

router.put("/:id", async (req, res)=>{
    const {id} = req.params
    const schedule = await schedules_model.findOne({_id:id})
    if(schedule){
       await schedules_model.updateOne({_id:id}, req.body)
       const updatedSchedule = await schedules_model.findOne({_id:id})
        res.send(updatedSchedule)
    }else{
        res.send("No schedule found with this id")
    }
})




module.exports = router


//NOTES
// We should also be able to get all schedules for a cinema, theater and vendor