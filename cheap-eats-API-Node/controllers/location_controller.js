// const LocationModel = require("./../database/models/location_model");

function index(req, res) {
  return res.json("Location Controller - index");
}

function create(req, res) {
  return res.json("Location Controller - create");
}

function update(req, res) {
  return res.json("Location Controller - update");
}

module.exports = { index, create, update };
