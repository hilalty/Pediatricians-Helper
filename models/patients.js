const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  dob: { type: String, required: true },
  gender: { type: String },
  parentsName: { type: String },
  address: { type: String },
  username: { type: String },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
