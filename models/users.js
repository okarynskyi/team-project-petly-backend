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
    location: {
        type: String,
        required: [true, 'Location is required']
    },
    phone: {
        type: String,
        required: [true, 'Phone is required']
    },
    birthday: {
        type: Date,
        default: Date("0000-00-00T00:00:00.000Z"),
    },
    avatarURL: {
        type: String,
        default: null
    },
    favorites: { // масив з id тваринок
        type: Array
    },
    token: {
        type: String,
        default: null,
    },
})
  
const User = model("user", userSchema);

module.exports = User;