const { Notice } = require("../../models");
const { HttpError, buildQuery } = require("../../helpers");

const getUsersNotices = async (req, res) => {
  const { _id } = req.user;

  // Pagination -----------
  const { page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;
  const total = await Notice.count(buildQuery(req, { owner: _id }));
  const totalPages = Math.ceil(total / limit);
  // -----------------------

  const notices = await Notice.find(buildQuery(req, { owner: _id }))
    .populate("owner", "email phone")
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip);
  
  if (notices.length === 0) {
    throw HttpError(404, "No saved notices");
  }  
  
  res.json({notices, page, limit, totalPages});
};

module.exports = getUsersNotices;
