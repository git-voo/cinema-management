const handleError = require("../../middlewares/error");
const renameFiles = require("../../middlewares/renameUploadedFiles");
const handleSuccess = require("../../middlewares/success");
const cinemaModel = require("../../models/cinema"); 
const removePassword = require("../../utils/removePassword");
const validateCinema = require("../../utils/validators/cinema"); 

const registerCinema = async (req, res) => {
  const { email } = req.body;

  if (validateCinema(req, res) === true) {
    const existing = await cinemaModel.findOne({ email });

    if (existing) return handleError(res, 403, "cinema");

    const cinema = await cinemaModel.create(req.body); 
 
    return cinema
      ? handleSuccess(res, 200, "Cinema created successfully", removePassword(cinema))
      : handleError(res, 500);
  }
};

module.exports = registerCinema;
