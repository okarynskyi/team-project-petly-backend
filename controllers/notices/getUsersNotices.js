const { Notice } = require("../../models");
const { HttpError, buildQuery } = require("../../helpers");

const getUsersNotices = async (req, res) => {
  const { _id } = req.user;

  const notices = await Notice.find(buildQuery(req, { owner: _id }))
    .populate("owner", "email phone")
    .sort({ createdAt: -1 });

  if (notices.length === 0) {
    throw HttpError(404, "No saved notices");
  }
  res.json(notices);
};

module.exports = getUsersNotices;
