const express = require('express');
const router = express.Router();
const garageController = require('../Controllers/garageController');

router.get('/garages', garageController.getAllGarages);
router.get('/garages/:name', garageController.getGarageByName);
router.post('/garages', garageController.addGarage);
router.put('/garages/:name', garageController.updateGarage);
router.patch('/garages/:name', garageController.updateGarageFields);
router.delete('/garages/:name', garageController.deleteGarage);

module.exports = router;
