const express = require('express');
const router = express.Router();
const hotelController = require('../Controllers/hotelController');

router.get('/hotels', hotelController.getAllHotels);
router.get('/hotels/:name', hotelController.getHotelByName);
router.post('/hotels', hotelController.addHotel);
router.put('/hotels/:name', hotelController.updateHotel);
router.patch('/hotels/:name', hotelController.updateHotelFields);
router.delete('/hotels/:name', hotelController.deleteHotel);

module.exports = router;
