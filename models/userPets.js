const { Schema, model } = require("mongoose");

const petShema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    birthday: {
        type: Date,
        required: [true, 'Birthday is required'],
    },
    breed: {
        type: String,
        required: [true, 'Breed is required'],
    },
    petsPhotoURL: {
        type: String,
        default: null,
    },
    comments: {
        type: String,
        required: [true, 'Image is required'],
    },
    owner: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
},{ versionKey: false, timestamps: true })


const UserPet = model("pet", petShema);

module.exports = UserPet;