const mongoose = require("mongoose");
const LocationSchema = require("./../schemas/location_schema");

const LocationModel = mongoose.model("Location", LocationSchema);

module.exports = LocationModel;
