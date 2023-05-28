const handleError = require("../../middlewares/error");
const renameFiles = require("../../middlewares/renameUploadedFiles");
const handleSuccess = require("../../middlewares/success");
const vendorsModel = require("../../models/vendors");
const removePassword = require("../../utils/removePassword");
const validateVendor = require("../../utils/validators/vendor");

const registerVendor = async (req, res) => {
  const { email } = req.body;

  if (validateVendor(req, res) === true) {
    const existing = await vendorsModel.findOne({ email });

    if (existing) return handleError(res, 403, "Vendor");

    const vendor = await vendorsModel.create(req.body);

    renameFiles(req.files, vendor, "logo");

    vendor.save();

    return vendor
      ? handleSuccess(res, 200, "", removePassword(vendor))
      : handleError(res, 500);
  }
};

module.exports = registerVendor;
