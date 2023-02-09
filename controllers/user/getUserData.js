const { UserPet } = require("../../models")

const getUserData = async (req, res) => {

    const { _id: id, name, email, location, phone, birthday, avatarURL} = req.user;
    const userPets = await UserPet.find({ owner: id });

    res.status(200).json({
        user: {
            id,
            name,
            email,
            location,
            phone,
            birthday,
            avatarURL,
        },
        userPets
    });
}

module.exports = getUserData