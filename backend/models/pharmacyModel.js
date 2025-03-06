// const mongoose = require("mongoose");

// const PharmacySchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   address: { type: String, required: true },
//   city: { type: String, required: true },
//   state: { type: String, required: true },
//   zip: { type: String, required: true },
//   phone: { type: String, required: true },
//   email: { type: String, required: true },
//   website: { type: String },
//   openingHours: { type: String },
//   services: { type: [String] }, 
//   latitude: { type: String, required: true },
//   longitude: { type: String, required: true },
//   image: { type: String }, 
// });

// module.exports = mongoose.model("Pharmacy", PharmacySchema);






const mongoose = require("mongoose");

const PharmacySchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zip: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String },
  openingHours: { type: String },
  services: { type: [String], default: [] },
  latitude: { type: Number, required: true }, // Changed to Number
  longitude: { type: Number, required: true }, // Changed to Number
  image: { type: String },
});

module.exports = mongoose.model("Pharmacy", PharmacySchema);
