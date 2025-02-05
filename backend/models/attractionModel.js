const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "attractions";  

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

// Get all attractions
async function getAllAttractions() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a specific attraction by name
async function getAttractionByName(name) {
    const collection = await connectToDatabase();
    return await collection.findOne({ name });
}

// Add a new attraction
async function addAttraction(attractionData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(attractionData);
}

// Replace an attraction by name
async function updateAttraction(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ name }, updatedData);
}

// Update specific fields of an attraction
async function updateAttractionFields(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ name }, { $set: updatedData });
}

// Delete an attraction by name
async function deleteAttraction(name) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ name });
}

module.exports = {
    getAllAttractions,
    getAttractionByName,
    addAttraction,
    updateAttraction,
    updateAttractionFields,
    deleteAttraction
};
