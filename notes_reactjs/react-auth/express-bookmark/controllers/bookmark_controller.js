function index(req, res, next) {
  try {
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  const bookmark = sanitizeURL(req.body);
  req.user.bookmarks.push(bookmark);

  try {
    await req.user.save();
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

// async function update(req, res, next) {
//   const { id } = req.params;
//   const bookmark = req.user.bookmarks.id(id);
//   const { title, url } = req.body;

//   try {
//     // bookmark.update();
//     // await req.user.save();
//     res.json(req.user.bookmarks);
//   } catch (err) {
//     next(err);
//   }
// }

async function destroy(req, res, next) {
  const { id } = req.params;
  const bookmark = req.user.bookmarks.id(id);

  try {
    bookmark.remove();
    await req.user.save();
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

function sanitizeURL(bookmark) {
  bookmark.url =
    bookmark.url.slice(0, 8) === "https://"
      ? bookmark.url
      : "https://" + bookmark.url;
  return bookmark;
}

module.exports = {
  index,
  create,
  destroy
};
