const express = require('express');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "hospitals";  
const app = express();
app.use(express.json()); 
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

// GET: Retrieve all hospitals
app.get('/hospitals', async (req, res) => {
    try {
        const collection = await connectToDatabase();
        const hospitals = await collection.find({}).toArray();

        if (hospitals.length === 0) {
            return res.status(404).json({ message: "No hospitals found" });
        }

        res.json(hospitals);
    } catch (error) {
        console.error('Error fetching hospitals:', error);
        res.status(500).json({ message: "Error fetching hospitals", error: error.message });
    }
});

// GET: Retrieve a specific hospital by name
app.get('/hospitals/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const collection = await connectToDatabase();
        const hospital = await collection.findOne({ name });

        if (!hospital) {
            return res.status(404).json({ message: "Hospital not found" });
        }

        res.json(hospital);
    } catch (error) {
        console.error('Error fetching hospital:', error);
        res.status(500).json({ message: "Error fetching hospital", error: error.message });
    }
});

// POST: Add a new hospital
app.post('/hospitals', async (req, res) => {
    const hospitalData = req.body;
    try {
        const collection = await connectToDatabase();
        const result = await collection.insertOne(hospitalData);
        res.status(201).json({ message: "Hospital added successfully", result });
    } catch (error) {
        console.error('Error adding hospital:', error);
        res.status(500).json({ message: "Error adding hospital", error: error.message });
    }
});

// PUT: Replace a hospital by name
app.put('/hospitals/:name', async (req, res) => {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const collection = await connectToDatabase();
        const result = await collection.replaceOne({ name }, updatedData);

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Hospital not found" });
        }

        res.json({ message: "Hospital updated successfully", result });
    } catch (error) {
        console.error('Error updating hospital:', error);
        res.status(500).json({ message: "Error updating hospital", error: error.message });
    }
});

// PATCH: Update specific fields of a hospital
app.patch('/hospitals/:name', async (req, res) => {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const collection = await connectToDatabase();
        const result = await collection.updateOne({ name }, { $set: updatedData });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Hospital not found" });
        }

        res.json({ message: "Hospital details updated successfully", result });
    } catch (error) {
        console.error('Error updating hospital:', error);
        res.status(500).json({ message: "Error updating hospital", error: error.message });
    }
});

// DELETE: Remove a hospital by name
app.delete('/hospitals/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const collection = await connectToDatabase();
        const result = await collection.deleteOne({ name });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Hospital not found" });
        }

        res.json({ message: "Hospital deleted successfully" });
    } catch (error) {
        console.error('Error deleting hospital:', error);
        res.status(500).json({ message: "Error deleting hospital", error: error.message });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
