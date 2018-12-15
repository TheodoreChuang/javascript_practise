const { Schema } = require("mongoose");

const EatSchema = new Schema({
  eatName: {
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

// - name (pizza slice, cheese burger, wrap, banhmi, sushi rolls, salad)
// - cuisine
// - price
// - rate (0-10)
// - locations
//     - location
//     - times ate for each user
//     - timestamps //array of timestamps
