const { HttpError } = require("../helpers");

const isValidCategory = (req, res, next) => {
  const { category } = req.params;

  if (
    category !== "in-good-hands" &&
    category !== "lost-found" &&
    category !== "sell"
  ) {
    next(HttpError(404, "Invalid category"));
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
