const CardModel = require("./../database/models/card_model");

async function index(req, res, next) {
  const cards = await CardModel.find();

  if (!cards) {
    next(new HTTPError(404, "Not found"));
  } else {
    res.json(cards);
  }
}

async function show(req, res, next) {
  const { id } = req.params;
  const card = await CardModel.findById(id);

  if (!card) {
    next(new HTTPError(404, "Not found"));
  } else {
    res.json(card);
  }
}

async function create(req, res, next) {
  const { name, color, type } = req.body;
  const card = await CardModel.create({ name, color, type });

  if (!card) {
    next(new HTTPError(500, "Card was not created"));
  } else {
    res.status(200);
    res.json(req.body);
  }
}

async function update(req, res, next) {
  const { name, color, type } = req.body;
  const { id } = req.params;
  const card = await CardModel.findByIdAndUpdate(
    id,
    { name, color, type },
    { new: true }
  );

  if (!card) {
    next(new HTTPError(500, "Card was not updated"));
  } else {
    res.status(200);
    res.json(req.body);
  }
}

async function destroy(req, res, next) {
  const { id } = req.params;
  const card = await CardModel.findByIdAndRemove(id);

  if (!card) {
    next(new HTTPError(500, "Card was not deleted"));
  } else {
    res.status(200);
    res.json(req.body);
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
