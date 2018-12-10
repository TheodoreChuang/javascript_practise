const supertest = require("supertest");
const app = require("../../../app");

describe("User gets shown page to create new author", () => {
  test("call res.render()", async () => {
    const res = await supertest(app)
      .get("/authors/new")
      .expect(200);
  });
});
