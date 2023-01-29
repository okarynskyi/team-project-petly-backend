const { UserPet } = require("../../models")
const { HttpError } = require('../../helpers')
const { userPetSchema } = require("../../schemas/userPetSchema")

const addPet = async (req, res) => {

    const { error } = userPetSchema.validate(req.body)
    
    if (error) {
        throw HttpError(400, "Missing required name field")
    }
    

    const { _id: owner } = req.user;


    const result = await UserPet.create({ ...req.body, owner })

    res.status(201).json(result);
};

module.exports = addPet;