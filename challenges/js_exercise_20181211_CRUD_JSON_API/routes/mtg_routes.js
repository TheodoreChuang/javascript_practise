const express = require("express");
const router = express.Router();
const CardController = require("./../controllers/card_controller");

router.get("/", CardController.index);

router.get("/:id", CardController.show);

router.post("/", CardController.create);

router.put("/:id", CardController.update);
router.patch("/:id", CardController.update);

router.delete("/:id", CardController.destroy);

module.exports = router;
