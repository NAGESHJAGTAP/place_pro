const sportModel = require('../models/sportModel');

// GET: Retrieve all sports
async function getAllSports(req, res) {
    try {
        const sports = await sportModel.getAllSports();
        if (sports.length === 0) {
            return res.status(404).json({ message: "No sports found" });
        }
        res.json(sports);
    } catch (error) {
        console.error('Error fetching sports:', error);
        res.status(500).json({ message: "Error fetching sports", error: error.message });
    }
}

// GET: Retrieve a specific sport by name
async function getSportByName(req, res) {
    const { sportName } = req.params;
    try {
        const sport = await sportModel.getSportByName(sportName);
        if (!sport) {
            return res.status(404).json({ message: "Sport not found" });
        }
        res.json(sport);
    } catch (error) {
        console.error('Error fetching sport:', error);
        res.status(500).json({ message: "Error fetching sport", error: error.message });
    }
}

// POST: Add a new sport
async function addSport(req, res) {
    const sportData = req.body;
    try {
        const result = await sportModel.addSport(sportData);
        res.status(201).json({ message: "Sport added successfully", result });
    } catch (error) {
        console.error('Error adding sport:', error);
        res.status(500).json({ message: "Error adding sport", error: error.message });
    }
}

// PUT: Replace a sport by name
async function updateSport(req, res) {
    const { sportName } = req.params;
    const updatedData = req.body;

    try {
        const result = await sportModel.updateSport(sportName, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Sport not found" });
        }
        res.json({ message: "Sport updated successfully", result });
    } catch (error) {
        console.error('Error updating sport:', error);
        res.status(500).json({ message: "Error updating sport", error: error.message });
    }
}

// PATCH: Update specific fields of a sport
async function updateSportFields(req, res) {
    const { sportName } = req.params;
    const updatedData = req.body;

    try {
        const result = await sportModel.updateSportFields(sportName, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Sport not found" });
        }
        res.json({ message: "Sport updated successfully", result });
    } catch (error) {
        console.error('Error updating sport:', error);
        res.status(500).json({ message: "Error updating sport", error: error.message });
    }
}

// DELETE: Remove a sport by name
async function deleteSport(req, res) {
    const { sportName } = req.params;
    try {
        const result = await sportModel.deleteSport(sportName);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Sport not found" });
        }
        res.json({ message: "Sport deleted successfully" });
    } catch (error) {
        console.error('Error deleting sport:', error);
        res.status(500).json({ message: "Error deleting sport", error: error.message });
    }
}

module.exports = {
    getAllSports,
    getSportByName,
    addSport,
    updateSport,
    updateSportFields,
    deleteSport
};
