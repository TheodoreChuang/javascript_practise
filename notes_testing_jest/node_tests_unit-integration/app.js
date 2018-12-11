const express = require("express");
const exphbs = require("express-handlebars");
// const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(express.urlencoded);
app.use(express.json());

app.use(require("./routes"));

module.exports = app;
