const Hospital = require("../models/hospitalModel"); 
exports.addHospital = async (req, res) => {
  try {
    const { name, address, city, state, zip, phone, email, website, openingHours, specialties, facilities, latitude, longitude } = req.body;

    if (!openingHours) {
      return res.status(400).json({ message: "Opening Hours is required" });
    }

    const hospital = new Hospital({
      name,
      address,
      city,
      state,
      zip,
      phone,
      email,
      website,
      openingHours,
      specialties: Array.isArray(specialties) ? specialties : specialties.split(","),  
      facilities: Array.isArray(facilities) ? facilities : facilities.split(","),  
      latitude,
      longitude,
      image: req.file ? req.file.filename : null,
    });

    await hospital.save();
    res.status(201).json({ message: "Hospital added successfully", hospital });
  } catch (error) {
    console.error(" Error:", error);
    res.status(500).json({ message: "Error adding hospital", error: error.message });
  }
};
