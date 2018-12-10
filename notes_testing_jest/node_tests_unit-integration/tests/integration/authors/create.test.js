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

describe("The user creates a new author", () => {
  test("POST /authors with a valid req body, check redirect and creation", async () => {
    const authorCount = await AuthorModel.count();
    const response = await supertest(app)
      .post("/authors")
      .send({
        name: "Garret",
        bio: "garret's bio",
        gender: "male"
      })
      .expect(302); // supertest assert method
    const newAuthorCount = await AuthorModel.count();

    expect(response.body).toEqual({});
    expect(response.header.location).toMatch(/^\/authors\/.*$/);
    // expect(newAuthorCount).toBe(authorCount + 1); // too generic for global state
  });

  test("POST /authors with a valid req body and match input data", async () => {
    const response = await supertest(app)
      .post("/authors")
      .send({
        name: "Bob",
        bio: "Bob's bio",
        gender: "male"
      })
      .expect(302); // supertest assert method

    const author = await AuthorModel.findOne({ name: "Bob" });
    expect(author).toBeTruthy();
    expect(author.name).toBe("Bob");
  });
});
