const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "hotels";  

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

// Get all hotels
async function getAllHotels() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a specific hotel by name
async function getHotelByName(name) {
    const collection = await connectToDatabase();
    return await collection.findOne({ hotel_name: name });
}

// Add a new hotel
async function addHotel(hotelData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(hotelData);
}

// Replace a hotel by name
async function updateHotel(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ hotel_name: name }, updatedData);
}

// Update specific fields of a hotel
async function updateHotelFields(name, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ hotel_name: name }, { $set: updatedData });
}

// Delete a hotel by name
async function deleteHotel(name) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ hotel_name: name });
}

module.exports = {
    getAllHotels,
    getHotelByName,
    addHotel,
    updateHotel,
    updateHotelFields,
    deleteHotel
};
