const stripe = require("./../config/stripe");

async function getCustomerIdByEmail(email) {
  let customer = getCustomerByEmail(email);

  if (!customer) {
    const customer = await stripe.customers.create({ email });
  }
  return customer._id;
}

async function getCustomerByEmail(email) {
  const customer = await stripe.customers.list({ email });
  return customer.data[0];
}

async function getCustomerById(id) {
  const customer = await stripe.customers.retrieve(id);
  return customer;
}

module.exports = { getCustomerIdByEmail, getCustomerByEmail, getCustomerById };
