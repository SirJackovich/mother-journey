const Blog = require('./blog.model');

module.exports = {
  getAll,
  getByPath,
  getByCategory,
  create,
  find,
  update,
  remove,
  getNewest,
  getArchive
};

async function getAll() {
  return await Blog.find();
}

async function getByPath(path) {
  return await Blog.findOne({ path });
}

async function find(query) {
  return await Blog.find( { $text: { $search: query } } )
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

async function getArchive() {
  return await Blog.aggregate([{ $project: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } } },{"$group": { "_id": { month: "$month", year: "$year" }, count: {$sum: 1} } }]);
}
