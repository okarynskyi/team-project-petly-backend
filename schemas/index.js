const {loginSchema, signupSchema, userUpdateSchema} = require("./userSchema")
const noticePetSchema = require('./noticePetSchema')
const userPetSchema = require('./userPetSchema')

module.exports = {
    userPetSchema,
    noticePetSchema,
    loginSchema,
    signupSchema,
    userUpdateSchema,
}