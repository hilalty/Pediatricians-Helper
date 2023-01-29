require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");


const methodOverride = require("method-override");

const PORT = 3000;

const Patient = require("./models/patients.js");
const patientController = require("./controllers/patientController");

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

app.use("/patients", patientController);

app.get("/", (req, res) => {
  res.redirect("/patients/");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});