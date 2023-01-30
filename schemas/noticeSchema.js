const Joi = require("joi");

const notiseSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  birthday: Joi.string()
    .regex(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/)
    .required(),
  breed: Joi.string().required(),
  location: Joi.string().required(),
  sex: Joi.string().valid("male", "female").required(),
  comments: Joi.string().required(),
  avatarURL: Joi.string(),
  adopStatus: Joi.string()
    .valid("lost/found", "sell", "in good hands")
    .required(),
  price: Joi.number(),
  owner: {
    _id: Joi.string(),
    ownerEmail: Joi.string(),
    ownerPhone: Joi.string(),
  },
});

module.exports = notiseSchema;
