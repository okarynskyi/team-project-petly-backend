const Joi = require("joi");

const categorySchema = Joi.string()
    .valid("in-good-hands", "lost-found", "sell")
    .required();

module.exports = categorySchema