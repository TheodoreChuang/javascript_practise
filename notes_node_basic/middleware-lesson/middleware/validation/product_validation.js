function validateCreate(req, res, next) {
  console.log("validation middleware ran");

  if (req.body) {
    if (!req.body.name) {
      // return res.status(422).send("Name is required");
      return next(new HTTPError(422, "Name is required"));
    }
    if (req.body.price && parseInt(req.body.price) < 1) {
      // return res.status(422).send("Price must be greater than 1");
      return next(new HTTPError(422, "Price must be greater than 1"));
    }
  }

  next();
}

module.exports = {
  validateCreate
};
