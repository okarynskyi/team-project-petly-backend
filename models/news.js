const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
  date: {
    type: Date,
  },
});

const News = model("news", newsSchema);

module.exports = News;
