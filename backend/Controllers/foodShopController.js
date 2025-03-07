const foodShopModel = require('../models/foodShopModel');

// GET: Retrieve all food shops
async function getAllFoodShops(req, res) {
    try {
        const foodShops = await foodShopModel.getAllFoodShops();
        if (foodShops.length === 0) {
            return res.status(404).json({ message: "No food shops found" });
        }
        res.json(foodShops);
    } catch (error) {
        console.error('Error fetching food shops:', error);
        res.status(500).json({ message: "Error fetching food shops", error: error.message });
    }
}

// GET: Retrieve a specific food shop by name
async function getFoodShopByName(req, res) {
    const { name } = req.params;
    try {
        const foodShop = await foodShopModel.getFoodShopByName(name);
        if (!foodShop) {
            return res.status(404).json({ message: "Food shop not found" });
        }
        res.json(foodShop);
    } catch (error) {
        console.error('Error fetching food shop:', error);
        res.status(500).json({ message: "Error fetching food shop", error: error.message });
    }
}

// POST: Add a new food shop
async function addFoodShop(req, res) {
    const foodShopData = req.body;
    try {
        const result = await foodShopModel.addFoodShop(foodShopData);
        res.status(201).json({ message: "Food shop added successfully", result });
    } catch (error) {
        console.error('Error adding food shop:', error);
        res.status(500).json({ message: "Error adding food shop", error: error.message });
    }
}

// PUT: Replace a food shop by name
async function updateFoodShop(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await foodShopModel.updateFoodShop(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Food shop not found" });
        }
        res.json({ message: "Food shop updated successfully", result });
    } catch (error) {
        console.error('Error updating food shop:', error);
        res.status(500).json({ message: "Error updating food shop", error: error.message });
    }
}

// PATCH: Update specific fields of a food shop
async function updateFoodShopFields(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await foodShopModel.updateFoodShopFields(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Food shop not found" });
        }
        res.json({ message: "Food shop details updated successfully", result });
    } catch (error) {
        console.error('Error updating food shop:', error);
        res.status(500).json({ message: "Error updating food shop", error: error.message });
    }
}

// DELETE: Remove a food shop by name
async function deleteFoodShop(req, res) {
    const { name } = req.params;
    try {
        const result = await foodShopModel.deleteFoodShop(name);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Food shop not found" });
        }
        res.json({ message: "Food shop deleted successfully" });
    } catch (error) {
        console.error('Error deleting food shop:', error);
        res.status(500).json({ message: "Error deleting food shop", error: error.message });
    }
}

module.exports = {
    getAllFoodShops,
    getFoodShopByName,
    addFoodShop,
    updateFoodShop,
    updateFoodShopFields,
    deleteFoodShop
};
