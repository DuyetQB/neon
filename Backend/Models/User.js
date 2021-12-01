const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const User = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    infors: [
      {
        type: ObjectId,
        ref: "Infor",
      },
    ],
  },
  { collection: "user" }
);

module.exports = mongoose.model("user", User);
