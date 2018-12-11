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

// adds req.body property for input to server
app.use(express.urlencoded());
app.use(express.json());

// application middleware
// app.use((req, res, next) => {
//   // HTTP Method
//   console.log("METHOD: ", req.method);
//   // Route used
//   console.log("URL: ", req.url);
//   // Any Data
//   console.log("BODY: ", req.body || {});

//   next();
// });

app.use(morgan("combined"));

app.use(require("./routes"));

// serves static files, if routes do not exist
app.use(express.static("./public"));

// error middleware
app.use((err, req, res, next) => {
  // console.log("custom error: ", err);
  switch (err.name) {
    case "HTTPError":
      return res.status(err.statusCode).send(err.message);
      break;
  }
  next(err);
});

module.exports = app;
