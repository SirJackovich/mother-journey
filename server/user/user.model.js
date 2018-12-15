const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true
    },
    hash: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    minimize: false,
    collection: 'user'
  },
);

UserSchema.plugin(timestamps);
UserSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('user', UserSchema);
