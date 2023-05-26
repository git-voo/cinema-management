const express = require("express"); 
const login = require("../controllers/auth.login");
const registerUser = require("../controllers/auth.register");
const router = express.Router();

//CREATE A USER

router.post("/register", registerUser);

router.post("/login", login);

module.exports = router;
