const Joi = require("joi");

const userPetSchema = Joi.object({
  name: Joi.string()
    .trim(true)
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z\s]*$/)
    .required(),
  birthday: Joi.date().required(),
  breed: Joi.string()
    .trim(true)
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z\s]*$/)
    .required(),
  comments: Joi.string()
    .trim(true)
    .min(8)
    .max(120)
    .required(),
});

module.exports = {
  userPetSchema,
};
