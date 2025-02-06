const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "food_shops";  

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

// Get all food shops
async function getAllFoodShops() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a specific food shop by name
async function getFoodShopByName(name) {
    const collection = await connectToDatabase();
    return await collection.findOne({ name });
}

// Add a new food shop
async function addFoodShop(foodShopData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(foodShopData);
}

// Replace a food shop by name
async function updateFoodShop(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ name }, updatedData);
}

// Update specific fields of a food shop
async function updateFoodShopFields(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ name }, { $set: updatedData });
}

// Delete a food shop by name
async function deleteFoodShop(name) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ name });
}

module.exports = {
    getAllFoodShops,
    getFoodShopByName,
    addFoodShop,
    updateFoodShop,
    updateFoodShopFields,
    deleteFoodShop
};
