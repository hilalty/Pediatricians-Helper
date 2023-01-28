/* const jwt = require("jsonwebtoken");

async function authorization(req, res, next) {
  // Parse the header with the token. Verify the jwt. pass the _id into the locals
  const { authorization } = req.headers;
  const bearerToken = authorization?.split(" ")[1];

  if (!bearerToken) {
    return res.redirect("/user/login");
  }

  try {
    const verified = jwt.verify(bearerToken, process.env.SECRET);
    if (verified) {
      res.locals.data.user = verified;
      next();
    } else {
      return res.status(401).json({ error: "A problem occured" });
    }
  } catch (error) {
    return res.status(401).json({ error: "A problem occured" });
  }
}

module.exports = authorization;
*/