const UserModel = require("./../database/models/user_model");

async function show(req, res) {
  const { id } = req.user;
  const { email, userName, eats } = await UserModel.findById(id);
  return res.json({ email, userName, eats });
}

function register(req, res) {
  return res.json("UserController.register");
}

// function login(req, res) {
//   return res.json("UserController.login");
// }

async function update(req, res) {
  const { id } = req.user;
  const { email, userName, eats } = req.body;
  // const user = await UserModel.findById(id);
  // Model.update({_id: 12345}, {$set: {name: 'New name'}}, callback);
  const updatedUser = await UserModel.findByIdAndUpdate(
    id,
    // { email, userName, eats },
    { $set: { userName: userName } },
    { new: true }
  );
  if (!updatedUser) {
    return next(new HTTPError(500, "User was not updated"));
  }
  return res.json(updatedUser);
  // return res.json("UserController.update");
}

// {
//   "email": "user0@mail.com",
//   "userName": "user0",
//   "eats": []
// }

module.exports = { show, register, update };
