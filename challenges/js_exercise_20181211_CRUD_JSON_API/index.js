const mongoose = require("mongoose");
const app = require("./app");
const port = 3000;

mongoose.connect(
  "mongodb://localhost/mtg_api",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

mongoose.connection.on("error", err => console.log(err));

app.listen(port, () => console.log(`Server is listening on port ${port}`));

// TODO
//x write integration tests first
//x Full CRUD
//x Only JSON API, no views
//x MongoDB
//x Validation using celebrate and mongoose
//x Morgan logger
//x generic error handling
