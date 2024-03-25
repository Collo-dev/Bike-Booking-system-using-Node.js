const express = require('express')
const router = express.Router()

const Route = require('../models/Route.js');

router.get('/', (req, res) => {
    res.render('home.ejs');
  });
  
  
  
  // Inside the /bikes route handler
  router.get('/Bikes', async (req, res) => {
    try {
      const routes = await Route.find();
      res.render('bikes.ejs', { routes });
    } catch (error) {
      console.error(error);
      res.status(500).send('Internal Server Error');
    }
  });
  
  //rendering about page 
  router.get('/about', (req, res)=>{
    res.render('about.ejs')
  })

  module.exports = router
  

