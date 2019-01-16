const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const OrderController = require("./../controllers/order_controller");

router.post(
  "/",
  celebrate({
    body: {
      stripeToken: Joi.string().required(),
      deliveryAddress: Joi.string(),
      products: Joi.array()
        .items(Joi.string())
        .min(1)
        .required()
    }
  }),
  OrderController.create
);

module.exports = router;
