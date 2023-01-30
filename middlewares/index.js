const validateBody = require("./validateBody")
const {isValidNoticeId, isValidPetId} = require("./isValidId")
const autentication = require('./authentication')

module.exports = {
    validateBody,
    isValidNoticeId,
    isValidPetId,
    autentication,
}