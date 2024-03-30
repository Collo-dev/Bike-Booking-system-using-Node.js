const mongoose = require('mongoose');

const bikeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  available: {
    type: Boolean,
    default: true
  },
  image: {
    type: String, // Assuming you'll store image URLs as strings
    required: false // Set to true if image is mandatory
  }
});

const Bike = mongoose.model('Bike', bikeSchema);

module.exports = Bike;
