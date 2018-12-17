const { Schema } = require("mongoose");
const EatModel = require("./../models/eat_model");

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
