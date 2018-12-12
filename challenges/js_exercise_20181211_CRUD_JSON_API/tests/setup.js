const mongoose = require("mongoose");
const CardModel = require("../database/models/card_model");

module.exports = async function() {
  // console.log("JEST global setup");
  // mongoose.connect(
  //   "mongodb://localhost/mtg_api_test",
  //   { useNewUrlParser: true }
  // );
  // mongoose.Promise = global.Promise;
  // mongoose.connection.on("error", err => console.log(err));
};
