const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.connect(
  "mongodb://localhost/fakebae",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
