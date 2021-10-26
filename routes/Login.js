const express = require("express");
const router = express.Router();
const index_Controller = require("../Controllers/index.js");

router.route("/").get(index_Controller.Login).post(index_Controller.Login);

module.exports = router;
