const mongoose = require("mongoose");

const GarageSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  services: { type: [String], default: [] },
  workingHours: { type: String },
  specialties: { type: [String], default: [] },
  website: { type: String },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  image: { type: String },
  reviews: { type: [{ reviewer: String, rating: Number, comment: String }], default: [] }, // Array of objects
});

module.exports = mongoose.model("Garage", GarageSchema);
