const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
  const results = await ProductModel.aggregate([
    { $unwind: "$reviews" },
    {
      $group: {
        _id: null,
        reviews: {
          $push: "$reviews"
        }
      }
    }
  ]);

  const reviews = results[0] ? results[0].reviews : [];
  res.json(reviews);
}

async function create(req, res) {
  const { id } = req.params;
  const { author, content } = req.body;
  const product = await ProductModel.findById(id);
  product.reviews.push({ author, content });
  await product.save();

  res.redirect(`/products/${product._id}`);
}

async function destroy(req, res) {
  const { productId, id } = req.params;
  const product = await ProductModel.findById(productId);
  product.reviews.id(id).remove();
  await product.save();

  res.redirect(`/products/${product._id}`);
}

module.exports = {
  index,
  create,
  destroy
};
