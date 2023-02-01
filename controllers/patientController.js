const express = require("express");
const router = express.Router();

const viewController = require("./viewController.js");
const dataController = require("./dataController.js");
const apiController = require("./apiController");

router.use((req, res, next) => {
  console.log("session", req.session);

  if (req.session.loggedIn) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

router.get("/api", dataController.index, apiController.index);

router.get("/api/:id", dataController.show, apiController.show);

router.delete("/api/:id", dataController.destroy, apiController.show);

router.put("/api/:id", dataController.update, apiController.show);

router.post("/api/", dataController.create, apiController.show);



router.get("/", dataController.index, viewController.index);

router.get("/new", viewController.newView);

router.delete("/:id", dataController.destroy, viewController.redirectHome);

router.put("/:id", dataController.update, viewController.redirectShow);

router.post("/", dataController.create, viewController.redirectHome);

router.get("/:id/edit", dataController.show, viewController.edit);

router.get("/:id", dataController.show, viewController.show);

module.exports = router;
