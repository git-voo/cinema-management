const express = require("express");
const getVendorsCinemas = require("../controllers/vendors/vendor.getCinemas");
const getVendorMovies = require("../controllers/movies.getVendors");
const router = express.Router();


router.get("/:vendorId/cinemas/", getVendorsCinemas)
router.get("/:vendorId/movies", getVendorMovies)




module.exports = router;