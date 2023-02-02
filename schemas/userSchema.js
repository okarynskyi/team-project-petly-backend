const Joi = require("joi")

const signupSchema = Joi.object({
    email: Joi.string().trim(true).min(7).max(63).email().required(),
    password: Joi.string().trim(true).min(7).max(32).pattern(/^\S*$/).required(),
    name: Joi.string().alphanum().required(),
    location: Joi.string().regex(/[A-Z][a-z]*,\s[A-Z][a-z]*/).required(),
    phone: Joi.string().length(13).pattern(/^\+[1-9]{1}[0-9]{3,14}$/).required()

})

const loginSchema = Joi.object({
    email: Joi.string().trim(true).min(7).max(63).email().required(),
    password: Joi.string().trim(true).min(7).max(32).pattern(/^\S*$/).required()
})

const userUpdateSchema = Joi.object({
    name: Joi.string().alphanum(),
    email: Joi.string().trim(true).min(10).max(63).email(),
    birthday: Joi.date(),
    phone: Joi.string().length(13).pattern(/^\+[1-9]{1}[0-9]{3,14}$/),
    city: Joi.string()
})

module.exports = {
    signupSchema,
    loginSchema,
    userUpdateSchema
}