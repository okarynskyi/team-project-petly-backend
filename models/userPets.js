const { Schema, model } = require("mongoose");

const petShema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    birthday: {
        type: Date,
        default: null,
    },
    breed: {
        type: String,
        required: [true, 'Breed is required'],
    },
    petsPhotoURL: {
        type: String,
        default: null
    },
    comments: {
        type: String,
    },
    owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
})


const UserPet = model("pet", petShema);

module.exports = UserPet;