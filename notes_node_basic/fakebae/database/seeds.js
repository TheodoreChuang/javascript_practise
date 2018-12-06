const faker = require("faker");
const mongoose = require("mongoose");
const ProductModel = require("./models/product_model");

mongoose.connect(
  "mongodb://localhost/fakebae",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;
mongoose.connection.on("error", console.log);

let productPromises = [];

for (let i = 0; i <= 50; i++) {
  productPromises.push(
    ProductModel.create({
      name: faker.commerce.productName(),
      categories: [faker.commerce.department(), faker.commerce.department()],
      price: faker.commerce.price()
    })
  );
}

Promise.all(productPromises)
  .then(() => {
    console.log("Seeds completed");
    mongoose.connection.close();
  })
  .catch(err => {
    console.log(err);
    mongoose.connection.close();
  });
