const Category = require('./category.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Category.find();
}

async function getById(id) {
  return await Category.findById(id);
}

async function create(categoryParam) {
  const category = new Category(categoryParam);
  await category.save();
}

async function update(id, categoryParam) {
  const category = await Category.findById(id);
  if (!category) throw 'Category not found';
  Object.assign(category, categoryParam);
  await category.save();
}

async function _delete(id) {
  await Category.findByIdAndRemove(id);
}
