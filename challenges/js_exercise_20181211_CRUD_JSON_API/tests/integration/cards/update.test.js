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

afterAll(async () => {
  await CardModel.deleteMany({});
  mongoose.connection.close();
});

describe("API updates the details of a specific cards", () => {
  test("updates BFW", async () => {
    const bC = await CardModel.create({
      name: "Burn from Within",
      color: "red",
      type: "sorcery"
    });
    const bDB = await CardModel.findOne({ name: "Burn from Within" });

    const updates = {
      name: "Burn at the Stake",
      color: "red",
      type: "sorcery"
    };

    const res = await supertest(app)
      .put(`/${bDB._id}`)
      .send(updates)
      .expect(200);

    const updatedBDB = await CardModel.findOne({ name: "Burn at the Stake" });
    const previousBDB = await CardModel.findOne({ name: "Burn from Within" });

    expect(updatedBDB.type).toBe("sorcery");
    expect(previousBDB).toBe(null);
  });
});
