const express = require("express");
const app = express();
const mongooseClient = require("mongoose");

const logger = require("morgan");
const path = require("path");
const LoginRouter = require("./routes/Login");
const RegisterRouter = require("./routes/Register");
require("dotenv").config();
// const PORT = process.env.APP_API || 3000;
const url =
  "mongodb+srv://dinhsyduyet:dinhsyduyet@cluster0.hy4q0.mongodb.net/neonDatabase?retryWrites=true&w=majority";

mongooseClient
  .connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to db success "))
  .catch((err) => console.error(`connect db is fail which ${err}`));

// mongooseClient
//   .connect("mongodb://localhost:27017/login-page", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connect to db success "))
//   .catch((err) => console.error(`connect db is fail which ${err}`));
app.use(logger("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  // res.status(200).json({ message:"oki"})
  res.sendFile(path.join(__dirname, "/public/index.html"));
});
app.use("/api/login", LoginRouter);
app.use("/api/register", RegisterRouter);

app.listen(process.env.PORT || 3000, () => {
  console.log(`server is running on port ${process.env.PORT || 3000}`);
});
