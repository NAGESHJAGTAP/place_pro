const express = require('express');
const router = express.Router();
const hospitalController = require('../controllers/hospitalController');

// GET: Retrieve all hospitals
router.get('/hospitals', hospitalController.getAllHospitals);

// GET: Retrieve a specific hospital by name
router.get('/hospitals/:name', hospitalController.getHospitalByName);

// POST: Add a new hospital
router.post('/hospitals', hospitalController.addHospital);

// PUT: Replace a hospital by name
router.put('/hospitals/:name', hospitalController.updateHospital);

// PATCH: Update specific fields of a hospital
router.patch('/hospitals/:name', hospitalController.updateHospitalFields);

// DELETE: Remove a hospital by name
router.delete('/hospitals/:name', hospitalController.deleteHospital);

module.exports = router;
