const Joi = require("joi");

const userPetSchema = Joi.object({
  name: Joi.string().required(),
  birthday: Joi.date().required(),
  breed: Joi.string().required(),
  petsPhotoURL: Joi.string(),
  comments: Joi.string().required(),
  owner: Joi.string(),
});

module.exports = {
  userPetSchema,
};
