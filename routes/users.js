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




module.exports = router