const UserModel = require("./../database/models/user_model");
const jwt = require("jsonwebtoken");

function loginForm(req, res) {
  res.render("authentication/login_form");
}

// async function loginVerify(req, res) {
//   const { email, password } = req.body;
//   const user = await UserModel.findOne({ email });

//   if (!user) {
//     return res.redirect("/login");
//   }

//   const valid = await user.verifyPassword(password);

//   if (!valid) {
//     return res.redirect("/login");
//   }

//   req.session.user = user;
//   res.redirect("/dashboard");
// }

// Show Registration Page to create new user
function make(req, res) {
  res.render("authentication/make");
}

// Create new user
async function create(req, res, next) {
  // const { email, password } = req.body // not required due to celebrate validation
  const user = await UserModel.create(req.body);
  const token = jwt.sign({ sub: user._id }, process.env.JWT_SECRET);
  // res.cookie("jwt", token); // not recommended JWT in cookie
  req.session.jwt = token;
  res.redirect("/dashboard");
}

function logout(req, res) {
  // req.session.destroy(() => { });
  req.logout();
  // res.cookie("jwt", null, { maxAge: -1 });
  delete req.session.jwt;
  res.redirect("/");
}

function generateJWT(req, res) {
  const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);
  // res.cookie("jwt", token); // not recommended JWT in cookie
  req.session.jwt = token;
  res.redirect("/dashboard");
}

module.exports = {
  loginForm,
  make,
  create,
  logout,
  generateJWT
};
