// using passport.authenticate instead
// function authorize(req, res, next) {
//   // if (!req.session || !req.session.user) {
//   if (!req.user) {
//     return res.redirect("/login");
//   }
//   next();
// }

function authRedirect(req, res, next) {
  // if (req.session && req.session.user) {
  if (req.user) {
    return res.redirect("/dashboard");
  }

  next();
}

module.exports = { authRedirect };
