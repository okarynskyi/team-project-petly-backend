const { Notice } = require("../../models");
const { HttpError } = require("../../helpers");

const getByCategory = async (req, res) => {
  const { category } = req.params;
  const { query } = req.query;
   
  let searchOptions = {};

  if (!query) {
    searchOptions = {adopStatus: category}
  } else {
    searchOptions = {
            $text: { $search: `${query}` },
            adopStatus: category
        }
  }      
  
  const notices = await Notice.find(searchOptions)
    .populate('owner', 'email phone')
    .sort({ createdAt: -1 });

  if (notices.length === 0) {
    throw HttpError(404, `No notices in ${category} category`);
  }
  res.json(notices);
};

module.exports = getByCategory;
