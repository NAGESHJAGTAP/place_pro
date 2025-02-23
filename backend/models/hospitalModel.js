const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  website: { type: String, required: true },
  openingHours: { type: String, required: true },
  specialties: { type: [String], required: true },  
  facilities: { type: [String], required: true },  
  latitude: { type: String, required: true },
  longitude: { type: String, required: true },
  image: { type: String },
});
const Hospital = mongoose.model("Hospital", HospitalSchema);
module.exports = Hospital;
