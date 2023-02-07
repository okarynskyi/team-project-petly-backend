const { Notice } = require("../../models");
const { HttpError, buildQuery } = require("../../helpers");

const getByCategory = async (req, res) => {
  const { category } = req.params;

  const { page = 1, limit = 8} = req.query;
  const skip = (page - 1) * limit;

  const total = await Notice.count(buildQuery(req, { adopStatus: category }))
  const notices = await Notice.find(buildQuery(req, { adopStatus: category }))
    .populate("owner", "email phone")
    .sort({ createdAt: -1 })
    .limit(limit)
    .skip(skip);
  
  if (notices.length === 0) {
    throw HttpError(404, `No notices in "${category}" category`);
  }
  
  const totalPages = Math.ceil(total / limit);;
    
  res.json({notices, page, limit, totalPages});
};

module.exports = getByCategory;
