const attractionModel = require('../models/attractionModel');

// GET: Retrieve all attractions
async function getAllAttractions(req, res) {
    try {
        const attractions = await attractionModel.getAllAttractions();
        if (attractions.length === 0) {
            return res.status(404).json({ message: "No attractions found" });
        }
        res.json(attractions);
    } catch (error) {
        console.error('Error fetching attractions:', error);
        res.status(500).json({ message: "Error fetching attractions", error: error.message });
    }
}

// GET: Retrieve a specific attraction by name
async function getAttractionByName(req, res) {
    const { name } = req.params;
    try {
        const attraction = await attractionModel.getAttractionByName(name);
        if (!attraction) {
            return res.status(404).json({ message: "Attraction not found" });
        }
        res.json(attraction);
    } catch (error) {
        console.error('Error fetching attraction:', error);
        res.status(500).json({ message: "Error fetching attraction", error: error.message });
    }
}

// POST: Add a new attraction
async function addAttraction(req, res) {
    const attractionData = req.body;
    try {
        const result = await attractionModel.addAttraction(attractionData);
        res.status(201).json({ message: "Attraction added successfully", result });
    } catch (error) {
        console.error('Error adding attraction:', error);
        res.status(500).json({ message: "Error adding attraction", error: error.message });
    }
}

// PUT: Replace an attraction by name
async function updateAttraction(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await attractionModel.updateAttraction(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Attraction not found" });
        }
        res.json({ message: "Attraction updated successfully", result });
    } catch (error) {
        console.error('Error updating attraction:', error);
        res.status(500).json({ message: "Error updating attraction", error: error.message });
    }
}

// PATCH: Update specific fields of an attraction
async function updateAttractionFields(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await attractionModel.updateAttractionFields(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Attraction not found" });
        }
        res.json({ message: "Attraction details updated successfully", result });
    } catch (error) {
        console.error('Error updating attraction:', error);
        res.status(500).json({ message: "Error updating attraction", error: error.message });
    }
}

// DELETE: Remove an attraction by name
async function deleteAttraction(req, res) {
    const { name } = req.params;
    try {
        const result = await attractionModel.deleteAttraction(name);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Attraction not found" });
        }
        res.json({ message: "Attraction deleted successfully" });
    } catch (error) {
        console.error('Error deleting attraction:', error);
        res.status(500).json({ message: "Error deleting attraction", error: error.message });
    }
}

module.exports = {
    getAllAttractions,
    getAttractionByName,
    addAttraction,
    updateAttraction,
    updateAttractionFields,
    deleteAttraction
};
