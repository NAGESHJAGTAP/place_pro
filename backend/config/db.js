// const mongoose = require("mongoose");

// const connectDB = async () => {
//   try {
//     await mongoose.connect("mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/project", {
//       serverSelectionTimeoutMS: 10000, 
//       socketTimeoutMS: 45000, 
//     });

//     console.log("MongoDB Connected Successfully!");
//   } catch (error) {
//     console.error(" MongoDB Connection Error:", error.message);
//     process.exit(1);  
//   }
// };

// module.exports = { connectDB };


const mongoose = require("mongoose");

let db;

const connectDB = async () => {
  try {
    const connection = await mongoose.connect("mongodb+srv://test:test123@cluster0.kwbnz.mongodb.net/project", {
      serverSelectionTimeoutMS: 10000,
      socketTimeoutMS: 45000,
    });

    db = connection.connection.db;  // Store the DB connection

    console.log("MongoDB Connected Successfully!");
  } catch (error) {
    console.error("MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};

const getDB = () => {
  if (!db) {
    throw new Error("Database not initialized!");
  }
  return db;
};

module.exports = { connectDB, getDB };
