const { Schema } = require("mongoose");

const ReviewSchema = new Schema({
  author: {
    type: String,
    required: true,
    default: "anonymous"
  },
  content: {
    type: String,
    required: true
  }
});

module.exports = ReviewSchema;
