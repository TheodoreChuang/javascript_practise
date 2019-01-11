const express = require("express");
const router = express.Router();
const passport = require("passport");
const authRoutes = require("./auth_routes");
const productRoutes = require("./product_routes");
const orderRoutes = require("./order_routes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);

router.use(
  "/orders",
  passport.authenticate("jwt", { session: false }),
  orderRoutes
);

module.exports = router;
