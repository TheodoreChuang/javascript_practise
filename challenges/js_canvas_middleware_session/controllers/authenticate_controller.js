const UserModel = require("./../database/models/user_model");

// /auth/register
function registerNew(req, res) {
  res.render("authenticate/register_new");
}

async function registerCreate(req, res) {
  const user = await UserModel.create(req.body);
  req.session.user = user;
  res.redirect("/");
}

module.exports = { registerNew };
