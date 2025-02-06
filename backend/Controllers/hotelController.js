const hotelModel = require('../models/hotelModel');

// GET: Retrieve all hotels
async function getAllHotels(req, res) {
    try {
        const hotels = await hotelModel.getAllHotels();
        if (hotels.length === 0) {
            return res.status(404).json({ message: "No hotels found" });
        }
        res.json(hotels);
    } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ message: "Error fetching hotels", error: error.message });
    }
}

// GET: Retrieve a specific hotel by name
async function getHotelByName(req, res) {
    const { name } = req.params;
    try {
        const hotel = await hotelModel.getHotelByName(name);
        if (!hotel) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        res.json(hotel);
    } catch (error) {
        console.error('Error fetching hotel:', error);
        res.status(500).json({ message: "Error fetching hotel", error: error.message });
    }
}

// POST: Add a new hotel
async function addHotel(req, res) {
    const hotelData = req.body;
    try {
        const result = await hotelModel.addHotel(hotelData);
        res.status(201).json({ message: "Hotel added successfully", result });
    } catch (error) {
        console.error('Error adding hotel:', error);
        res.status(500).json({ message: "Error adding hotel", error: error.message });
    }
}

// PUT: Replace a hotel by name
async function updateHotel(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await hotelModel.updateHotel(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        res.json({ message: "Hotel updated successfully", result });
    } catch (error) {
        console.error('Error updating hotel:', error);
        res.status(500).json({ message: "Error updating hotel", error: error.message });
    }
}

// PATCH: Update specific fields of a hotel
async function updateHotelFields(req, res) {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const result = await hotelModel.updateHotelFields(name, updatedData);
        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        res.json({ message: "Hotel details updated successfully", result });
    } catch (error) {
        console.error('Error updating hotel:', error);
        res.status(500).json({ message: "Error updating hotel", error: error.message });
    }
}

// DELETE: Remove a hotel by name
async function deleteHotel(req, res) {
    const { name } = req.params;
    try {
        const result = await hotelModel.deleteHotel(name);
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Hotel not found" });
        }
        res.json({ message: "Hotel deleted successfully" });
    } catch (error) {
        console.error('Error deleting hotel:', error);
        res.status(500).json({ message: "Error deleting hotel", error: error.message });
    }
}

module.exports = {
    getAllHotels,
    getHotelByName,
    addHotel,
    updateHotel,
    updateHotelFields,
    deleteHotel
};
