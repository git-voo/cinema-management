const express = require("express");  
const registerUser = require("../controllers/auth/auth.user.register");
const verifyEmail = require("../controllers/auth/auth.verify");
const registerVendor = require("../controllers/auth/auth.vendor.register");
const upload = require("../middlewares/multer");
const userLogin = require("../controllers/auth/auth.user.login");
const vendorLogin = require("../controllers/auth/auth.vendor.login");
const registerCinema = require("../controllers/auth/auth.cinema.register");
const cinemaLogin = require("../controllers/auth/auth.cinema.login");
const checkEmail = require("../controllers/auth/auth.checkEmail");
const updatePassword = require("../controllers/auth/auth.passwordreset");
const router = express.Router();


router.post("/user/register", registerUser); //create user
router.post("/user/login", userLogin); //log user in
router.post("/validate-email", checkEmail); //send code to any email
router.post("/verify", verifyEmail); //confirm any verification code
router.put("/password-reset", updatePassword); //change password


router.post("/vendor/register", upload.any(), registerVendor); 
router.post("/vendor/login", vendorLogin); 


router.post("/cinema/register", registerCinema); 
router.post("/cinema/login", cinemaLogin); 
module.exports = router;
