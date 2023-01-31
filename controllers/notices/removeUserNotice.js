const { HttpError } = require('../../helpers');
const { Notice } = require('../../models');

const removeUserNotice = async (req, res) => {

const { _id } = req.user;

  const notices = await Notice.findOneAndRemove({ "owner._id": _id });

  if (notices.length === 0) {
    throw HttpError(404, "No notices found");
  }
  res.status(200).json({ message: "Notice deleted" });

}


module.exports = removeUserNotice