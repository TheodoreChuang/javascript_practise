const express = require("express");
const morgan = require("morgan");
const app = express();

// custom error
global.HTTPError = class HTTPError extends Error {
  constructor(statusCode, message) {
    super(message);
    this.statusCode = statusCode;
    this.name = "HTTPError";

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HTTPError);
    }
  }
};

app.use(express.urlencoded());
app.use(express.json());

app.use(morgan("combined"));

app.use(require("./routes/mtg_routes"));

app.use((err, req, res, next) => {
  switch (err.name) {
    case "HTTPError":
      return res.status(err.statusCode).send(err.message);
      break;
  }
  next(err);
});

module.exports = app;
