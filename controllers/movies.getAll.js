const handleError = require("../middlewares/error");
const handleSuccess = require("../middlewares/success");
const moviesModel = require("../models/movies");

const getAllMovies = async (req, res)=>{ 

    const allMovies = await moviesModel.find()

    return allMovies?handleSuccess(res, 200, "", allMovies):handleError(res, 500)

}

 

module.exports = getAllMovies;