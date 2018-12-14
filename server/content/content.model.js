const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const ContentSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
      trim: true,
      default: 'admin'
    },
    categories: {
      type: Array,
      required: true,
      trim: true
    },
    body: {
      type: String,
      required: true,
      trim: true
    },
    published: {
      type: String,
      required: false,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true
    },
    quote: {
      type: String,
      required: true,
      trim: true
    },
    credit: {
      type: String,
      required: false,
      trim: true
    },
    photo: {
      type: String,
      required: true,
      trim: true
    }
  },
  {
    minimize: false,
    collection: 'content'
  },
);

ContentSchema.plugin(timestamps);
ContentSchema.plugin(mongooseStringQuery);

module.exports = mongoose.model('content', ContentSchema);
