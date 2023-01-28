require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");


const methodOverride = require("method-override");

const PORT = 3000;

const Patient = require("./models/patients.js");

/**
 * Controller requires go here ⬇️
 */

//--------------------------------

const db = require("./models/db");
db 
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));

const setupMiddleware = require("./middleware/setupMiddleware");

setupMiddleware(app);


/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());


// index
app.get("/patients", (req, res) => {
  Patient.find({}, (error, allPatients) => {
    res.render("Index", {
      patients: allPatients,
    });
  });
});

//new
app.get("/patients/new", (req, res) => {
  res.render("New");
});

//delete
app.delete("/patients/:id", (req, res) => {
  Patient.findByIdAndRemove(req.params.id, (err, data) => {
    res.redirect("/patients");
  });
});

//update
app.put('/patients/:id', (req, res)=>{
    Patient.findByIdAndUpdate(req.params.id, req.body, (err, updatedPatient)=>{
       console.log(updatedPatient)
        res.redirect(`/patients/${req.params.id}`);
    });
});

//create
app.post("/patients", (req, res) => {
  Patient.create(req.body, (error, createdPatient) => {
    res.redirect("/patients");
  });
});

//edit
app.get("/patients/:id/edit", (req, res) => {
  Patient.findById(req.params.id, (err, foundPatient) => {
    if (!err) {
      res.render("Edit", {
        patient: foundPatient,
      });
    } else {
      res.send({ msg: err.message });
    }
  });
});

//show
app.get("/patients/:id", (req, res) => {
  Patient.findById(req.params.id, (err, foundPatient) => {
    res.render("Show", {
      patient: foundPatient,
    });
  });
});

app.get("/", (req, res) => {
  res.redirect("/patients/");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});