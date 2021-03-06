const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

require("./config/passport");

app.use(morgan("combined"));

app.use(require("./routes"));

app.use(require("./middleware/error_handler_middleware"));

module.exports = app;
