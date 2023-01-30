const { HttpError } = require('../../helpers');
const { User } = require('../../models');

const removeFromFavorite = async (req, res) => {

    const { _id } = req.user;
    const { noticeId } = req.params;

    const {favorites} = await User.findById({ _id });
    
    const index = favorites.indexOf(noticeId);
    if (index > -1) {
       favorites.splice(index, 1)
    } else {
        throw HttpError(400, 'ID not in favorites')
    }

    const user = await User.findByIdAndUpdate({ _id }, { favorites }, { new: true });

    res.status(201).json({
        user: {
            name: user.name,
            email: user.email,
            favorites: user.favorites,
        }
    })

}

module.exports = removeFromFavorite