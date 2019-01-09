const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const passport = require("passport");
const UserModel = require("./../database/models/user_model");
const AuthController = require("./../controllers/auth_controller");
// const JWTService = require('./../services/jwt_service')

router.post(
  "/register",
  celebrate({
    body: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  AuthController.register
);

router.post(
  "/login",
  celebrate({
    body: {
      email: Joi.string().required(),
      password: Joi.string().required()
    }
  }),
  passport.authenticate("local", { session: false }),
  AuthController.login
);

module.exports = router;
