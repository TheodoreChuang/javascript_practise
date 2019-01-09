const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");

const LocationController = require("./../controllers/location_controller");

router
  .route("/locations")
  // GET /locations //list of locations
  .get(LocationController.index)
  // POST /locations //where they had their eats (name, city, state, country)
  .post(LocationController.create);

router
  .route("/locations/:id")
  // PUT/PATCH /locations/:id //update location details
  .put(LocationController.update)
  .patch(LocationController.update);

module.exports = router;
