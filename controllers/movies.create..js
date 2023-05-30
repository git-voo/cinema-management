const handleError = require("../middlewares/error");
const renameFiles = require("../middlewares/renameUploadedFiles");
const handleSuccess = require("../middlewares/success");
const moviesModel = require("../models/movies");
const validateMovie = require("../utils/validators/movies");


const createMovie = async (req, res)=>{
if(validateMovie(req, res) === true){ 

    const movie = await moviesModel.create(req.body); 
    renameFiles(req.files, movie, "thumbnail"); 
    movie.save();

    const allMovies = await moviesModel.find()

    return movie
      ? handleSuccess(res, 200, "Movie listed successfully", allMovies.reverse())
      : handleError(res, 500);
}
}


 


module.exports = createMovie; 