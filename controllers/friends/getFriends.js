const { HttpError } = require("../../helpers");
const { Friend } = require("../../models");

const getFriends = async (req, res) => {
  const friends = await Friend.find();

  if (!friends) {
    throw HttpError(404);
  }

  res.json({ friends });
};

module.exports = getFriends;
