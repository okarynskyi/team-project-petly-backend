const { HttpError } = require("../helpers");
const {categorySchema} = require('../schemas')

const isValidCategory = (req, res, next) => {
  const { category } = req.params;

  const { error } = categorySchema.validate(category);
  if (error) {
    next(HttpError(404, "Invalid category")) ;
  }

  if (category === "in-good-hands") {
    req.params.category = "in good hands";
  }

  if (category === "lost-found") {
    req.params.category = "lost/found";
  }

  next();
};

module.exports = isValidCategory;
