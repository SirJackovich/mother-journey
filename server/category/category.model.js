const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    minimize: false,
    collection: 'category'
  },
);

CategorySchema.plugin(timestamps);
CategorySchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('category', CategorySchema);
