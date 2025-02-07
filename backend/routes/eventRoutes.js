const express = require('express');
const router = express.Router();
const eventController = require('../Controllers/eventController');

router.get('/events', eventController.getAllEvents);
router.get('/events/:eventName', eventController.getEventByName);
router.post('/events', eventController.addEvent);
router.put('/events/:eventName', eventController.updateEvent);
router.patch('/events/:eventName', eventController.updateEventFields);
router.delete('/events/:eventName', eventController.deleteEvent);

module.exports = router;
