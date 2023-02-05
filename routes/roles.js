const express = require("express")
const roles_model = require("../models/roles") 
const router = express.Router()

//GET ALL roles
router.get("/", async (req, res) => {
    const roles = await roles_model.find().lean()
    res.send(roles)
})


//GET  SINGLE role

router.get("/role", async (req, res) => { roles_model
    const { role_id } = req.body
    const role = await roles_model.findOne({ _id: role_id })
    res.send(role)
})








module.exports = router


//NOTES
// We should also be able to get all roles for a cinema, theater and vendor