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
  getArchive,
  getByMonth
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
  return await Blog.aggregate([{
    $project: {
      year: { $year: "$createdAt" },
      month: { $month: "$createdAt" }
    }
  },
  {
    $group: {
      _id: {
        month: "$month",
        year: "$year"
      },
      count: {$sum: 1}
    }
  }]);
}

async function getByMonth(archive) {
  let archiveParts = archive.splice(/[a-zA-Z]+|[0-9]+/g);
  return await Blog.aggregate([{
    $project: {
      alt: 1,
      title: 1,
      photo: 1,
      path: 1,
      createdAt: 1,
      quote: 1,
      month : {$month: "$createdAt"},
      year : {$year: "$createdAt"}
    }
  },
  {
    $match: {
      month: archiveParts[0], year: archiveParts[1]
    }
  }]);
}
