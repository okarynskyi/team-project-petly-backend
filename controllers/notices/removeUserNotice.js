const { HttpError } = require('../../helpers');
const { Notice } = require('../../models');

const removeUserNotice = async (req, res) => {

  const { noticeId } = req.params;
  const { _id: owner } = req.user;
  
  const result = await Notice.findOneAndRemove({ _id: noticeId, owner });
  if (!result) {
    throw HttpError(404, "No notices found");
  }

  res.status(200).json({ message: "Notice deleted" });
};


module.exports = removeUserNotice