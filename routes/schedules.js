 const express = require("express")
const schedules_model = require("../models/schedules")
const router = express.Router()

//GET ALL SCHEDULES
router.get("/", async (req, res) => {
    const schedules = await schedules_model.find().lean()
    res.send(schedules)
})


//GET MOVIE SINGLE SCHEDULE

router.get("/movie", async (req, res) => {
    const { movie_id } = req.body
    const schedule = await schedules_model.findOne({ _id: movie_id })
    res.send(schedule)
})






module.exports = router


//NOTES
// We should also be able to get all schedules for a cinema, theater and vendor