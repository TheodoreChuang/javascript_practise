const ProductModel = require("./../database/models/product_model");

async function index(req, res, next) {
  try {
    const products = await ProductModel.find();
    return res.json(products);
  } catch (error) {
    return next(error);
  }
}

async function show(req, res, next) {
  try {
    const { id } = req.params;
    const product = await ProductModel.findById(id);
    return res.json(product);
  } catch (error) {
    return next(error);
  }
}

module.exports = {
  index,
  show
};
