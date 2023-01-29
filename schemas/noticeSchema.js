const Joi = require("joi");

const notiseSchema = Joi.object({
  title: Joi.string().required(),
  name: Joi.string().required(),
  birthday: Joi.date(),
  breed: Joi.string().required(),
  location: Joi.string().required(),
  sex: Joi.string().valid("male", "female").required(),
  comments: Joi.string(),
  avatarURL: Joi.string().required(),
  adopStatus: Joi.string()
    .valid("lost/found", "sell", "in good hands")
    .required(),
  price: Joi.number().required(),
  owner: Joi.string(),
  ownerEmail: Joi.string(),
  ownerPhone: Joi.string(),
});

module.exports = {
  notiseSchema,
};
