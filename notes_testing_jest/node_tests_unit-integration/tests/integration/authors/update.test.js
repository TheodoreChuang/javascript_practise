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

describe("Update existing author", () => {
  test("PUT request updates existing user", async () => {
    const newAuthor = await AuthorModel.create({
      name: "Helen",
      bio: "Helen's bio",
      gender: "female"
    });
    const authorHelen = await AuthorModel.findOne({ name: "Helen" });

    const updates = {
      name: "Helen",
      bio: "Helen's updated bio",
      gender: "female"
    };

    const res = await supertest(app)
      .put(`/authors/${authorHelen._id}`)
      .send(updates)
      .expect(302);

    const updatedAuthor = await AuthorModel.findOne({ name: "Helen" });
    console.log(updatedAuthor);
    expect(updatedAuthor.bio).toBe("Helen's updated bio");
  });
});
