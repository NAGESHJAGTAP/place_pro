const mongoose = require("mongoose");

const HospitalSchema = new mongoose.Schema({
  name: String,
  type: String,
  address: String,
  phone: String,
  emergencyPhone: String,
  email: String,
  hours: {
    weekday: String,
    weekend: String,
    emergency: String
  },
  doctors: [
    { name: String, specialty: String, schedule: String }
  ],
  departments: [String],
  parking: {
    visitor: String,
    emergency: String,
    rates: String
  },
  transport: {
    bus: [String],
    subway: [String],
    accessibility: String
  }
});

module.exports = mongoose.model("Hospital", HospitalSchema);
