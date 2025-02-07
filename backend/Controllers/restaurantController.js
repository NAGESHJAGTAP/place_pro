const restaurantModel = require('../models/restaurantModel');

// GET: Retrieve all restaurants
async function getAllRestaurants(req, res) {
    try {
        const restaurants = await restaurantModel.getAllRestaurants();
        if (restaurants.length === 0) {
            return res.status(404).json({ message: "No restaurants found" });
        }
        res.json(restaurants);
    } catch (error) {
        console.error('Error fetching restaurants:', error);
        res.status(500).json({ message: "Error fetching restaurants", error: error.message });
    }
}

// GET: Retrieve a specific restaurant by name
async function getRestaurantByName(req, res) {
    const { name } = req.params;
    try {
        const restaurant = await restaurantModel.getRestaurantByName(name);
        if (!restaurant) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.json(restaurant);
    } catch (error) {
        console.error('Error fetching restaurant:', error);
        res.status(500).json({ message: "Error fetching restaurant", error: error.message });
    }
}

// POST: Add a new restaurant
async function addRestaurant(req, res) {
    const restaurantData = req.body;
    try {
        const result = await restaurantModel.addRestaurant(restaurantData);
        res.status(201).json({ message: "Restaurant added successfully", result });
    } catch (error) {
        console.error('Error adding restaurant:', error);
        res.status(500).json({ message: "Error adding restaurant", error: error.message });
    }
}

// PUT: Replace a restaurant by name
async function updateRestaurant(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await restaurantModel.updateRestaurant(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.json({ message: "Restaurant updated successfully", result });
    } catch (error) {
        console.error('Error updating restaurant:', error);
        res.status(500).json({ message: "Error updating restaurant", error: error.message });
    }
}

// PATCH: Update specific fields of a restaurant
async function updateRestaurantFields(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await restaurantModel.updateRestaurantFields(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.json({ message: "Restaurant details updated successfully", result });
    } catch (error) {
        console.error('Error updating restaurant:', error);
        res.status(500).json({ message: "Error updating restaurant", error: error.message });
    }
}

// DELETE: Remove a restaurant by name
async function deleteRestaurant(req, res) {
    const { name } = req.params;
    try {
        const result = await restaurantModel.deleteRestaurant(name);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Restaurant not found" });
        }
        res.json({ message: "Restaurant deleted successfully" });
    } catch (error) {
        console.error('Error deleting restaurant:', error);
        res.status(500).json({ message: "Error deleting restaurant", error: error.message });
    }
}

module.exports = {
    getAllRestaurants,
    getRestaurantByName,
    addRestaurant,
    updateRestaurant,
    updateRestaurantFields,
    deleteRestaurant
};
