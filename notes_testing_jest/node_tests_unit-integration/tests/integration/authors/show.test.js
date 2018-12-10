const supertest = require("supertest");
const app = require("../../../app");
const mongoose = require("mongoose");
const AuthorModel = require("../../../database/models/author_model");

beforeAll(() => {
  mongoose.connect(
    "mongodb://localhost/books_r_us_test",
    { useNewUrlParser: true }
  );
  mongoose.Promise = global.Promise;
  mongoose.connection.on("error", err => console.log(err));
});

afterAll(async () => {
  await AuthorModel.deleteMany({});

  mongoose.connection.close();
});

describe("The user can GET an author", () => {
  test("responds with 200", async () => {
    const newAuthor = await AuthorModel.create({
      name: "Jane",
      bio: "jane's bio",
      gender: "female"
    });
    const authorJane = await AuthorModel.findOne({ name: "Jane" });

    const response = await supertest(app)
      .get(`/authors/${authorJane._id}`)
      .expect(200);
  });

  test("response body text contains author Jay name", async () => {
    const newAuthor = await AuthorModel.create({
      name: "Jay",
      bio: "jay's bio",
      gender: "female"
    });
    const authorJay = await AuthorModel.findOne({ name: "Jay" });

    const response = await supertest(app).get(`/authors/${authorJay._id}`);
    const jay = response.text.includes("Jay");
    expect(jay).toBeTruthy();
  });
});
