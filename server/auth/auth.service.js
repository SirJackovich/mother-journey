const config = require('../../config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../user/user.model');

module.exports = {
  auth,
};

async function auth({ username, password }) {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}
