const User = require("../Models/User");
// const UserData = require("../Models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const SECRET_KEY = "dhbchbdhbhdbdsf1234@3nndndndndnddnddndivgkgjf";

const ChangePassword = (req, res, next) => {};

const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.json({
        status: "error",
        message: "Mật khẩu hoặc Email đăng nhập không đúng",
      });
    }

    const userName = await User.findOne({ email });
    console.log("username", userName.username);
    if (email == userName.username) {
      const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY);
      return res.json({
        status: "ok",
        message: "Đăng nhập thành công",
        data: token,
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY);
      return res.json({
        status: "ok",
        message: "Đăng nhập thành công",
        data: token,
      });
    }

    return res.json({
      status: "error",
      message: "Mật khẩu hoặc Email đăng nhập không đúng",
    });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Mật khẩu hoặc Email đăng nhập không đúng",
    });
  }
};
const Register = async (req, res, next) => {
  const { email, username, password: plainTextPassword } = req.body;
  if (!email || typeof email !== "string") {
    res.json({ status: "error", message: "The email Invalid" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    res.json({ status: "error", message: "The password Invalid" });
  }
  if (plainTextPassword.length <= 5) {
    res.json({ status: "error", message: "Mật khẩu phải 6 kí tự trở lên" });
  }
  const password = await bcrypt.hash(plainTextPassword, 10);

  try {
    const userResponse = await User.create({
      email,
      username,
      password,
    });
    console.log("user created successfully", userResponse);
  } catch (err) {
    console.log(err);
    if (err.code === 11000) {
      res.json({ status: "error", message: "Email đã được sử dụng trước đó " });
    }
    throw err;
  }

  return res.json({ status: "ok", message: "Tạo tài khoản thành công" });
};

module.exports = {
  Login,
  Register,
  ChangePassword,
};
