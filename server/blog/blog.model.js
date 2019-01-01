const mongoose = require('mongoose');
const mongooseStringQuery = require('mongoose-string-query');
const timestamps = require('mongoose-timestamp');

const BlogSchema = new mongoose.Schema(
  {
    categories: {
      type: Array,
      required: false,
      trim: true
    },
    content: {
      type: String,
      required: true,
      trim: true
    },
    title: {
      type: String,
      required: true,
      trim: true,
      unique : true
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
    },
    alt: {
      type: String,
      required: true,
      trim: true,
      default: ""
    },
    path: {
      type: String,
      required: true,
      trim: true,
      unique : true
    },
    newer: {
      type: String,
      required: false,
      trim: true
    },
    older: {
      type: String,
      required: false,
      trim: true
    }
  },
  {
    minimize: false,
    collection: 'blog'
  },
);

BlogSchema.plugin(timestamps);
BlogSchema.plugin(mongooseStringQuery);
BlogSchema.index({ title: 'text', content: 'text' });

module.exports = mongoose.model('blog', BlogSchema);
