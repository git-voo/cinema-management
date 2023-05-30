const handleError = require("../middlewares/error");
const handleSuccess = require("../middlewares/success");
const moviesModel = require("../models/movies");

 


const getVendorMovies = async (req, res)=>{
    const { vendorId } = req.params;

    if (!vendorId) {
      return handleError(res, 400, "Vendor ID is required");
    } 
    try {
      const vendorMovies = await moviesModel.find({ vendorId });
  
      return vendorMovies.length > 0
        ? handleSuccess(res, 200, "", vendorMovies)
        : handleError(res, 404, "No movies found for the given vendor ID");
    } catch (error) {
      return handleError(res, 500, "Internal server error");
    }
}


module.exports = getVendorMovies; 