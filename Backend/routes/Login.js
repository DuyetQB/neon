const express = require("express");
const LoginRouter = express.Router();
const index_Controller = require("../Controllers/index.js");

LoginRouter.route("/").post(index_Controller.Login);

module.exports = LoginRouter;
