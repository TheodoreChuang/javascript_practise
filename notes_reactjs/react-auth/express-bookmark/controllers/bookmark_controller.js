function index(req, res, next) {
  try {
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

async function create(req, res, next) {
  let { title, url } = req.body;
  url = sanitizeURL(url);
  const bookmark = { title, url };

  try {
    req.user.bookmarks.push(bookmark);
    await req.user.save();
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

async function update(req, res, next) {
  const { id } = req.params;
  const { title, url } = req.body;
  const bookmark = req.user.bookmarks.id(id);

  try {
    bookmark.title = title;
    bookmark.url = sanitizeURL(url);
    await req.user.save();
    res.json(req.user.bookmarks);
  } catch (err) {
    next(err);
  }
}

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

function sanitizeURL(url) {
  return url.slice(0, 8) === "https://" ? url : "https://" + url;
}

module.exports = {
  index,
  create,
  update,
  destroy
};
