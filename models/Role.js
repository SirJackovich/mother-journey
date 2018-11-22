const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const RoleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    minimize: false,
    collection: 'role'
  },
);

RoleSchema.plugin(timestamps);
RoleSchema.plugin(mongooseStringQuery);

const Role = mongoose.model('role', RoleSchema);
module.exports = Role;
