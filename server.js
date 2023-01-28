require("dotenv").config();

const mongoose = require("mongoose");
const express = require("express");
const app = express();
const path = require("path");


const methodOverride = require("method-override");

const PORT = 3000;

/**
 * Controller requires go here ⬇️
 */

//--------------------------------

const db = require("./db");
db
  .on("open", () => console.log("Connected to Mongoose"))
  .on("close", () => console.log("Disconnected from Mongoose"))
  .on("error", (error) => console.log(error));


/**
 * View engine
 */
app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());


// Index route
app.get("/", (req, res) => {
  res.render("Index");
});

// Listen on the port
app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});