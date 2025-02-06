const express = require('express');
const router = express.Router();
const foodShopController = require('../Controllers/foodShopController');

router.get('/food_shops', foodShopController.getAllFoodShops);
router.get('/food_shops/:name', foodShopController.getFoodShopByName);
router.post('/food_shops', foodShopController.addFoodShop);
router.put('/food_shops/:name', foodShopController.updateFoodShop);
router.patch('/food_shops/:name', foodShopController.updateFoodShopFields);
router.delete('/food_shops/:name', foodShopController.deleteFoodShop);

module.exports = router;
