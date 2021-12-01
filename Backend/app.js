const express = require("express");
const app = express();
const mongooseClient = require("mongoose");
const jwt = require("jsonwebtoken");
const logger = require("morgan");
const LoginRouter = require("./routes/Login");
const RegisterRouter = require("./routes/Register");
const UserRouter = require("./routes/User");
const authenToken = require("./Middleware/authServer");
require("dotenv").config();
const PORT = 5000;
// const url = process.env.MONGODB_URL;

// mongooseClient
//   .connect(url, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("connect to db success "))
//   .catch((err) => console.error(`connect db is fail which ${err}`));

mongooseClient
  .connect("mongodb://localhost:27017/login-page", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect to db success "))
  .catch((err) => console.error(`connect db is fail which ${err}`));
app.use(logger("dev"));
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", function (req, res) {
  // res.status(200).json({ message:"oki"})
  res.json({ status: "Success" });
});

app.post("/login", function (req, res) {
  const author = req.body.author;

  const user = books.find((user) => user.author === author);
  if (!user) return res.sendStatus(401);

  const accesToken = jwt.sign(user, process.env.SECRET_KEY, {
    expiresIn: "60s",
  });
  res.json({ accesToken });
});
const books = [
  {
    id: 1,
    content: "context api",
    author: "nghia",
  },
  {
    id: 2,
    content: "reduce in react",
    author: "hieu",
  },
  {
    id: 3,
    content: "callback in js",
    author: "duyetit",
  },
];

const posts = [
  {
    userId: 1,
    content: " context api post of nghia",
  },
  {
    userId: 2,
    content: " reduce in react post of hieu",
  },
  {
    userId: 3,
    content: "callback in js post of duyetit",
  },
];
app.get("/books", authenToken, function (req, res) {
  res.json(posts.filter((posts) => posts.userId === req.id));
});

app.use("/api/login", LoginRouter);
app.use("/api/register", RegisterRouter);
app.use("/api/user", UserRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
