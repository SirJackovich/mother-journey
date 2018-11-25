const User = require('./user.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await User.find();
}

async function getById(id) {
  return await User.findById(id);
}

async function create(userParam) {
  const user = new User(userParam);
  await user.save();
}

async function update(id, userParam) {
  const user = await User.findById(id);
  if (!user) throw 'User not found';
  Object.assign(user, userParam);
  await user.save();
}

async function _delete(id) {
  await User.findByIdAndRemove(id);
}
