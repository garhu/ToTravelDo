const mongoose = require('mongoose');

const ActivitySchema = mongoose.Schema({
  name: String,
  description: String,
  location: String,
  price: Number,
});

module.exports = mongoose.model('Activity', ActivitySchema);
