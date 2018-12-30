const Blog = require('./blog.model');

module.exports = {
  getAll,
  getByPath,
  getByCategory,
  create,
  update,
  remove,
  getNewest
};

async function getAll() {
  return await Blog.find();
}

async function getByPath(path) {
  return await Blog.findOne({ path });
}

async function getByCategory(category) {
  return await Blog.find({ categories: {$elemMatch: { name: category}}})
}

async function create(params) {
  const blog = new Blog(params);
  await blog.save();
}

async function update(path, params) {
  const blog = await Blog.findOne({path});
  if (!blog) throw 'Blog not found';
  Object.assign(blog, params);
  await blog.save();
}

async function remove(path) {
  await Blog.findOneAndDelete({path});
}

async function getNewest() {
  return await Blog.findOne().sort('-createdAt');
}
