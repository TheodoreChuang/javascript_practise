const mongoose = require("mongoose");

module.exports = async function() {
  mongoose.connection.close();
  console.log("JEST global teardown");
};
