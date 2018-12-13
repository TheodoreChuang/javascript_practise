const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const PageController = require("./../controllers/page_controller");
const AuthenticationController = require("./../controllers/authentication_controller");
const { authRedirect } = require("./../middleware/auth_middleware");
const passport = require("passport");

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
  // AuthenticationController.loginVerify
  passport.authenticate("local", {
    // successRedirect: "/dashboard",
    failureRedirect: "/login",
    session: false
  }),
  AuthenticationController.generateJWT
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
router.get(
  "/dashboard",
  passport.authenticate("jwt", { session: false }),
  PageController.dashboard
);

// Send to Google OAuth for Auth
router.get(
  "/oauth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth Redirect after Auth
router.get(
  "/oauth/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login",
    session: false
  }),
  AuthenticationController.generateJWT
);

// Send to Facebook OAuth for Auth
router.get(
  "/auth/facebook",
  passport.authenticate("facebook", { scope: ["email"] })
);

// Facebook OAuth Redirect after Auth
router.get(
  "/auth/facebook/callback",
  passport.authenticate("facebook", {
    failureRedirect: "/login",
    session: false
  }),
  AuthenticationController.generateJWT
);

module.exports = router;
