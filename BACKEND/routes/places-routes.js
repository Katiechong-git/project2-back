const express = require('express');
const { check } = require('express-validator');
const placesControllers = require('../controllers/places-controllers');



const router = express.Router();

router.get('/:pid', placesControllers.getPlaceById);

router.get('/user/:uid', placesControllers.getPlacesByUserId);

router.post(
  '/',
  

  placesControllers.createPlace
);

router.put(
  '/:pid',

  placesControllers.updatePlace
);

router.delete('/:pid', placesControllers.deletePlace);

module.exports = router;