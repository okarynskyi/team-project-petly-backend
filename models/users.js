const { Schema, model } = require('mongoose');

const userSchema = new Schema({
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
    },
    name: {
        type: String,
        required: [true, 'Name is required']
    },
    city: {
        type: String,
        required: [true, 'City is required']
    },
    region: {
        type: String,
        required: [true, 'Region is required']
    },
    birthday: {
        type: Date
    },
    avatarURL: {
        type: String
    },
    favorites: { // масив з id тваринок
        type: Array
    },
    token: {
        type: String,
        default: null,
    },
    // verify: {
    //     type: Boolean,
    //     default: false,
    // },
    // verificationToken: { // код для підтвердження пошти
    //     type: String,
    //     required: [true, 'Verify token is required'],
    // },
})
  
const User = model("user", userSchema);

module.exports = User;