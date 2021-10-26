const index_Controller = require("../controllers/index.js");
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get(index_Controller.Register)
  .post(index_Controller.Register);

module.exports = router;
