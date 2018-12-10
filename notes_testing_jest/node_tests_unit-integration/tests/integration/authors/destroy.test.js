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

describe("The user can delete an author", () => {
  test("DELETE /authors delete author from db", async () => {
    const newAuthor = await AuthorModel.create({
      name: "Garret",
      bio: "garret's bio",
      gender: "male"
    });
    const authorGarret = await AuthorModel.findOne({ name: "Garret" });

    const response = await supertest(app).delete(
      `/authors/${authorGarret._id}`
    );
    const deletedAuthor = await AuthorModel.findOne({ name: "Garret" });
    expect(deletedAuthor).toBe(null);
  });

  test("DELETE /authors redirects after deletion", async () => {
    const newAuthor = await AuthorModel.create({
      name: "Bob",
      bio: "bob's bio",
      gender: "male"
    });
    const authorBob = await AuthorModel.findOne({ name: "Bob" });

    const response = await supertest(app)
      .delete(`/authors/${authorBob._id}`)
      .expect(302);
  });
});
