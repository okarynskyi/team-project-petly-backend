const getCurrentUser = (req, res) => {

    const { email, name, location, phone, birthday, avatarURL, _id: id } = req.user;
    
    res.json({
        user: {
            id,
            email,
            name,
            location,
            phone,
            birthday,
            avatarURL,
        }
    })
}

module.exports = getCurrentUser;