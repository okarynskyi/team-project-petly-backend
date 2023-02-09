const { HttpError } = require('../../helpers');
const { User } = require('../../models');
const { uploadImgToCloudinary } = require("../../services/cloudinary");

const userUpdate = async (req, res) => {
    const { _id: userId } = req.user;
    if (!req.file) {
        const user = await User.findByIdAndUpdate({ _id: userId }, { ...req.body }, { new: true });
        if (!user) {
            throw HttpError(404)
        }
        const { name, email, location, phone, birthday } = user;
        
        res.status(200).json({
            user: {
                name,
                email,
                location,
                phone,
                birthday, 
            }
        })        
        return
    }
    const avatarURL = await uploadImgToCloudinary(req, 233, 233)    
    const user= await User.findByIdAndUpdate({ _id: userId }, { ...req.body, avatarURL }, { new: true });
    if (!user) {
        throw HttpError(404)
    }
    const { name, email, location, phone, birthday } = user;

    res.status(200).json({
        user: {
            name,
            email,
            location,
            phone,
            birthday, 
            avatarURL
        }
    })    
}

module.exports = userUpdate;