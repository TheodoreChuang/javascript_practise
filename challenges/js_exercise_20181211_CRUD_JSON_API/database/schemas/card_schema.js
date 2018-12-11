const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CardSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    enum: ["white", "blue", "black", "red", "green", "colorless"],
    default: ""
  },
  type: {
    type: String,
    required: true
  }
});

module.exports = CardSchema;
