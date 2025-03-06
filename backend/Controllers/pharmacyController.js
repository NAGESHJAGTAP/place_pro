
const Pharmacy = require("../models/pharmacyModel");

exports.addPharmacy = async (req, res) => {
  try {
    console.log("Received Data:", req.body); 
    
    const { name, address, city, state, zip, phone, email, website, openingHours, services, latitude, longitude } = req.body;
    const image = req.file ? req.file.filename : null;

    const newPharmacy = new Pharmacy({
      name,
      address,
      city,
      state,
      zip,
      phone,
      email,
      website,
      openingHours,
      services: Array.isArray(services) ? services : services.split(",").map(s => s.trim()), // Ensure array
      latitude: parseFloat(latitude), // Convert to number
      longitude: parseFloat(longitude), // Convert to number
      image,
    });

    await newPharmacy.save();
    res.status(201).json({ message: "Pharmacy added successfully!" });
  } catch (error) {
    console.error("Error adding pharmacy:", error);
    res.status(500).json({ message: "Failed to add pharmacy." });
  }
};

exports.getPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (error) {
    console.error("Error fetching pharmacies:", error);
    res.status(500).json({ message: "Server error." });
  }
};
