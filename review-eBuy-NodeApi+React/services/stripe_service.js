const stripe = require("./../config/stripe");

async function getCustomerIdByEmail(email) {
  let customer = getCustomerByEmail(email);

  if (!customer) {
    customer = await stripe.customers.create({ email });
  }
  return customer.id;
}

async function getCustomerByEmail(email) {
  const customer = await stripe.customers.list({ email });
  return customer.data[0];
}

async function getCustomerById(id) {
  const customer = await stripe.customers.retrieve(id);
  return customer;
}

async function createChargeForCustomer(amount, customer) {
  const charge = await stripe.charges.create({
    amount,
    customer,
    currency: "AUD"
  });
  return charge;
}

async function updateCustomer(customer, options) {
  return await stripe.customers.update(customer, options);
}

module.exports = {
  getCustomerIdByEmail,
  getCustomerByEmail,
  getCustomerById,
  createChargeForCustomer,
  updateCustomer
};
