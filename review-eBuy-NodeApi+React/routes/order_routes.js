const express = require("express");
const router = express.Router();
const { celebrate, Joi } = require("celebrate");
const OrderController = require("./../controllers/order_controller");

router.post(
  "/",
  celebrate({
    body: {
      // deliveryAddress: Joi.string(),
      // products: Joi.array()
      //   .items(Joi.string())
      //   .min(1)
      //   .required(),
      // stripeToken: Joi.string().required()
    }
  }),
  OrderController.create
);

module.exports = router;
