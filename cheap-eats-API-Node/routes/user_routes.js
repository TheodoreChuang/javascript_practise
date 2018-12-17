const express = require("express");
const router = express.Router();
const passport = require("passport");
// const { celebrate, Joi } = require("celebrate");

const UserController = require("./../controllers/user_controller");
const { generateJWT } = require("./../middleware/auth_middlware");

router.use("/user", passport.authenticate("jwt", { session: false }));

router
  .route("/user")
  // GET /user //user information
  // checkJwt required
  .get(UserController.show)

  // PUT/PATCH /user //update user information
  // checkJwt required
  .put(UserController.update)
  .patch(UserController.update);

// POST /register
//     - email
//     - password
//     - name
router.post("/register", UserController.register);

// POST /login
//     - email
//     - password
router.post(
  "/login",
  passport.authenticate("local", { session: false }),
  generateJWT
);

module.exports = router;
