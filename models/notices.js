const { Schema, model } = require("mongoose");

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    birthday: {
      type: Date,
      required: true,
    },
    breed: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    comments: {
      type: String,
      // обов`язкове поле?
    },
    avatarURL: {
      type: String,
    },
    adopStatus: {
      type: String,
      enum: ["lost/found", "sell", "in good hands"],
      required: true,
    },
    price: {
      type: Number,
      default: null,
    },
    owner: {
      _id: {
        // userId
        type: Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
      email: {
        // додається на бєку по запиту на юзера
        type: String,
        required: true,
      },
      phone: {
        // додається на бєку по запиту на юзера
        type: String,
        required: true,
      },
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeSchema);

module.exports = Notice;
