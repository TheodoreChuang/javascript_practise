const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const { authorize, authRedirect } = require("./../middleware/auth_middleware");

router.use("/register", authRedirect);
router.use("/login", authRedirect);

// ***** Root Routes *****

router.get("/", PageController.index);

// ***** Authentication Routes *****

router.get("/login", AuthenticationController.loginForm);

router.post(
  "/login",
  celebrate({
    body: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  AuthenticationController.loginVerify
);

router.get("/register", AuthenticationController.make);

router.post(
  "/register",
  celebrate({
    body: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  AuthenticationController.create
);

router.get("/logout", AuthenticationController.logout);

// ***** Dashboard Routes *****

router.get("/dashboard", authorize, PageController.dashboard);

module.exports = router;
