const { Schema } = require("mongoose");

const LocationSchema = new Schema({
  locationName: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String
  },
  country: {
    type: String
  },
  eatsID: [{ type: Schema.Types.ObjectId, ref: "Eat" }]
});

module.exports = LocationSchema;
