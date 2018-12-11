const express = require("express");
const router = express.Router();
const ProductController = require("./../controllers/product_controller");
// const { validateCreate } = require("./../middleware/validation/product_validation");
const { celebrate, Joi } = require("celebrate");

router.get("/", (req, res) => res.send("Welcome"));

router.get("/products", ProductController.index);

router.post(
  "/products",
  celebrate({
    body: {
      name: Joi.string().required(),
      price: Joi.number()
        .required()
        .min(1),
      categories: Joi.array()
    }
  }),
  ProductController.create
);

router.get("/products/:id", ProductController.show);

module.exports = router;
