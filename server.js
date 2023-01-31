require("dotenv").config();

const express = require("express");
const app = express();
const PORT = 3000;
const patientController = require("./controllers/patientController");
const userController = require("./controllers/userController")

const db = require('./models/db')
db.once('open', () => {
  console.log('connected to mongo')
})

app.set("view engine", "jsx");
app.engine("jsx", require("jsx-view-engine").createEngine());


const setupMiddleware = require("./middleware/setupMiddleware");
setupMiddleware(app);


app.use("/patients", patientController);
app.use("/user", userController);

app.get("/", (req, res) => {
  res.redirect("/patients");
});

app.listen(PORT, () => {
  console.log(`listening on port:${PORT} http://localhost:${PORT}/`);
});