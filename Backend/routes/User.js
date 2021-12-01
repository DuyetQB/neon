const express = require("express");
const UserRouter = express.Router();
const index_Controller = require("../Controllers/index.js");

UserRouter.route("/").get(index_Controller.UserData);

UserRouter.route("/:userId")
  .get(index_Controller.getUserId)
  .put(index_Controller.replaceUser)
  .patch(index_Controller.updateUser);
UserRouter.route("/:userId/decks")
  .get(index_Controller.getUserInfor)
  .post(index_Controller.createUserInfor);
module.exports = UserRouter;
