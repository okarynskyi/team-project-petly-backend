const { Notice } = require('../../models');
const { HttpError } = require('../../helpers');


const getUserFavorites = async (req, res) => {

    const { _id: userId } = req.user;
    console.log(userId)
    
    const notices = await Notice.find({ favorite: userId })
    .sort({ createdAt: -1 })
       
    if (!notices) {
        HttpError(404, 'No favorites')
    }
    
    res.json({ notices });
}

module.exports = getUserFavorites;