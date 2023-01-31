const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getById = async (req, res) => {
  const { noticeId } = req.params;

  const result = await Notice.findOne({ _id: noticeId });

  if (!result) {
    throw HttpError(404);
  }

  res.json(result);
};

module.exports = getById;
