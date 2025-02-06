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

module.exports = {
    getAllFoodShops,
    getFoodShopByName,
    addFoodShop
};
