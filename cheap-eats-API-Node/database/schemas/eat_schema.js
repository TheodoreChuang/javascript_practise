const { Schema } = require("mongoose");
// const LocationModel = require('./../models/location_model')

const EatSchema = new Schema({
  eatName: {
    type: String,
    required: true
  },
  cuisine: {
    type: String,
    required: true
  },
  locations: [
    {
      locationId: {
        type: Schema.Types.ObjectId,
        ref: "Location",
        required: true
      },
      locationName: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      price: {
        type: Number,
        min: 0,
        max: 100,
        default: 0
      }
    }
  ]
});

module.exports = EatSchema;

// - name (pizza, burger, sandwich, pie, wrap, banhmi, sushi rolls)
// - cuisine
// - price
// - rate (0-10)
// - locations
//     - location
//     - times ate for each user
//     - timestamps //array of timestamps
