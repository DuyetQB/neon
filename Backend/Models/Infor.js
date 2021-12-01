const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
const Infors = new Schema(
  {
    phone: { type: String, default: "" },
    username: { type: String, default: "" },
    avatar: { type: String, default: "" },
    status: { type: String, default: "noactive" },
    deleteAt: { type: Date, default: Date.now },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    owner: {
      type: ObjectId,
      ref: "User",
    },
  },
  { collection: "Infors" }
);

module.exports = mongoose.model("Infors", Infors);
