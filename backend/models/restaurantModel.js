const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "restaurants";  

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function connectToDatabase() {
    try {
        if (!client.topology || !client.topology.isConnected()) {
            await client.connect();
            console.log('Connected to MongoDB');
        }
        return client.db(dbName).collection(collectionName);
    } catch (error) {
        console.error('MongoDB Connection Error:', error);
        throw error;
    }
}

// Get all restaurants
async function getAllRestaurants() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a specific restaurant by name
async function getRestaurantByName(name) {
    const collection = await connectToDatabase();
    return await collection.findOne({ restaurant_name: name });
}

// Add a new restaurant
async function addRestaurant(restaurantData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(restaurantData);
}

// Replace a restaurant by name
async function updateRestaurant(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ restaurant_name: name }, updatedData);
}

// Update specific fields of a restaurant
async function updateRestaurantFields(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ restaurant_name: name }, { $set: updatedData });
}

// Delete a restaurant by name
async function deleteRestaurant(name) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ restaurant_name: name });
}

module.exports = {
    getAllRestaurants,
    getRestaurantByName,
    addRestaurant,
    updateRestaurant,
    updateRestaurantFields,
    deleteRestaurant
};
