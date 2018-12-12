const mongoose = require("mongoose");
const CardModel = require("../database/models/card_model");

module.exports = async function() {
  await CardModel.deleteMany({});
  mongoose.connection.close();

  console.log("JEST global teardown");
};
