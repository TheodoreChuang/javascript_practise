const express = require("express");
const router = express.Router();
const passport = require("passport");

const UserRoutes = require("./user_routes"),
  EatRoutes = require("./eat_routes"),
  LocationRoutes = require("./location_routes");

router.get("/", (req, res) => res.send("Root path"));

router.use("/api", UserRoutes);

router.use(
  "/api",
  passport.authenticate("jwt", { session: false }),
  EatRoutes,
  LocationRoutes
);

module.exports = router;
