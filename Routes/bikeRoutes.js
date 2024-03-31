// Import required modules and models
const express = require('express');
const router = express.Router();
const Bike = require('../models/bikes'); // Assuming you have a Bike model

// Route to add a new bike to the database
router.post('/addBike', async (req, res) => {
  try {
    // Extract bike data from request body
    const { name, type, price, stage, image } = req.body;

    // Create a new bike document
    const newBike = new Bike({
      name,
      type,
      price,
      stage,
      image
    });

    // Save the new bike document to the database
    await newBike.save();

    // Send success response
    res.status(201).send('Bike added successfully');
  } catch (error) {
    // Handle errors
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
