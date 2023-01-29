const login = require('./login');
const signup = require('./signup');
const getCurrentUser = require('./getCurrentUser');
const logout = require('./logout');
const userUpdate = require('./userUpdate');

module.exports = {
    login,
    signup,
    getCurrentUser,
    logout,
    userUpdate
};