const {loginSchema, signupSchema, userUpdateSchema} = require("./userSchema")
const noticeSchema = require('./noticePetSchema')
const userPetSchema = require('./userPetSchema')

module.exports = {
    userPetSchema,
    noticeSchema,
    loginSchema,
    signupSchema,
    userUpdateSchema,
}