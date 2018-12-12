const { celebrate, Joi } = require("celebrate");

function authenticate() {
  // celebrate({
  //   body: {
  //     email: Joi.string().required(),
  //     password: Joi.string().required()
  //   }
  // });
  // next();
}

function authorize(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.redirect("/login");
  }
  next();
}

function authRedirect(req, res, next) {
  if (!req.session || !req.session.user) {
    return res.redirect("/dashboard");
  }
  next();
}

module.exports = { authorize, authRedirect };
