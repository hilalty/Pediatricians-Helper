const Patient = require("../models/patients.js");

const dataController = {
  index(req, res, next) {
    Patient.find({username: req.session.username}, (error, allPatients) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.patients = allPatients;
        next();
      }
    });
  },
  create(req, res, next) {
    req.body.username = req.session.username;
    Patient.create(req.body, (error, createdPatient) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.patient = createdPatient;
        next();
      }
    });
  },
  show(req, res, next) {
    Patient.findById(req.params.id, (error, foundPatient) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.patient = foundPatient;
        next();
      }
    });
  },
  update(req, res, next) {
    Patient.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
      (error, updatedPatient) => {
        if (error) {
          res.status(404).send({
            msg: error.message,
          });
        } else {
          res.locals.data.patient = updatedPatient;
          next();
        }
      }
    );
  },
  destroy(req, res, next) {
    Patient.findByIdAndRemove(req.params.id, (error, patient) => {
      if (error) {
        res.status(404).send({
          msg: error.message,
        });
      } else {
        res.locals.data.patient = patient;
        next();
      }
    });
  },
};

module.exports = dataController;
