const supertest = require("supertest");
const app = require("./../../../app");
const mongoose = require("mongoose");

const UserModel = require("./../../../database/models/user_model");

beforeAll(() => {
  mongoose.connect(
    "mongodb://localhost/cheap_eats_api_test",
    { useNewUrlParser: true }
  );
  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", err => console.log(err));
});

describe("Show the details of an user", () => {
  test("respond with 200", async () => {
    const user = await UserModel.findOne();

    supertest(app)
      .get(`/api/user/`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  test("returns details of an user", async () => {
    const user = await UserModel.findOne();

    const response = await supertest(app).get(`/api/user/`);
    expect(response).toBeTruthy();
  });
});
