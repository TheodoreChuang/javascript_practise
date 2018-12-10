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

describe("User is shown form for editing existing author", () => {
  test("call res.render()", async () => {
    const newAuthor = await AuthorModel.create({
      name: "Adam",
      bio: "Adam's bio",
      gender: "male"
    });
    const authorAdam = await AuthorModel.findOne({ name: "Adam" });

    const res = await supertest(app)
      .get(`/authors/${authorAdam._id}/edit`)
      .expect(200);
  });
});
