require('dotenv').config();

// Access variables using process.env
const uri = process.env.MONGODB_URI;
const dbName = process.env.DB_NAME;
const collectionName = process.env.HOSPITAL_COLLECTION;
const port = process.env.PORT || 3000;

const express = require('express');
const { MongoClient } = require('mongodb');
const app = express();

app.use(express.json());

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

// Database connection and routes as before...

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
