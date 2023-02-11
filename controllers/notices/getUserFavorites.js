const { Notice } = require("../../models");
const { HttpError, buildQuery } = require("../../helpers");

const getUserFavorites = async (req, res) => {
  const { _id: userId } = req.user;

  // Pagination---------------
  const { page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
  const total = await Notice.count(buildQuery(req, { favorite: userId }));
  const totalPages = Math.ceil(total / limit);
// ---------------------------
  
  const notices = await Notice.find(buildQuery(req, { favorite: userId }))
    .populate("owner", "email phone")
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip)
    
  if (!notices) {
    throw HttpError(404, "No favorites");
  }
  
  res.json({ notices, page, limit, totalPages });
};

module.exports = getUserFavorites;
