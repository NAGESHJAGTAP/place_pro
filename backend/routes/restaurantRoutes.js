const express = require('express');
const router = express.Router();
const restaurantController = require('../Controllers/restaurantController');

router.get('/restaurants', restaurantController.getAllRestaurants);
router.get('/restaurants/:name', restaurantController.getRestaurantByName);
router.post('/restaurants', restaurantController.addRestaurant);
router.put('/restaurants/:name', restaurantController.updateRestaurant);
router.patch('/restaurants/:name', restaurantController.updateRestaurantFields);
router.delete('/restaurants/:name', restaurantController.deleteRestaurant);

module.exports = router;
