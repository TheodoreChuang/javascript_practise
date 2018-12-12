const supertest = require("supertest");
const app = require("../../../app");
const mongoose = require("mongoose");
const CardModel = require("../../../database/models/card_model");

beforeAll(() => {
  mongoose.connect(
    "mongodb://localhost/mtg_api_test",
    { useNewUrlParser: true }
  );
  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", err => console.log(err));
});

// afterAll(async () => {
//   await CardModel.deleteMany({});
//   mongoose.connection.close();
// });

describe("Delete existing card", () => {
  test("delete a card", async () => {
    const brexC = await CardModel.create({
      name: "Brutal Expulsion",
      color: "blue",
      type: "instant "
    });
    const brexDB = await CardModel.findOne({ name: "Brutal Expulsion" });

    const response = await supertest(app).delete(`/${brexDB._id}`);
    const deletedCard = await CardModel.findOne({ name: "Brutal Expulsion" });
    expect(deletedCard).toBe(null);
  });
});
