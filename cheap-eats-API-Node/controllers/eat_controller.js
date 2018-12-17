// const EatModel = require("./../database/models/eat_model");

function index(req, res) {
  return res.json("Eat Controller - index");
}

function create(req, res) {
  return res.json("Eat Controller - create");
}

function increment(req, res) {
  return res.json("Eat Controller - increment");
}

function decrement(req, res) {
  return res.json("Eat Controller - decrement");
}

function update(req, res) {
  return res.json("Eat Controller - update");
}

module.exports = { index, create, increment, decrement, update };
