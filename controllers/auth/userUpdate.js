const { HttpError } = require('../../helpers');
const { User } = require('../../models');
const { uploadImgToCloudinary } = require("../../services/cloudinary");

const userUpdate = async (req, res) => {
    
    const { _id: userId } = req.user;

    if (!req.file) {
        const user = await User.findByIdAndUpdate({ _id: userId }, { ...req.body }, { new: true });
        res.status(200).json({
            user: {
                name: user.name,
                email: user.email,
                location: user.location,
                phone: user.phone,
                birthday: user.birthday, 
            }
        })
        
        return
    }

    const avatarURL = await uploadImgToCloudinary(req, 233, 233)
    
    const user = await User.findByIdAndUpdate({ _id: userId }, { ...req.body, avatarURL }, { new: true });
    
    if (!user) {
        throw HttpError(404)
    }

    res.status(200).json({
        user: {
            name: user.name,
            email: user.email,
            city: user.city,
            phone: user.phone,
            birthday: user.birthday, 
            avatarURL
        }
    })
    
}

module.exports = userUpdate;