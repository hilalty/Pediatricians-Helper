const express = require('express');
const router = express.Router();
const Patient = require('../models/patients.js');


// index
router.get("/", (req, res) => {
    Patient.find({}, (error, allPatients) => {
      res.render("patients/Index", {
        patients: allPatients,
      });
    });
  });
  
  //new
  router.get("/new", (req, res) => {
    res.render("patients/New");
  });
  
  //delete
  router.delete("/:id", (req, res) => {
    Patient.findByIdAndRemove(req.params.id, (err, patient) => {
      res.redirect("/patients");
    });
  });
  
  //update
  router.put('/:id', (req, res)=>{
      Patient.findByIdAndUpdate(req.params.id, req.body, (err, updatedModel)=>{
         console.log(updatedModel)
          res.redirect(`/patients/${req.params.id}`);
      });
  });
  
  //create
  router.post("/", (req, res) => {
    Patient.create(req.body, (error, createdPatient) => {
      res.redirect("/patients");
    });
  });
  
  //edit
  router.get("/:id/edit", (req, res) => {
    Patient.findById(req.params.id, (err, foundPatient) => {
      if (!err) {
        res.render("patients/Edit", {
          patient: foundPatient,
        });
      } else {
        res.send({ msg: err.message });
      }
    });
  });
  
  //show
  router.get("/:id", (req, res) => {
    Patient.findById(req.params.id, (err, foundPatient) => {
      res.render("patients/Show", {
        patient: foundPatient,
      });
    });
  });


// export router
module.exports = router;