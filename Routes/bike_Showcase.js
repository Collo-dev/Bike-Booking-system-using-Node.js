const express = require('express');
const router = express.Router();
const Bike = require('../models/bikes'); // Assuming you have a Bike model

// Route to display the bike showcase
router.get('/bike_Showcase', async (req, res) => {
  try {
    // Retrieve all available bikes from the database
    const bikes = await Bike.find({ available: true });
    res.render('bike_Showcase.ejs', { bikes });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to book a bike
router.post('/book_bike/:id', async (req, res) => {
  try {
    const bike = await Bike.findById(req.params.id);
    if (!bike) {
      return res.status(404).send('Bike not found');
    }
    

    // Set the bike as booked
    bike.available = false;
    await bike.save();

    // Redirect to the cart or payment page
    res.redirect('/cart'); // Assuming you have a route for the cart
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
