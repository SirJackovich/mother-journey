const Category = require('./category.model');

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Category.find({}, null, {sort: {name: 1}});
}

async function create(categoryParam) {
  const category = new Category(categoryParam);
  await category.save();
}
