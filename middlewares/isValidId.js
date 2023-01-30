const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidPetId = (req, res, next) => {
  const { petId } = req.params;
  
  if (!isValidObjectId(petId)) {
    next(HttpError(404, "Invalid PetId"));
  }
  next();
};

const isValidNoticeId = (req, res, next) => {
  const { noticeId } = req.params;
  
  if (!isValidObjectId(noticeId)) {
    next(HttpError(404, "Invalid noticeId"));
  }
  next();
};


module.exports = {
  isValidPetId,
  isValidNoticeId,
};
