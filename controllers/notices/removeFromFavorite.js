const { Notice } = require('../../models');
const { HttpError } = require('../../helpers');

const removeFromFavorite = async (req, res) => {

    const { _id: userId } = req.user;
    const { noticeId } = req.params;

    const {favorite} = await Notice.findByIdAndUpdate({ _id: noticeId }, { $pull: { favorite: userId } }, { new: true });

    if (!favorite) {
        throw HttpError(404)
    }

    res.status(200).json({
        user: userId,
        notice: {
            id: noticeId,
            favorite: favorite,
        }
    })

}

module.exports = removeFromFavorite