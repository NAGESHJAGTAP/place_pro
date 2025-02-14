const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "sports";  

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// MongoDB connection function
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

// Get all sports
async function getAllSports() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a specific sport by name
async function getSportByName(sportName) {
    const collection = await connectToDatabase();
    return await collection.findOne({ sportName });
}

// Add a new sport
async function addSport(sportData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(sportData);
}

// Replace a sport by name
async function updateSport(sportName, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ sportName }, updatedData);
}

// Update specific fields of a sport
async function updateSportFields(sportName, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ sportName }, { $set: updatedData });
}

// Delete a sport by name
async function deleteSport(sportName) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ sportName });
}

module.exports = {
    getAllSports,
    getSportByName,
    addSport,
    updateSport,
    updateSportFields,
    deleteSport
};
