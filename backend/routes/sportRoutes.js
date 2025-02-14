const express = require('express');
const router = express.Router();
const sportController = require('../Controllers/sportController');

router.get('/sports', sportController.getAllSports);
router.get('/sports/:sportName', sportController.getSportByName);
router.post('/sports', sportController.addSport);
router.put('/sports/:sportName', sportController.updateSport);
router.patch('/sports/:sportName', sportController.updateSportFields);
router.delete('/sports/:sportName', sportController.deleteSport);

module.exports = router;
