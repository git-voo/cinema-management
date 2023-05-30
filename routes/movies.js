const express = require("express");
const upload = require("../middlewares/multer");
const createMovie = require("../controllers/movies.create.");
const getAllMovies = require("../controllers/movies.getAll");
const getCinemaMovies = require("../controllers/movies.getCinemas");
const getSingleMovie = require("../controllers/movies.single"); 
const router = express.Router();



router.post("/create", upload.any(), createMovie )

router.get("/all", getAllMovies)
router.get("/:movieId", getSingleMovie)
router.get("/cinema/:cinemaId", getCinemaMovies)


module.exports = router;

