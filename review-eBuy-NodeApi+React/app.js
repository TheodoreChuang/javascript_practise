const express = require("express");
const app = express();
const passport = require("./config/passport");

const routes = require("./routes");

// create body from stream data
app.use(express.json());
app.use(express.urlencoded());

app.use(passport.initialize());

app.get("/", (req, res) => res.send("Hello World!"));

app.use(routes);

module.exports = app;
