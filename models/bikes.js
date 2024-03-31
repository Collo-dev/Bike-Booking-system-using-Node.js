const mongoose = require('mongoose');

// Define the schema for a bike
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
  stage: {
    type: String,
    enum: ['Stage1', 'Stage2', 'Stage3'], // Define stages
    required: true
  },
  image: {
    type: String,
    required: false
  }
});

// Create a Mongoose model named "Bike" based on the schema
const Bike = mongoose.model('Bike', bikeSchema);

// Export the Bike model for use in other parts of the application
module.exports = Bike;

// Function to retrieve bikes based on stage
async function getBikesByStage(stage) {
  try {
    const bikes = await Bike.find({ stage });
    return bikes;
  } catch (error) {
    throw new Error('Failed to retrieve bikes by stage');
  }
}

module.exports.getBikesByStage = getBikesByStage;
