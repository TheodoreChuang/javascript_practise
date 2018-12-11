const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const CardController = require("./../controllers/card_controller");

function allPropertiesRequired() {
  return celebrate({
    body: {
      name: Joi.string().required(),
      color: Joi.string().required(),
      type: Joi.string().required()
    }
  });
}

router.get("/", CardController.index);

router.get("/:id", CardController.show);

router.post("/", allPropertiesRequired(), CardController.create);

router.put("/:id", allPropertiesRequired(), CardController.update);
router.patch("/:id", allPropertiesRequired(), CardController.update);

router.delete("/:id", CardController.destroy);

module.exports = router;
