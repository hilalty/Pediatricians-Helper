const methodOverride = require("method-override");
const morgan = require("morgan");

const express = require("express");

const setupMiddleware = (app) => {
  app.use(morgan("tiny")); 
  app.use(express.static("public"));

  app.use(methodOverride("_method"));
  app.use((req, res, next) => {
    res.locals.data = {};
    next();
  });

  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
}

module.exports = setupMiddleware;