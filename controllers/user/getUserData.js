const { User, UserPet } = require("../../models")

const getUserData = async (req, res) => {

    const { _id: owner} = req.user;

    const user = await User.findById({_id:owner});

    const userPets = await UserPet.find({ owner });

    res.status(200).json({
        user: {
            name: user.name,
            email: user.email,
            location: user.location,
            phone: user.phone,
            birthday: user.birthday,
            avatarURL: user.avatarURL,
        },
        userPets
    });
}

module.exports = getUserData