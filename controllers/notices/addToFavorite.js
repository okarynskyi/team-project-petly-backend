const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const addToFavorite = async (req, res) => {

    const { _id } = req.user;
    const { noticeId } = req.params;

    const { favorites } = await User.findById({ _id });
   
    const index = favorites.indexOf(noticeId);
    if (index !== -1) {
        throw HttpError(409, 'ID in use')
    }
        
    favorites.push(noticeId);

    const user = await User.findByIdAndUpdate({ _id }, { favorites }, { new: true });

    res.status(201).json({
        user: {
            name: user.name,
            email: user.email,
            favorites: user.favorites,
        }
    })    
}

module.exports = addToFavorite;