const jwt = require("jsonwebtoken");

function generateJWT(req, res) {
  const token = jwt.sign({ sub: req.user._id }, process.env.JWT_SECRET);

  res.json({ token }).status(200);
}

module.exports = { generateJWT };
