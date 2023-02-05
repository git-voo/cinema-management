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




module.exports = router