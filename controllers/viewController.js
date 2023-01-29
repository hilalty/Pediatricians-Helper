const RESOURCE_PATH = "/patients";

const viewController = {
  index(req, res) {
    res.render("patients/Index", res.locals.data);
  },
  show(req, res) {
    res.render("patients/Show", res.locals.data);
  },
  edit(req, res) {
    res.render("patients/Edit", res.locals.data);
  },
  newView(req, res) {
    res.render("patients/New");
  },
  redirectHome(req, res) {
    res.redirect(RESOURCE_PATH);
  },
  redirectShow(req, res) {
    res.redirect(RESOURCE_PATH + `/${req.params.id}`);
  },
};

module.exports = viewController;
