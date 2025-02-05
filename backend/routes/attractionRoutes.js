const express = require('express');
const router = express.Router();
const attractionController = require('../controllers/attractionControllers');

router.get('/attractions', attractionController.getAllAttractions);
router.get('/attractions/:name', attractionController.getAttractionByName);
router.post('/attractions', attractionController.addAttraction);
router.put('/attractions/:name', attractionController.updateAttraction);
router.patch('/attractions/:name', attractionController.updateAttractionFields);
router.delete('/attractions/:name', attractionController.deleteAttraction);

module.exports = router;
