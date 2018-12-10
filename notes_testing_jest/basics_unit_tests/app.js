function add(x, y) {
  if (!x || !y) {
    throw "2 numbers are required!";
  }
  return x + y;
}

function subtract(x, y) {
  if (!x || !y) {
    throw "2 numbers are required!";
  }
  return x - y;
}

module.exports = { add, subtract };
