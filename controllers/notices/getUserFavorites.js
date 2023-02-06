const { Notice } = require('../../models');
const { HttpError } = require('../../helpers');


const getUserFavorites = async (req, res) => {
    const { _id: userId } = req.user;
    const { query } = req.query;

    let searchOptions = {};

    if (!query) {
    searchOptions = {favorite: userId}
  } else {
    searchOptions = {
            $text: { $search: `${query}` },
            favorite: userId
        }
  }
    
    const notices = await Notice.find(searchOptions)
        .populate('owner', 'email phone')
        .sort({ createdAt: -1 })
       
    if (!notices) {
        HttpError(404, 'No favorites')
    }
    
    res.json({ notices });
}

module.exports = getUserFavorites;