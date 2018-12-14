const Blog = require('./blog.model');

module.exports = {
  getAll,
  getByPath,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Blog.find();
}

async function getByPath(path) {
  return await Blog.findOne({ path });
}

async function create(params) {
  const blog = new Blog(params);
  await blog.save();
}

async function update(id, params) {
  const blog = await Blog.findById(id);
  if (!blog) throw 'Blog not found';
  Object.assign(blog, params);
  await blog.save();
}

async function _delete(id) {
  await Blog.findByIdAndRemove(id);
}
