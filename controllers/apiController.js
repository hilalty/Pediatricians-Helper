const apiController = {
    index(req, res, next) {
      res.json(res.locals.data.patients);
    },
    show(req, res, next) {
      res.json(res.locals.data.patient);
    },
  };
  
 
  module.exports = apiController;