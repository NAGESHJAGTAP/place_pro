const express = require('express');
const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/";
const dbName = "project";  
const collectionName = "pharmacies";  

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

// 🔹 GET: Retrieve all pharmacies
app.get('/pharmacies', async (req, res) => {
    try {
        const collection = await connectToDatabase();
        const pharmacies = await collection.find({}).toArray();

        if (pharmacies.length === 0) {
            return res.status(404).json({ message: "No pharmacies found" });
        }

        res.json(pharmacies);
    } catch (error) {
        console.error('Error fetching pharmacies:', error);
        res.status(500).json({ message: "Error fetching pharmacies", error: error.message });
    }
});

// 🔹 GET: Retrieve a specific pharmacy by name
app.get('/pharmacies/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const collection = await connectToDatabase();
        const pharmacy = await collection.findOne({ name });

        if (!pharmacy) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }

        res.json(pharmacy);
    } catch (error) {
        console.error('Error fetching pharmacy:', error);
        res.status(500).json({ message: "Error fetching pharmacy", error: error.message });
    }
});

// 🔹 POST: Add a new pharmacy
app.post('/pharmacies', async (req, res) => {
    const pharmacyData = req.body;
    try {
        const collection = await connectToDatabase();
        const result = await collection.insertOne(pharmacyData);
        res.status(201).json({ message: "Pharmacy added successfully", result });
    } catch (error) {
        console.error('Error adding pharmacy:', error);
        res.status(500).json({ message: "Error adding pharmacy", error: error.message });
    }
});

// 🔹 PUT: Replace a pharmacy by name
app.put('/pharmacies/:name', async (req, res) => {
    const { name } = req.params;
    const updatedData = req.body;

    try {
        const collection = await connectToDatabase();
        const result = await collection.replaceOne({ name }, updatedData);

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }

        res.json({ message: "Pharmacy updated successfully", result });
    } catch (error) {
        console.error('Error updating pharmacy:', error);
        res.status(500).json({ message: "Error updating pharmacy", error: error.message });
    }
});

// 🔹 PATCH: Update specific fields of a pharmacy
app.patch('/pharmacies/:name', async (req, res) => {
    const { name } = req.params;
    const updatedData = req.body;
    try {
        const collection = await connectToDatabase();
        const result = await collection.updateOne({ name }, { $set: updatedData });

        if (result.matchedCount === 0) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }

        res.json({ message: "Pharmacy details updated successfully", result });
    } catch (error) {
        console.error('Error updating pharmacy:', error);
        res.status(500).json({ message: "Error updating pharmacy", error: error.message });
    }
});

// 🔹 DELETE: Remove a pharmacy by name
app.delete('/pharmacies/:name', async (req, res) => {
    const { name } = req.params;
    try {
        const collection = await connectToDatabase();
        const result = await collection.deleteOne({ name });

        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "Pharmacy not found" });
        }

        res.json({ message: "Pharmacy deleted successfully" });
    } catch (error) {
        console.error('Error deleting pharmacy:', error);
        res.status(500).json({ message: "Error deleting pharmacy", error: error.message });
    }
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
