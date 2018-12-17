const express = require("express");
const router = express.Router();
// const { celebrate, Joi } = require("celebrate");

const EatController = require("./../controllers/eat_controller");

router
  .route("/eats")
  // GET /eats //list of all eats
  .get(EatController.index)

  // POST /eats //start keeping track of a new eat
  //     - name (pizza, burger, wrap, ban hmi, sushi rolls, salad)
  //     - price
  //     - locations
  //         - location
  //         - times ate for each user
  //         - timestamps //array of timestamps
  .post(EatController.create);

// PUT/PATCH /eats/:id/increment //increase the amount of an existing eat and adds a timestamp
//     - location
router.post("/eats/:id/increment", EatController.increment);

// PUT/PATCH /eats/:id/decrement //decrease the amount of an existing eat and removes last timestamp
//     - location
router.post("/eats/:id/decrement", EatController.decrement);

// PUT/PATCH /eats/:id //update eat information
router
  .route("/eats/:id")
  .put(EatController.update)
  .patch(EatController.update);

module.exports = router;
