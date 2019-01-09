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

// const user1 = {
//   email: "user1@mail.com",
//   password: "password",
//   userName: "user1"
// };

describe("Show the details of an user", () => {
  test("respond with 200", async () => {
    const response = supertest(app)
      .get(`/api/user/`)
      .expect("Content-Type", /json/)
      .expect(200);

    console.log(response);
    expect(response).toBeTruthy();
    // "UserController.show"
  });
});
