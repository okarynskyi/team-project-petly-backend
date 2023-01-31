const validateBody = require("./validateBody");
const { isValidNoticeId, isValidPetId } = require("./isValidId");
const autentication = require("./authentication");
const upload = require("./upload");
const isValidCategory = require("./isValidCategory");

module.exports = {
  validateBody,
  isValidNoticeId,
  isValidPetId,
  autentication,
  upload,
  isValidCategory,
};
