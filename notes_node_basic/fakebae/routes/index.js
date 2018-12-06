const express = require("express");
const router = express.Router();
const ProductController = require("./../controllers/product_controller");
const ReviewController = require("./../controllers/review_controller");

// ------ Middleware to find product for controller ------
const ProductModel = require("./../database/models/product_model");
async function productFindMiddleware(req, res, next) {
  if (req.params.id) {
    let product = await ProductModel.findById(req.params.id);
    req.product = product;
  }

  next();
}

// ------ Products Routes ------
router.get("/products", ProductController.index);
router.post("/products", ProductController.create);

router.get("/products/new", productFindMiddleware, ProductController.make);

router.get("/products/:id", productFindMiddleware, ProductController.show);
router.put("/products/:id", ProductController.update);
router.patch("/products/:id", ProductController.update);
router.delete("/products/:id", ProductController.destroy);

router.get("/products/:id/edit", productFindMiddleware, ProductController.edit);

// ------ Products/Reviews Routes ------
router.get("/reviews", ReviewController.index);
router.post("/products/:id/reviews", ReviewController.create);
router.delete("/products/:productId/reviews/:id", ReviewController.destroy);

module.exports = router;
