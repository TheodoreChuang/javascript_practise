const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes/mtg_routes"));

// TODO: error handling

module.exports = app;
