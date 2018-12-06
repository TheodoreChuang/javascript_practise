const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
  const products = await ProductModel.find();
  res.render("products/index", { products });
}

async function show(req, res) {
  // const { id } = req.params;
  // const product = await ProductModel.findById(id);
  res.render("products/show", { product: req.product });
}

function make(req, res) {
  res.render("products/make");
}
async function create(req, res) {
  // res.json(req.body);
  const { name, categories, price } = req.body;
  const product = await ProductModel.create({ name, categories, price });

  res.redirect(`products/${product._id}`);
}

async function edit(req, res) {
  // const { id } = req.params;
  // const product = await ProductModel.findById(id);
  res.render("products/edit", { product: req.product });
}

async function update(req, res) {
  const { id } = req.params;
  const { name, categories, price } = req.body;
  const product = await ProductModel.findByIdAndUpdate(id, {
    name,
    categories,
    price
  });
  res.redirect(`products/${product._id}`);
}

async function destroy(req, res) {
  const { id } = req.params;
  await ProductModel.findByIdAndDelete(id);

  res.redirect("/products");
}

module.exports = { index, show, make, create, edit, update, destroy };
