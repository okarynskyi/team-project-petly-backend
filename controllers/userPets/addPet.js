const { UserPet } = require("../../models");

const { uploadImgToCloudinary } = require("../../services/cloudinary");

const addPet = async (req, res) => {

    const imageURL = await uploadImgToCloudinary(req, 300, 300)
    

    const { _id: owner } = req.user;


    const result = await UserPet.create({ ...req.body, petsPhotoURL:imageURL, owner });

    res.status(201).json({
        newPet: {
            id: result._id,
            name: result.name,
            birthday: result.birthday,
            breed: result.breed,
            petsPhotoURL: imageURL,
            comments: result.comments,
            owner: result.owner
        }
    });
}

module.exports = addPet;

