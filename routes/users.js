const express = require("express")
const upload = require("../middlewares/multer")
const user_model = require("../models/users")
const mail = require("../utils/nodemailer")

const router = express.Router()

//GET ALL USERS
router.get("/", async (req, res) => {
    const users = await user_model.find().lean()
    res.send(users)
})

// GET ALL VENDOR'S USERS
router.get("/vendor", async (req, res) => {
    const vendor_id = req.body.vendor_id;
    const users = await user_model.find({ vendor_id: vendor_id }).lean()
    res.send(users)
})


//GET ONE USER
router.get("/user", async (req, res) => {
    const { id } = req.body
    const user = await user_model.findOne({ _id: id })
    res.send(user)
})

//GET ONE VENDOR'S USER
router.get("/vendor/user", async (req, res) => {
    const { id, vendor_id } = req.body
    const user = await user_model.findOne({ _id: id, vendor_id: vendor_id })
    res.send(user)
})

//CREATE A USER

router.post("/create", async (req, res) => {

    const veri_code = Math.floor(100000 + Math.random() * 900000)
    req.body.verification_code = veri_code


    const existingUser = await user_model.findOne({ "email": req.body.email })

    if (existingUser) {
        res.send("user with email already exist. Login to continue")
    } else {
        //Email code to user 
        mail(veri_code, req.body)
        const user = await user_model.create(req.body)
        res.send(user)
    }

})

//Verify User Email
router.post("/email/verify", async (req, res) => {
    const { email, inputedCode } = req.body
    const user = await user_model.findOne({ email: email })
    if (user) {

        if (user.verification_code === inputedCode) {
            user.is_verified = true
            user.save()
            res.send(true)
        } else {
            res.send("Incorrect verification code")
        }
    }
})


module.exports = router