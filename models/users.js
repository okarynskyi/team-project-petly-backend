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
    },
    phone: {
        type: String,
        required: [true, 'Phone is required']
    },
    birthday: {
        type: Date,
        default: null,
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