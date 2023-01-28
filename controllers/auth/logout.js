const { User } = require('../../models')

const logout = async (req, res) => {
    const { _id: userId } = req.user;
    await User.findByIdAndUpdate(userId, { token: "" });
    
    res.status(204).json(); 
}

module.exports = logout