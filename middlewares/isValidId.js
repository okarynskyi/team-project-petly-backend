const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidId = (req, res, next) => {
  const { petId } = req.params;
  console.log(req.params)
  if (!isValidObjectId(petId)) {
    next(HttpError(404, "Invalid PetId"));
  }
  next();
};

module.exports = isValidId;