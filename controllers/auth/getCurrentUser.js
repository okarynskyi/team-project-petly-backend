const getCurrentUser = (req, res) => {

    const { email, name, city, phone, birthday, avatarURL, favorites } = req.user
    
    res.json({
        user: {
            email,
            name,
            city,
            phone,
            birthday,
            avatarURL,
            favorites,
        }
    })
}

module.exports = getCurrentUser