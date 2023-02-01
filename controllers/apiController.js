const apiController = {
    index(req, res, next) {
      res.json(res.locals.data.fruits);
    },
    show(req, res, next) {
      res.json(res.locals.data.fruit);
    },
  };
  
 
  module.exports = apiController;