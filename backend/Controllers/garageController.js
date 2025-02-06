const garageModel = require('../models/garageModel');  // Ensure the correct path

// GET: Retrieve all garages
async function getAllGarages(req, res) {
    try {
        const garages = await garageModel.getAllGarages();
        if (garages.length === 0) {
            return res.status(404).json({ message: "No garages found" });
        }
        res.json(garages);
    } catch (error) {
        console.error('Error fetching garages:', error);
        res.status(500).json({ message: "Error fetching garages", error: error.message });
    }
}

// GET: Retrieve a specific garage by name
async function getGarageByName(req, res) {
    const { name } = req.params;
    try {
        const garage = await garageModel.getGarageByName(name);
        if (!garage) {
            return res.status(404).json({ message: "Garage not found" });
        }
        res.json(garage);
    } catch (error) {
        console.error('Error fetching garage:', error);
        res.status(500).json({ message: "Error fetching garage", error: error.message });
    }
}

// POST: Add a new garage
async function addGarage(req, res) {
    const garageData = req.body;
    try {
        const result = await garageModel.addGarage(garageData);
        res.status(201).json({ message: "Garage added successfully", result });
    } catch (error) {
        console.error('Error adding garage:', error);
        res.status(500).json({ message: "Error adding garage", error: error.message });
    }
}

module.exports = {
    getAllGarages,
    getGarageByName,
    addGarage
};
