const mongoose = require('mongoose');

// price and rating should be calculated from reviews
const ActivitySchema = mongoose.Schema({
  name: String,
  description: String,
  location: String,
  price: Number,
  rating: Number,
  images: [String],
});

module.exports = mongoose.model('Activity', ActivitySchema);
