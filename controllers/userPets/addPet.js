const { UserPet } = require("../../models");
const { uploadImgToCloudinary } = require("../../services/cloudinary");

const addPet = async (req, res) => {

    const imageURL = await uploadImgToCloudinary(req, 161, 161);
    
    const { _id: owner } = req.user;

    const {_id, name, birthday, breed, comments} = await UserPet.create({ ...req.body, petsPhotoURL: imageURL, owner });

    res.status(201).json({
        newPet: {
            _id,
            name,
            birthday,
            breed,
            petsPhotoURL: imageURL,
            comments,
            owner,
        }
    });
};

module.exports = addPet;

