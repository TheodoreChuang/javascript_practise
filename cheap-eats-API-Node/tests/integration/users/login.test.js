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

const user0 = {
  email: "user0@mail.com",
  password: "password"
};

describe("/login an existing user", () => {
  test("respond with JWT and status 200", async () => {
    const response = await supertest(app)
      .post(`/api/user/`)
      .send(user0)
      .expect("Content-Type", /json/)
      .expect(200);

    // expect(response.text).toBe("Unauthorized");
  });

  test("respond with 401 if email or password do not match ", async () => {
    const response = await supertest(app)
      .post(`/api/user/`)
      .send(user0)
      .expect(401);

    expect(response.text).toBe("Unauthorized");
  });
});
