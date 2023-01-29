const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { HttpError } = require('../../helpers');
const { User } = require('../../models');
const { JWT_SECRET } = process.env;

const login = async (req, res) => {

    const { email, password } = req.body;

    const user = await User.findOne({ email });
    
    if (!user) {
        throw HttpError(401, 'Wrong Email or Password')
    }
    
    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
        throw HttpError(401, 'Wrong Email or Password')
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '23h' });
    await User.findByIdAndUpdate(user._id, { token });
    
    res.status(200).json({
        token,
        user: {
            name: user.name,
            email: user.email,
            city: user.city,
            phone: user.phone,
            birthday: user.birthday,
            avatarURL: user.avatarURL,
            favorites: user.favorites
        }
    })
};

module.exports = login;