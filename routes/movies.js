const express = require("express")
const movies_model = require("../models/movies") 
const router = express.Router()

//GET ALL movies
router.get("/", async (req, res) => {
    const movies = await movies_model.find().lean()
    res.send(movies)
})

//To get a vendor's all movies
router.get("/vendor", async (req, res)=>{
    const vendor_id =req.body.vendor_id;
    const movies = await movies_model.find({ vendor_id: vendor_id}).lean()
    res.send(movies)
})


//GET SINGLE movie

router.get("/movies", async (req, res) => { movies_model
    const { movies_id } = req.body
    const movie = await movies_model.findOne({ _id: movies_id })
    res.send(movie)
})



//To create A movie
router.post("/", async(req, res)=>{
    const movie = await movies_model.create(req.body)
    res.send(movie)
})



//To delete movie
router.delete("/delete", async (req, res)=>{
    const {id} = req.body 
    const movie = await movies_model.findOne({_id:id})
   if(movie){
    await movies_model.deleteOne({_id:id})

    res.send("movie deleted")
   }else{
    res.send("Movie with this id not found")
   }
})


// To update a movie

router.put("/update", async (req, res)=>{
    const {id} = req.body
    const movie = await movies_model.findOne({_id:id})
    if(movie){
       await movies_model.updateOne({_id:id}, req.body)
       const updatedMovie = await movies_model.findOne({_id:id})
        res.send(updatedMovie)
    }else{
        res.send("Movie wth this id not found")
    }
})




module.exports = router


//NOTES
// We should also be able to get all categories for a cinema, theater and vendor