const eventModel = require('../models/eventModel');

// GET: Retrieve all events
async function getAllEvents(req, res) {
    try {
        const events = await eventModel.getAllEvents();
        if (events.length === 0) {
            return res.status(404).json({ message: "No events found" });
        }
        res.json(events);
    } catch (error) {
        console.error('Error fetching events:', error);
        res.status(500).json({ message: "Error fetching events", error: error.message });
    }
}

// GET: Retrieve a specific event by name
async function getEventByName(req, res) {
    const { eventName } = req.params;
    try {
        const event = await eventModel.getEventByName(eventName);
        if (!event) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json(event);
    } catch (error) {
        console.error('Error fetching event:', error);
        res.status(500).json({ message: "Error fetching event", error: error.message });
    }
}

// POST: Add a new event
async function addEvent(req, res) {
    const eventData = req.body;
    try {
        const result = await eventModel.addEvent(eventData);
        res.status(201).json({ message: "Event added successfully", result });
    } catch (error) {
        console.error('Error adding event:', error);
        res.status(500).json({ message: "Error adding event", error: error.message });
    }
}

// PUT: Replace an event by name
async function updateEvent(req, res) {
    const { eventName } = req.params;
    const updatedData = req.body;

    try {
        const result = await eventModel.updateEvent(eventName, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json({ message: "Event updated successfully", result });
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: "Error updating event", error: error.message });
    }
}

// PATCH: Update specific fields of an event
async function updateEventFields(req, res) {
    const { eventName } = req.params;
    const updatedData = req.body;

    try {
        const result = await eventModel.updateEventFields(eventName, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json({ message: "Event details updated successfully", result });
    } catch (error) {
        console.error('Error updating event:', error);
        res.status(500).json({ message: "Error updating event", error: error.message });
    }
}

// DELETE: Remove an event by name
async function deleteEvent(req, res) {
    const { eventName } = req.params;
    try {
        const result = await eventModel.deleteEvent(eventName);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Event not found" });
        }
        res.json({ message: "Event deleted successfully" });
    } catch (error) {
        console.error('Error deleting event:', error);
        res.status(500).json({ message: "Error deleting event", error: error.message });
    }
}

module.exports = {
    getAllEvents,
    getEventByName,
    addEvent,
    updateEvent,
    updateEventFields,
    deleteEvent
};
