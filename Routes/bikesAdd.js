// bikeRoutes.js

const express = require('express');
const router = express.Router();
const { isAuthenticated, isAdmin } = require('../middlewares/authMiddleware');
const Bike = require('../models/Bike');

// Route to add a bike (admin-only)
router.post('/add_bike', isAdmin, async (req, res) => {
  // Add bike logic
});

// Route to book a bike (accessible to all users)
router.post('/book_bike/:id', isAuthenticated, async (req, res) => {
  // Book bike logic
});

module.exports = router;
