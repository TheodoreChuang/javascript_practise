// const UserModel = require("./../database/models/user_model");

function show(req, res) {
  return res.json("UserController.show");
}

function register(req, res) {
  return res.json("UserController.register");
}

// function login(req, res) {
//   return res.json("UserController.login");
// }

function update(req, res) {
  return res.json("UserController.update");
}

module.exports = { show, register, update };
