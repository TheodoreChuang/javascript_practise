const { Schema } = require("mongoose");

const ProductSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  department: {
    type: String,
    required: true,
    enum: ["outdoor", "bathroom", "clothing"]
  },
  price: {
    type: Number,
    required: true,
    min: 0
  }
});

module.exports = ProductSchema;
