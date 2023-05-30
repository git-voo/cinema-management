const handleError = require("../middlewares/error");
const handleSuccess = require("../middlewares/success");
const moviesModel = require("../models/movies");

 


const getCinemaMovies = async (req, res)=>{
    const { cinemaId } = req.params;

    if (!cinemaId) {
      return handleError(res, 400, "Cinema ID is required");
    } 
    try {
      const cinemaMovies = await moviesModel.find({ cinemaId });
  
      return cinemaMovies.length > 0
        ? handleSuccess(res, 200, "", cinemaMovies)
        : handleError(res, 404, "No movies found for the given cinema ID");
    } catch (error) {
      return handleError(res, 500, "Internal server error");
    }
}


module.exports = getCinemaMovies; 