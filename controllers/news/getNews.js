const { HttpError } = require("../../helpers");
const { News } = require("../../models");

const getNews = async (req, res) => {
  const news = await News.find()
    .sort({ date: -1 });;

  if (!news) {
    throw HttpError(404);
  }

  res.json({ news });
};

module.exports = getNews;
