const express = require('express');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project"; 
const collectionName = "garages";  

const app = express();
app.use(express.json());  

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Function to connect to the MongoDB database
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

//  GET: Retrieve all garages
app.get('/garages', async (req, res) => {
    try {
        const collection = await connectToDatabase();
        const garages = await collection.find({}).toArray();

        if (garages.length === 0) {
            return res.status(404).json({ message: "No garages found" });
        }

        res.json(garages);
    } catch (error) {
        console.error('Error fetching garages:', error);
        res.status(500).json({ message: "Error fetching garages", error: error.message });
    }
});

//  GET: Retrieve a specific garage by name
app.get('/garages/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const collection = await connectToDatabase();
        const garage = await collection.findOne({ name });

        if (!garage) {
            return res.status(404).json({ message: "Garage not found" });
        }

        res.json(garage);
    } catch (error) {
        console.error('Error fetching garage:', error);
        res.status(500).json({ message: "Error fetching garage", error: error.message });
    }
});

//  POST: Add a new garage
app.post('/garages', async (req, res) => {
    const garageData = req.body;
    try {
        const collection = await connectToDatabase();
        const result = await collection.insertOne(garageData);
        res.status(201).json({ message: "Garage added successfully", result });
    } catch (error) {
        console.error('Error adding garage:', error);
        res.status(500).json({ message: "Error adding garage", error: error.message });
    }
});

//  PUT: Replace a garage by name
app.put('/garages/:name', async (req, res) => {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const collection = await connectToDatabase();
        const result = await collection.replaceOne({ name }, updatedData);

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Garage not found" });
        }

        res.json({ message: "Garage updated successfully", result });
    } catch (error) {
        console.error('Error updating garage:', error);
        res.status(500).json({ message: "Error updating garage", error: error.message });
    }
});

//  PATCH: Update specific fields of a garage
app.patch('/garages/:name', async (req, res) => {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const collection = await connectToDatabase();
        const result = await collection.updateOne({ name }, { $set: updatedData });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Garage not found" });
        }

        res.json({ message: "Garage details updated successfully", result });
    } catch (error) {
        console.error('Error updating garage:', error);
        res.status(500).json({ message: "Error updating garage", error: error.message });
    }
});

//  DELETE: Remove a garage by name
app.delete('/garages/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const collection = await connectToDatabase();
        const result = await collection.deleteOne({ name });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Garage not found" });
        }

        res.json({ message: "Garage deleted successfully" });
    } catch (error) {
        console.error('Error deleting garage:', error);
        res.status(500).json({ message: "Error deleting garage", error: error.message });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
