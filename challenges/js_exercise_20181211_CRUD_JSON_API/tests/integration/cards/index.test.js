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

describe("API returns a list of cards", () => {
  test("respond with 200", () => {
    supertest(app)
      .get("/")
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("list contains card 'Absolute Law'", async () => {
    let al = await CardModel.create({
      name: "Absolute Law",
      color: "white",
      type: "enchantment"
    });

    const cards = await supertest(app).get("/");
    const card = cards.text.includes("Absolute Law");
    expect(card).toBeTruthy();
  });

  test("list returns an array'", async () => {
    let aokk = await CardModel.create({
      name: "Abbot of Keral Keep",
      color: "red",
      type: "creature"
    });

    const cards = await supertest(app).get("/");
    const isArray = typeof cards.body;
    expect(isArray).toBeTruthy();
  });
});
