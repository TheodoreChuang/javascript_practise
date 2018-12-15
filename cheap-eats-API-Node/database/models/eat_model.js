const mongoose = require("mongoose");
const EatSchema = require("./../schemas/eat_schema");

const EatModel = mongoose.model("Eat", EatSchema);

module.exports = EatModel;
