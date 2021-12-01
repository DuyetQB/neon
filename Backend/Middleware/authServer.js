const jwt = require("jsonwebtoken");

function authenToken(req, res, next) {
  const authorizationHeader = req.headers["authorization"];

  //  Bears ["token"]
  const token = authorizationHeader && authorizationHeader.split(` `)[1];
  if (!token) res.sendStatus(401);
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    req.id = decoded.id;
    res.setHeader(" 'Content-Type", "application/json'");
    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(403);
  }
}

module.exports = authenToken;
