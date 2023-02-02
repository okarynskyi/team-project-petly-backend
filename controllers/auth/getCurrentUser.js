const getCurrentUser = (req, res) => {

    const { email, name, location, phone, birthday, avatarURL, favorites } = req.user;
    
    res.json({
        user: {
            email,
            name,
            location,
            phone,
            birthday,
            avatarURL,
            favorites,
        }
    })
}

module.exports = getCurrentUser;