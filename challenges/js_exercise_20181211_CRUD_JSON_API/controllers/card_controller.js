const CardModel = require("./../database/models/card_model");

async function index(req, res) {
  const cards = await CardModel.find();
  res.json(cards);
}

async function show(req, res) {
  const { id } = req.params;
  const card = await CardModel.findById(id);
  res.json(card);
}

async function create(req, res) {
  const { name, color, type } = req.body;
  const card = await CardModel.create({ name, color, type }).catch(err =>
    res.status(500).send(err)
  );
  res.status(200);
  res.json(req.body);
}

async function update(req, res) {
  const { name, color, type } = req.body;
  const { id } = req.params;

  const card = await CardModel.findByIdAndUpdate(id, { name, color, type });
  res.status(200);
  res.json(req.body);
}

async function destroy(req, res) {
  const { id } = req.params;
  const card = await CardModel.findByIdAndRemove(id);
  res.status(200);
  res.json(req.body);
}

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};
