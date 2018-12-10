const { add, subtract } = require("./app");
// const assert = require("assert");

// ******* Node Assertion Library *******

// console.log("First test: add(1, 5) is equal to 6");
// const actual = add(1, 5);
// const expectation = 6;
// // assert equality, happy path
// assert.equal(actual, expectation);
// console.log("First test: ran successfully");

// console.log("Second test: add(1) with one argument throws an error");
// // assert throws, sad path, passes if error is thrown
// assert.throws(() => {
//   add(1);
// });
// console.log("Second test: ran successfully");

// ******* Jest Library *******

describe("add()", () => {
  test("add(1,5) is equal to 6", () => {
    const actual = add(1, 5);
    const expectation = 6;
    expect(actual).toBe(expectation);
  });

  test("add() with one argument throws an error", () => {
    expect(() => add(1)).toThrow();
  });
});

describe("subtract()", () => {
  test("subtract(6,7) is equal to -1", () => {
    const actual = subtract(6, 7);
    const expectation = -1;
    expect(actual).toBe(expectation);
  });

  test("subtract() with one argument throws an error", () => {
    expect(() => subtract(1)).toThrow();
  });
});

console.log("All tests ran successfully");
