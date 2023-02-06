const { Notice } = require("../../models");
const { HttpError, buildQuery } = require("../../helpers");

const getUserFavorites = async (req, res) => {
  const { _id: userId } = req.user;

  const notices = await Notice.find(buildQuery(req, { favorite: userId }))
    .populate("owner", "email phone")
    .sort({ createdAt: -1 });

  if (!notices) {
    HttpError(404, "No favorites");
  }

  res.json({ notices });
};

module.exports = getUserFavorites;
