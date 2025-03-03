
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Hospital = require("../models/hospitalModel");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); 
  },
});
const upload = multer({ storage });
router.post("/hospitals", upload.single("image"), async (req, res) => {
  try {
    console.log("Received Data:", req.body);
    
    const {
      name,
      address,
      city,
      state,
      zip,
      phone,
      email,
      website,
      openingHours,
      specialties,
      facilities,
      latitude,
      longitude,
    } = req.body;

  
    if (!name || !address || !city || !state || !zip || !phone || !email || !website || !openingHours || !latitude || !longitude) {
      return res.status(400).json({ message: " All fields are required!" });
    }
    const imagePath = req.file ? `/uploads/${req.file.filename}` : "";

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
      specialties: Array.isArray(specialties) ? specialties : [],
      facilities: Array.isArray(facilities) ? facilities : [],
      latitude,
      longitude,
      image: imagePath, 
    });
    await hospital.save();

    res.status(201).json({ message: " Hospital added successfully!", hospital });
  } catch (error) {
    console.error(" Error adding hospital:", error.message);
    res.status(500).json({ error: error.message });
  }
});
router.get("/hospitals", async (req, res) => {
  try {
    console.log("Fetching hospitals from DB...");
    const hospitals = await Hospital.find();
    console.log(" Hospitals retrieved:", hospitals.length);

    res.json(hospitals);
  } catch (error) {
    console.error(" Error fetching hospitals:", error.message);
    res.status(500).json({ error: error.message });
  }
});

router.get("/hospitals/:id", async (req, res) => {
  try {
    console.log("Fetching hospitals from DB...");
    const hospitals = await Hospital.find();
    console.log(" Hospitals retrieved:", hospitals.length);

    res.json(hospitals);
  } catch (error) {
    console.error(" Error fetching hospitals:", error.message);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
