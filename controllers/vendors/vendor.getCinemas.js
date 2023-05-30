const handleError = require("../../middlewares/error");
const handleSuccess = require("../../middlewares/success");
const cinemaModel = require("../../models/cinema");

const getVendorsCinemas = async (req, res) => {
  const { vendorId } = req.params;

  if (!vendorId) handleError(res, 404, "No vendor found with this ID");

  try {
    const vendorCinemas = await cinemaModel.find({ vendorId });
 
    if (vendorCinemas) {
      handleSuccess(res, 200, "", vendorCinemas);
    } else {
      handleError(res, 404, "No records found");
    }
  } catch (error) {
    handleError(res, 500)
  }
};

module.exports = getVendorsCinemas;
