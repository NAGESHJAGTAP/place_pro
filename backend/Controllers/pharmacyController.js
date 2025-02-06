const pharmacyModel = require('../models/pharmacyModel');

// GET: Retrieve all pharmacies
async function getAllPharmacies(req, res) {
    try {
        const pharmacies = await pharmacyModel.getAllPharmacies();
        if (pharmacies.length === 0) {
            return res.status(404).json({ message: "No pharmacies found" });
        }
        res.json(pharmacies);
    } catch (error) {
        console.error('Error fetching pharmacies:', error);
        res.status(500).json({ message: "Error fetching pharmacies", error: error.message });
    }
}

// GET: Retrieve a specific pharmacy by name
async function getPharmacyByName(req, res) {
    const { name } = req.params;
    try {
        const pharmacy = await pharmacyModel.getPharmacyByName(name);
        if (!pharmacy) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }
        res.json(pharmacy);
    } catch (error) {
        console.error('Error fetching pharmacy:', error);
        res.status(500).json({ message: "Error fetching pharmacy", error: error.message });
    }
}

// POST: Add a new pharmacy
async function addPharmacy(req, res) {
    const pharmacyData = req.body;
    try {
        const result = await pharmacyModel.addPharmacy(pharmacyData);
        res.status(201).json({ message: "Pharmacy added successfully", result });
    } catch (error) {
        console.error('Error adding pharmacy:', error);
        res.status(500).json({ message: "Error adding pharmacy", error: error.message });
    }
}

// PUT: Replace a pharmacy by name
async function updatePharmacy(req, res) {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const result = await pharmacyModel.updatePharmacy(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }
        res.json({ message: "Pharmacy updated successfully", result });
    } catch (error) {
        console.error('Error updating pharmacy:', error);
        res.status(500).json({ message: "Error updating pharmacy", error: error.message });
    }
}

// PATCH: Update specific fields of a pharmacy
async function updatePharmacyFields(req, res) {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const result = await pharmacyModel.updatePharmacyFields(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }
        res.json({ message: "Pharmacy details updated successfully", result });
    } catch (error) {
        console.error('Error updating pharmacy:', error);
        res.status(500).json({ message: "Error updating pharmacy", error: error.message });
    }
}

// DELETE: Remove a pharmacy by name
async function deletePharmacy(req, res) {
    const { name } = req.params;
    try {
        const result = await pharmacyModel.deletePharmacy(name);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }
        res.json({ message: "Pharmacy deleted successfully" });
    } catch (error) {
        console.error('Error deleting pharmacy:', error);
        res.status(500).json({ message: "Error deleting pharmacy", error: error.message });
    }
}

module.exports = {
    getAllPharmacies,
    getPharmacyByName,
    addPharmacy,
    updatePharmacy,
    updatePharmacyFields,
    deletePharmacy
};
