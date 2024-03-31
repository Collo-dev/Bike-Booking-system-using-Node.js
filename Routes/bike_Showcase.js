// bike_Showcase.js

const express = require('express');
const router = express.Router();
const Bike = require('../models/bikes'); // Assuming you have a Bike model

// Route to display the bike showcase
router.get('/user_bike_Showcase', async (req, res) => {
  try {
    // Retrieve all available bikes from the database
    const bikes = await Bike.find({});

    // Render the bike showcase template with the retrieved bikes
    res.render('user_bike_Showcase.ejs', { bikes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
