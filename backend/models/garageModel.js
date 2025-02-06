const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project"; 
const collectionName = "garages";  

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

// Get all garages
async function getAllGarages() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a garage by name
async function getGarageByName(name) {
    const collection = await connectToDatabase();
    return await collection.findOne({ name });
}

// Add a new garage
async function addGarage(garageData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(garageData);
}

// Replace a garage by name
async function updateGarage(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ name }, updatedData);
}

// Update specific fields of a garage
async function updateGarageFields(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ name }, { $set: updatedData });
}

// Delete a garage by name
async function deleteGarage(name) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ name });
}

module.exports = {
    getAllGarages,
    getGarageByName,
    addGarage,
    updateGarage,
    updateGarageFields,
    deleteGarage
};
