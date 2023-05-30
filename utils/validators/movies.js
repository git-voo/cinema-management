const handleError = require("../../middlewares/error");

const validateMovie = (req, res) => {
  const {
    title,
    thumbnail,
    description,
    genre,
    releaseDate,
    trailer,
    rating,
    topCast,
    director,
    productionStudio, 
    duration,
    vendorId,
    cinemaId

  } = req.body;


  const requiredFields = [
    { name: "title", value: title },
    { name: "thumbnail", value: thumbnail },
    { name: "description", value: description },
    { name: "genre", value: genre },
    { name: "releaseDate", value: releaseDate },
    { name: "trailer", value: trailer },
    { name: "rating", value: rating },
    { name: "topCast", value: topCast },
    { name: "director", value: director },
    { name: "productionStudio", value: productionStudio },
    { name: "duration", value: duration },
    { name: "vendorId", value: vendorId },
    { name: "cinemaId", value: cinemaId },
  ];

  const missingFields = requiredFields.filter((field) => !field.value);

  if (missingFields.length === 0) {
    return true;
  } else { 
    const missingFieldNames = missingFields.map((field) => field.name).join(", ");
    return handleError(res, 400, `Required fields are missing: ${missingFieldNames}`);
  }
};
 

module.exports = validateMovie;
