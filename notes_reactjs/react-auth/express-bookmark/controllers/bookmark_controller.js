const UserModel = require("./../database/models/user_model");

async function index(req, res, next) {
  console.log("bookmark index");
  // UserModel
  try {
    console.log(req.user.bookmarks);
    // await req.user.save();
    // res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  req.user.bookmarks.push(req.body);
  try {
    await req.user.save();
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  index,
  create
};
