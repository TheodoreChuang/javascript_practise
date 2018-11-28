// ----- HTTP Manual Way -----

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const students = ["Natasha", "Shakti", "Santosh", "Allen", "James", "Blake"];

// const server = http.createServer((req, res) => {
//   //   res.statusCode = 200;
//   //   res.setHeader("Content-Type", "text/plain");
//   //   res.end("Hello World");

//   //   console.log(req);

//   //   console.log(req.method);
//   //   console.log(req.url);

//   if (req.method === "GET" && req.url === "/") {
//     console.log("matching students");
//   } else if (req.method === "GET" && req.url === "/students") {
//     console.log("getting students");
//     res.writeHead(200, { "Content-Type": "application/json; charset=UTF-8" });
//     res.write(JSON.stringify(students));
//   } else if (req.method === "POST" && req.url === "/students") {
//     console.log("creating students");
//   } else if (req.url === "/favicon.ico") {
//     console.log("We do not have a favicon");
//   } else {
//     console.log("could not find route");
//     throw "Route does not exist";
//   }

//   res.end();
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// ----- Express JS -----

const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const students = ["Natasha", "Shakti", "Santosh", "Allen", "James", "Blake"];

app.get("/", (req, res) => {
  let randomIndex1 = Math.floor(Math.random() * students.length);
  let randomIndex2 = Math.floor(Math.random() * students.length);
  res.render("home", {
    student1: students[randomIndex1],
    student2: students[randomIndex2]
  });
});

app.get("/students", (req, res) => {
  res.send(students);
});

app.post(
  "/students",
  (req, res, next) => {
    console.log(req.body);
    next();
  },
  (req, res) => {
    students.push(req.body.name);
    res.status(201).send(students);
  }
);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
