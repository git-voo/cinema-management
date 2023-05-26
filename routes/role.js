const express = require("express")
const roles_model = require("../models/roles") 
const router = express.Router()

//GET ALL roles
router.get("/", async (req, res) => {
    const roles = await roles_model.find().lean()
    res.send(roles)
})


 
//GET  SINGLE role

router.get("/:role_id", async (req, res) => { roles_model
    const { role_id } = req.params
    const role = await roles_model.findOne({ _id: role_id })
    res.send(role)
})



//CREATE A role
router.post("/", async(req, res)=>{
    const role = await roles_model.create(req.body)
    res.send(role)
})



//DELETE role
router.delete("/:role_id", async (req, res)=>{
    const {role_id} = req.body 
    const role = await roles_model.findOne({_id:role_id})
   if(role){
    await roles_model.deleteOne({_id:role_id})

    res.send("role deleted")
   }else{
    res.send("No role found with this id")
   }
})


// UPDATE role

router.put("/:role_id", async (req, res)=>{
    const {role_id} = req.body
    const role = await roles_model.findOne({_id:role_id})
    if(role){
       await roles_model.updateOne({_id:role_id}, req.body)
       const updatedrole = await roles_model.findOne({_id:role_id})
        res.send(updatedrole)
    }else{
        res.send("No role found with this id")
    }
})




module.exports = router


//NOTES
// We should also be able to get all roles for a cinema, theater and vendor