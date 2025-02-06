const express = require('express');
const router = express.Router();
const foodShopController = require('../Controllers/foodShopController');

router.get('/food_shops', foodShopController.getAllFoodShops);
router.get('/food_shops/:name', foodShopController.getFoodShopByName);
router.post('/food_shops', foodShopController.addFoodShop);

module.exports = router;
