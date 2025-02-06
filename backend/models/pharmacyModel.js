const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";
const collectionName = "pharmacies";

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

// Fetch all pharmacies
async function getAllPharmacies() {
    const collection = await connectToDatabase();
    return collection.find({}).toArray();
}

// Fetch pharmacy by name
async function getPharmacyByName(name) {
    const collection = await connectToDatabase();
    return collection.findOne({ name });
}

// Add a new pharmacy
async function addPharmacy(pharmacyData) {
    const collection = await connectToDatabase();
    return collection.insertOne(pharmacyData);
}

// Update pharmacy by name
async function updatePharmacy(name, updatedData) {
    const collection = await connectToDatabase();
    return collection.replaceOne({ name }, updatedData);
}

// Update specific fields of a pharmacy
async function updatePharmacyFields(name, updatedData) {
    const collection = await connectToDatabase();
    return collection.updateOne({ name }, { $set: updatedData });
}

// Delete pharmacy by name
async function deletePharmacy(name) {
    const collection = await connectToDatabase();
    return collection.deleteOne({ name });
}

module.exports = {
    getAllPharmacies,
    getPharmacyByName,
    addPharmacy,
    updatePharmacy,
    updatePharmacyFields,
    deletePharmacy
};
