const Joi = require("joi");

const notiseSchema = Joi.object({
  title: Joi.string()
    .trim(true)
    .min(2)
    .max(48)
    .regex(/^[a-zA-Z\s]*$/)
    .required(),
  name: Joi.string()
    .trim(true)
    .min(2)
    .max(16)
    .regex(/^[a-zA-Z]+$/)
    .required(),
  birthday: Joi.date().required(),
  breed: Joi.string()
    .trim()
    .min(2)
    .max(24)
    .regex(/^[a-zA-Z\s]*$/)
    .required(),
  location: Joi.string()
    .trim()
    .regex(/[A-Z][a-z]*,\s[A-Z][a-z]*/) // строка в форматі Місто, Область. Наприклад: Brovary, Kyiv або Akhtyrka, Sumy
    .required(),
  sex: Joi.string().valid("male", "female").required(),
  comments: Joi.string().min(8).max(120).required(),
  avatarURL: Joi.string(),
  adopStatus: Joi.string()
    .valid("lost/found", "sell", "in good hands")
    .required(),
  price: Joi.number().min(1),
});

module.exports = notiseSchema;
