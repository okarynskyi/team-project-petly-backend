const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const { User } = require('../../models')
const { HttpError } = require('../../helpers')
const {JWT_SECRET} = process.env

const signup = async (req, res) => {

    const { email, password } = req.body
    
    const user = await User.findOne({ email })

    if (user) {
        throw HttpError(409, 'Email in use')
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = await User.create({ ...req.body, password: hashedPassword })
    
    const { _id } = newUser
   
    const payload = {
        id: _id
    }

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '23h' })
    await User.findByIdAndUpdate(_id, {token})
    
    res.status(201).json({
        token,
        user: {
            name: newUser.name,
            email: newUser.email,
            city: newUser.city,
            phone: newUser.phone,
            birthday: newUser.birthday, 
            avatarURL: newUser.avatarURL
        }
    })
}

module.exports = signup