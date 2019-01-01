const User = require('./user.model');
const bcrypt = require('bcryptjs');

module.exports = {
  getById,
  create
};

async function getById(id) {
  return await User.findById(id).select('-hash');
}

async function create(userParam) {
  // validate
  if (await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();
}
