const hospitalModel = require('../models/hospitalModel');

// GET: Retrieve all hospitals
async function getAllHospitals(req, res) {
    try {
        const hospitals = await hospitalModel.getAllHospitals();
        if (hospitals.length === 0) {
            return res.status(404).json({ message: "No hospitals found" });
        }
        res.json(hospitals);
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ message: "Error fetching hospitals", error: error.message });
    }
}

// GET: Retrieve a specific hospital by name
async function getHospitalByName(req, res) {
    const { name } = req.params;
    try {
        const hospital = await hospitalModel.getHospitalByName(name);
        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        res.json(hospital);
    } catch (error) {
        console.error('Error fetching hospital:', error);
        res.status(500).json({ message: "Error fetching hospital", error: error.message });
    }
}

// POST: Add a new hospital
async function addHospital(req, res) {
    const hospitalData = req.body;
    try {
        const result = await hospitalModel.addHospital(hospitalData);
        res.status(201).json({ message: "Hospital added successfully", result });
    } catch (error) {
        console.error('Error adding hospital:', error);
        res.status(500).json({ message: "Error adding hospital", error: error.message });
    }
}

// PUT: Replace a hospital by name
async function updateHospital(req, res) {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const result = await hospitalModel.updateHospital(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        res.json({ message: "Hospital updated successfully", result });
    } catch (error) {
        console.error('Error updating hospital:', error);
        res.status(500).json({ message: "Error updating hospital", error: error.message });
    }
}

// PATCH: Update specific fields of a hospital
async function updateHospitalFields(req, res) {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const result = await hospitalModel.updateHospitalFields(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        res.json({ message: "Hospital details updated successfully", result });
    } catch (error) {
        console.error('Error updating hospital:', error);
        res.status(500).json({ message: "Error updating hospital", error: error.message });
    }
}

// DELETE: Remove a hospital by name
async function deleteHospital(req, res) {
    const { name } = req.params;
    try {
        const result = await hospitalModel.deleteHospital(name);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Hospital not found" });
        }
        res.json({ message: "Hospital deleted successfully" });
    } catch (error) {
        console.error('Error deleting hospital:', error);
        res.status(500).json({ message: "Error deleting hospital", error: error.message });
    }
}

module.exports = {
    getAllHospitals,
    getHospitalByName,
    addHospital,
    updateHospital,
    updateHospitalFields,
    deleteHospital
};

