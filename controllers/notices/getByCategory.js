const { Notice } = require("../../models");

const getByCategory = async (req, res) => {
  const { category } = req.params;

  const notices = await Notice.find({ adopStatus: category });

  res.json({
    notices,
  });
};

module.exports = getByCategory;
