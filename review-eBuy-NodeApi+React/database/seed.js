require("dotenv").config();
const mongoose = require("./../config/database");
const faker = require("faker");
const ProductModel = require("./models/product_model");

console.log("...Running Seed File...");

const productPromises = [];
for (let i = 0; i < 10; i++) {
  productPromises.push(
    ProductModel.create({
      name: faker.commerce.productName(),
      description: faker.lorem.paragraph(),
      department: "outdoor",
      price: Math.floor(Math.random() * 10000) + 1
    })
  );
}

Promise.all(productPromises)
  .then(products => {
    console.log(
      `Product seeds successful created, created ${products.length} products`
    );
  })
  .catch(err => console.log(`Error with seed file: ${err}`))
  .finally(() => {
    mongoose.disconnect();
  });
