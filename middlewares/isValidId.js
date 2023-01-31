const { isValidObjectId } = require("mongoose");
const { HttpError } = require("../helpers");

const isValidPetId = (req, res, next) => {
  const { petId } = req.params;

  if (!isValidObjectId(petId)) {
    next(HttpError(400, "Invalid petId"));
  }
  next();
};

const isValidNoticeId = (req, res, next) => {
  const { noticeId } = req.params;

  if (!isValidObjectId(noticeId)) {
    next(HttpError(400, "Invalid noticeId"));
  }
  next();
};

module.exports = {
  isValidPetId,
  isValidNoticeId,
};
