const { Notice } = require("../../models");
const { HttpError, buildQuery } = require("../../helpers");

const getByCategory = async (req, res) => {
  const { category } = req.params;

  const notices = await Notice.find(buildQuery(req, { adopStatus: category }))
    .populate("owner", "email phone")
    .sort({ createdAt: -1 });

  if (notices.length === 0) {
    throw HttpError(404, `No notices in "${category}" category`);
  }
  res.json(notices);
};

module.exports = getByCategory;
