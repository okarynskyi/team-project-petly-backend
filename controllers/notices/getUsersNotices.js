const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getUsersNotices = async (req, res) => {
  const { _id } = req.user;

  const notices = await Notice.find({ "owner._id": _id })
    .sort({ createdAt: -1 });

  if (notices.length === 0) {
    throw HttpError(404, "No saved notices");
  }
  res.json(notices);
};

module.exports = getUsersNotices;
