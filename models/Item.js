const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ItemSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    default: 2018,
    required: true
  },
  format: {
    type: String,
    default: 'DVD',
    required: true
  },
  actors: {
    type: Array,
    default: [],
    required: true
  },
});

module.exports = Item = mongoose.model('Item', ItemSchema);