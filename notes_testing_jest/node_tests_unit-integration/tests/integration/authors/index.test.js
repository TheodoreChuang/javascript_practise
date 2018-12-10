const supertest = require("supertest");
const app = require("../../../app");

describe("User gets a list of authors", () => {
  test("respond with 200", () => {
    supertest(app)
      .get("/authors")
      .expect("Content-Type", "text/html; charset=utf-8")
      .expect(200);
  });
});
