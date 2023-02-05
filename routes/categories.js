const express = require("express")
const categories_model = require("../models/categories") 
const router = express.Router()

//GET ALL categories
router.get("/", async (req, res) => {
    const categories = await categories_model.find().lean()
    res.send(categories)
})


//GET category SINGLE category

router.get("/category", async (req, res) => { categories_model
    const { category_id } = req.body
    const category = await categories_model.findOne({ _id: category_id })
    res.send(category)
})



//CREATE A category
router.post("/", async(req, res)=>{
    const category = await categories_model.create(req.body)
    res.send(category)
})



//DELETE category
router.delete("/delete", async (req, res)=>{
    const {id} = req.body 
    const category = await categories_model.findOne({_id:id})
   if(category){
    await categories_model.deleteOne({_id:id})

    res.send("category deleted")
   }else{
    res.send("No category found with this id")
   }
})


// UPDATE category

router.put("/update", async (req, res)=>{
    const {id} = req.body
    const category = await categories_model.findOne({_id:id})
    if(category){
       await categories_model.updateOne({_id:id}, req.body)
       const updatedcategory = await categories_model.findOne({_id:id})
        res.send(updatedcategory)
    }else{
        res.send("No category found with this id")
    }
})




module.exports = router


//NOTES
// We should also be able to get all categories for a cinema, theater and vendor