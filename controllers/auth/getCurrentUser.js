const getCurrentUser = (req, res) => {

    const { email, name, location, phone, birthday, avatarURL } = req.user;
    
    res.json({
        user: {
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