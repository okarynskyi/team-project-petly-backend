const { Schema, model } = require("mongoose");

const noticeSchema = new Schema(
  {
    title: {
      type: String,
      text: true,
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
      required: true,
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
    favorite: {
        type: Array
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Notice = model("notice", noticeSchema);

module.exports = Notice;
