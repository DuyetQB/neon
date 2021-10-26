const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Infors = new Schema(
  {
    email: { type: String, default: "" },
    phone: { type: String, default: "" },
    username: { type: String, default: "" },
    avatar: { type: String, default: "" },
    roles: { type: Array, default: [] },
    status: { type: String, default: "noactive" },

    deleteAt: { type: Date, default: Date.now },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now },
    action: { type: String, default: "System" },
  },
  { collection: "Infors" }
);

users.index({ email: 1 }); //Nơi đánh index
module.exports = mongoose.model("Infors", Infors);
