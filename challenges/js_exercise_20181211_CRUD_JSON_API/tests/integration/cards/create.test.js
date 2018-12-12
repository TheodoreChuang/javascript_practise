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

describe("Create new card", () => {
  test("create Brittle Effigy", async () => {
    const response = await supertest(app)
      .post("/")
      .send({
        name: "Brittle Effigy",
        color: "colorless",
        type: "artifact"
      });
    // .expect(200); // supertest assert method

    const card = await CardModel.findOne({ name: "Brittle Effigy" });
    expect(card).toBeTruthy();
    expect(card.type).toBe("artifact");
  });
});
