const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getUsersNotices = async (req, res) => {
  const { _id } = req.user;
  const { query } = req.query;

  let searchOptions = {};

  if (!query) {
    searchOptions = {owner: _id}
  } else {
    searchOptions = {
            $text: { $search: `${query}` },
            owner: _id
        }
  }
  

  const notices = await Notice.find(searchOptions)
    .populate('owner', 'email phone')
    .sort({ createdAt: -1 });

  if (notices.length === 0) {
    throw HttpError(404, "No saved notices");
  }
  res.json(notices);
};

module.exports = getUsersNotices;
