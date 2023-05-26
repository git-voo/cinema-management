const express = require("express")
const upload = require("../middlewares/multer")
const userModel = require("../models/users")
const mail = require("../utils/nodemailer")

const router = express.Router()

//GET ALL USERS
router.get("/", async (req, res) => {
    const users = await userModel.find().lean()
    res.send(users)
})

// GET ALL VENDOR'S USERS
router.get("/:vendorId", async (req, res) => {
    const vendorId = req.params;
    const users = await userModel.find({ vendorId: vendorId }).lean()
    res.send(users)
})


//GET ONE USER
router.get("/:id", async (req, res) => {
    const { id } = req.params
    const user = await userModel.findOne({ _id: id })
    res.send(user)
})

//GET ONE VENDOR'S USER
router.get("/:vendorId/:user_id", async (req, res) => {
    const { id, vendorId } = req.params
    const user = await userModel.findOne({ _id: id, vendorId: vendorId })
    res.send(user)
})

//CREATE A USER

router.post("/auth/register", async (req, res) => {

    const verificationCode = Math.floor(100000 + Math.random() * 900000)
    req.body.verificationCode = verificationCode


    const existingUser = await userModel.findOne({ "email": req.body.email })

    if (existingUser) {
        res.send("user with email already exist. Login to continue")
    } else {
        //Email code to user 
        mail(verificationCode, req.body)
        const user = await userModel.create(req.body)
        res.send(user)
    }

})




//Verify User Email
router.post("/email/verify", async (req, res) => {
    const { email, inputedCode } = req.body
    const user = await userModel.findOne({ email: email })
    if (user) {

        if (user.verificationCode === inputedCode) {
            user.isVerified = true
            user.save()
            res.send(true)
        } else {
            res.send("Incorrect verification code")
        }
    }
})


//DELETE USER

router.delete("/:id/delete", async (req, res)=>{
    const {id} = req.params 
    const user = await userModel.findOne({_id:id})
   if(user){
    await userModel.deleteOne({_id:id})

    res.send("user deleted")
   }else{
    res.send("No user found with this id")
   }
})



// UPDATE USER

router.put("/:id/update", async (req, res)=>{
    const {id} = req.params
    const user = await userModel.findOne({_id:id})
    if(user){
       await userModel.updateOne({_id:id}, req.body)
       const updatedUser = await userModel.findOne({_id:id})
        res.send(updatedUser)
    }else{
        res.send("No user found with this id")
    }
})



module.exports = router