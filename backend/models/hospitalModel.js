const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";
const collectionName = "hospitals";

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

// Fetch all hospitals
async function getAllHospitals() {
    const collection = await connectToDatabase();
    return collection.find({}).toArray();
}

// Fetch hospital by name
async function getHospitalByName(name) {
    const collection = await connectToDatabase();
    return collection.findOne({ name });
}

// Add a new hospital
async function addHospital(hospitalData) {
    const collection = await connectToDatabase();
    return collection.insertOne(hospitalData);
}

// Update hospital by name
async function updateHospital(name, updatedData) {
    const collection = await connectToDatabase();
    return collection.replaceOne({ name }, updatedData);
}

// Update specific fields of a hospital
async function updateHospitalFields(name, updatedData) {
    const collection = await connectToDatabase();
    return collection.updateOne({ name }, { $set: updatedData });
}

// Delete hospital by name
async function deleteHospital(name) {
    const collection = await connectToDatabase();
    return collection.deleteOne({ name });
}

module.exports = {
    getAllHospitals,
    getHospitalByName,
    addHospital,
    updateHospital,
    updateHospitalFields,
    deleteHospital
};
