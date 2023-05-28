const handleError = require("../middlewares/error");
const handleSuccess = require("../middlewares/success");
const moviesModel = require("../models/movies");

 


const getSingleMovie = async (req, res)=>{
    const { movieId } = req.params; 
    if (!movieId || !req.params) { 
      return handleError(res, 400, "Movie ID is required");
    }  
    try {
        const movie = await moviesModel.findOne({ _id: movieId });
    
        if (movie) {
          return handleSuccess(res, 200, "", movie);
        } else {
          return handleError(res, 404, "No movie found for the given movie ID");
        }
      } catch (error) {
        console.log(error)
        return handleError(res, 500); 
      }
}


module.exports = getSingleMovie; 