const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "events";  

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

// Get all events
async function getAllEvents() {
    const collection = await connectToDatabase();
    return await collection.find({}).toArray();
}

// Get a specific event by name
async function getEventByName(eventName) {
    const collection = await connectToDatabase();
    return await collection.findOne({ eventName });
}

// Add a new event
async function addEvent(eventData) {
    const collection = await connectToDatabase();
    return await collection.insertOne(eventData);
}

// Replace an event by name
async function updateEvent(eventName, updatedData) {
    const collection = await connectToDatabase();
    return await collection.replaceOne({ eventName }, updatedData);
}

// Update specific fields of an event
async function updateEventFields(eventName, updatedData) {
    const collection = await connectToDatabase();
    return await collection.updateOne({ eventName }, { $set: updatedData });
}

// Delete an event by name
async function deleteEvent(eventName) {
    const collection = await connectToDatabase();
    return await collection.deleteOne({ eventName });
}

module.exports = {
    getAllEvents,
    getEventByName,
    addEvent,
    updateEvent,
    updateEventFields,
    deleteEvent
};
