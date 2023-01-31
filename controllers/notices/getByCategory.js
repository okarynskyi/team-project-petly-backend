const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getByCategory = async (req, res) => {
  const { category } = req.params;

  const notices = await Notice.find({ adopStatus: category });

  if (notices.length === 0) {
    throw HttpError(404, `No notices in ${category} category`);
  }
  res.json(notices);
};

module.exports = getByCategory;
