const { Notice, User } = require('../../models');
const { HttpError } = require('../../helpers');


const getUserFavorites = async (req, res) => {

    const { _id, name, email} = req.user;
    console.log(_id)
    
    const { favorites } = await User.findOne({ _id });

    const notices = await Notice.find();

    if (!notices) {
        throw HttpError(404, 'No notices found')
    }

    const favoriteNotices = notices.filter(notice => favorites.includes(notice._id));

    if (favoriteNotices.length === 0) {
        return (
            res.json({
                user: {
                    name,
                    email,
                },
                favorites: null
            }))
    }
    
    res.json({
        user: {
            name,
            email,
        },
        favorites: favoriteNotices
    })
}

module.exports = getUserFavorites;