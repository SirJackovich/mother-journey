const Content = require('./content.model');

module.exports = {
  getAll,
  getById,
  create,
  update,
  delete: _delete
};

async function getAll() {
  return await Content.find();
}

async function getById(id) {
  return await Content.findById(id);
}

async function create(contentParam) {
  const content = new Content(contentParam);
  await content.save();
}

async function update(id, contentParam) {
  const content = await Content.findById(id);
  if (!content) throw 'Content not found';
  Object.assign(content, contentParam);
  await content.save();
}

async function _delete(id) {
  await Content.findByIdAndRemove(id);
}
