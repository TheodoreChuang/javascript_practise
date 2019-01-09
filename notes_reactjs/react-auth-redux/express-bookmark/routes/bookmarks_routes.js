const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const BookmarkController = require("./../controllers/bookmark_controller");

router.get("/", BookmarkController.index);

router.post(
  "/",
  celebrate({
    body: {
      title: Joi.string().required(),
      url: Joi.string().required()
    }
  }),
  BookmarkController.create
);

router.put(
  "/:id",
  celebrate({
    body: {
      title: Joi.string().required(),
      url: Joi.string().required()
    }
  }),
  BookmarkController.update
);
router.patch(
  "/:id",
  celebrate({
    body: {
      title: Joi.string().required(),
      url: Joi.string().required()
    }
  }),
  BookmarkController.update
);

router.delete("/:id", BookmarkController.destroy);

module.exports = router;
