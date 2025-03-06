const Garage = require("../models/garageModel");

exports.addGarage = async (req, res) => {
  try {
    console.log("Received Data:", req.body); 

    const { 
      name, 
      address, 
      phone, 
      email, 
      services, 
      workingHours, 
      specialties, 
      website, 
      latitude, 
      longitude, 
      reviews 
    } = req.body;
    
    const image = req.file ? req.file.filename : null;

    const newGarage = new Garage({
      name,
      address,
      phone,
      email,
      services: Array.isArray(services) ? services : services.split(",").map(s => s.trim()), 
      workingHours,
      specialties: Array.isArray(specialties) ? specialties : specialties.split(",").map(s => s.trim()), 
      website,
      latitude: parseFloat(latitude), 
      longitude: parseFloat(longitude), 
      image,
      reviews: reviews ? JSON.parse(reviews) : [], 
    });

    await newGarage.save();
    res.status(201).json({ message: "Garage added successfully!" });
  } catch (error) {
    console.error("Error adding garage:", error);
    res.status(500).json({ message: "Failed to add garage." });
  }
};

exports.getGarages = async (req, res) => {
  try {
    const garages = await Garage.find();
    res.json(garages);
  } catch (error) {
    console.error("Error fetching garages:", error);
    res.status(500).json({ message: "Server error." });
  }
};
