const stripe = require("./../config/stripe");

async function create(req, res) {
  const customer = await stripe.customers.create({
    email: "test@mail.com"
  });

  return res.json(customer);
}

module.exports = { create };
