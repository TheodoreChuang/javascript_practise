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

describe("API returns the details of a specific cards", () => {
  test("respond with 200", async () => {
    const abo = await CardModel.create({
      name: "Aboroth",
      color: "green",
      type: "creature"
    });
    const aboroth = await CardModel.findOne({ name: "Aboroth" });

    supertest(app)
      .get(`/${aboroth._id}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("returns details of 'Aboroth'", async () => {
    const aboroth = await CardModel.findOne({ name: "Aboroth" });

    const response = await supertest(app).get(`/${aboroth._id}`);
    const card = response.text.includes("creature");
    expect(card).toBeTruthy();
  });
});
