const Joi = require("joi");

const userPetSchema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.date(),
  breed: Joi.string().required(),
  petsPhotoURL: Joi.string(),
  comments: Joi.string(),
  owner: Joi.string(),
});

module.exports = {
  userPetSchema,
};
