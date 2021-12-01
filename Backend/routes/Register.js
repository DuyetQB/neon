const express = require("express");
const RegisterRouter = express.Router();
const index_Controller = require("../controllers/index.js");

RegisterRouter.route("/").post(index_Controller.Register);

module.exports = RegisterRouter;
