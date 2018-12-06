const express = require("express");
const exphbs = require("express-handlebars");
const methodOverride = require("method-override");
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(express.urlencoded());
app.use(express.json());

app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.use(require("./routes"));

app.use(express.static("public"));

module.exports = app;
