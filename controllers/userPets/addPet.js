const { UserPet } = require("../../models");
const { HttpError } = require('../../helpers');
const { userPetSchema } = require("../../schemas/userPetSchema");
const cloudinary = require("../../services/cloudinary");

const addPet = async (req, res) => {

    const { error } = userPetSchema.validate(req.body);
    
    if (error) {
        throw HttpError(400, "Missing required name field")
    }


        const path = req.file.path

        const uploader = async (path) => await cloudinary.uploads(path, 'Images')

        const newURL = await uploader(path)

        let id = newURL.id

       const imageURL = await cloudinary.createImageTag(id, 161, 161)
    

    const { _id: owner } = req.user;


    const result = await UserPet.create({ ...req.body, owner });

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

