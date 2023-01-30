const validateBody = require("./validateBody")
const {isValidNoticeId, isValidPetId} = require("./isValidId")
const autentication = require('./authentication')
const upload = require('./upload')

module.exports = {
    validateBody,
    isValidNoticeId,
    isValidPetId,
    autentication,
    upload,
}