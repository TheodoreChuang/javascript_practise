const mongoose = require("mongoose");
const CardSchema = require("./../schemas/card_schema");

const CardModel = mongoose.model("card", CardSchema);

module.exports = CardModel;
