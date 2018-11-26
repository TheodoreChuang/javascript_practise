function random() {
  console.log("My random function");

  return Math.random();
}

function times(num, callback) {
  console.log("My times functions");

  for (let i = 0; i < num; i++) {
    callback(i + 1);
  }
}

module.exports = {
  random,
  times
};
