const Role = require('./role.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Role.find();
}

async function getById(id) {
  return await Role.findById(id);
}

async function create(roleParam) {
  const role = new Role(roleParam);
  await role.save();
}

async function update(id, roleParam) {
  const role = await Role.findById(id);
  if (!role) throw 'Role not found';
  Object.assign(role, roleParam);
  await role.save();
}

async function _delete(id) {
  await Role.findByIdAndRemove(id);
}
