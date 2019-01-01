const Category = require('./category.model');

module.exports = {
  getAll,
  create,
};

async function getAll() {
  return await Category.find();
}

async function create(categoryParam) {
  const category = new Category(categoryParam);
  await category.save();
}
