const express = require('express');
const router = express.Router();
const garageController = require('../Controllers/garageController');

// GET: Retrieve all garages
router.get('/garages', garageController.getAllGarages);

// GET: Retrieve a specific garage by name
router.get('/garages/:name', garageController.getGarageByName);

// POST: Add a new garage
router.post('/garages', garageController.addGarage);

module.exports = router;
