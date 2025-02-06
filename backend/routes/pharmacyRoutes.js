const express = require('express');
const router = express.Router();
const pharmacyController = require('../Controllers/pharmacyController');

// GET: Retrieve all pharmacies
router.get('/pharmacies', pharmacyController.getAllPharmacies);

// GET: Retrieve a specific pharmacy by name
router.get('/pharmacies/:name', pharmacyController.getPharmacyByName);

// POST: Add a new pharmacy
router.post('/pharmacies', pharmacyController.addPharmacy);

// PUT: Replace a pharmacy by name
router.put('/pharmacies/:name', pharmacyController.updatePharmacy);

// PATCH: Update specific fields of a pharmacy
router.patch('/pharmacies/:name', pharmacyController.updatePharmacyFields);

// DELETE: Remove a pharmacy by name
router.delete('/pharmacies/:name', pharmacyController.deletePharmacy);

module.exports = router;
