const User = require("../Models/User");
const UserInfor = require("../Models/Infor");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const UserData = async (req, res) => {
  try {
    const user = await UserInfor.findOne({ email });

    res.json(user.filter((user) => user.id === req.id));
  } catch (error) {
    console.log(error);
    res.sendStatus(403);
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).lean();

    if (!user) {
      return res.json({
        status: "error",
        statusCode: 401,
        message: " Email đăng nhập không đúng",
      });
    }

    if (await bcrypt.compare(password, user.password)) {
      const accesToken = jwt.sign(user, process.env.SECRET_KEY, {
        expiresIn: "120s",
      });
      return res.json(accesToken);
    }
    // status: "ok",
    // message: "Đăng nhập thành công",
    // accesToken: accesToken,
    // return res.json({
    //   status: "error",
    //   message: "Mật khẩu hoặc Email đăng nhập không đúng",
    // });
  } catch (err) {
    console.log(err);
    return res.json({
      status: "error",
      message: "Mật khẩu hoặc Email đăng nhập không đúng",
    });
  }
};
const Register = async (req, res) => {
  const { email, username, password: plainTextPassword } = req.body;
  if (!email || typeof email !== "string") {
    res.json({ status: "error", message: "The email Invalid" });
  }

  if (!plainTextPassword || typeof plainTextPassword !== "string") {
    res.json({ status: "error", message: "The password Invalid" });
  }
  if (plainTextPassword.length < 5) {
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
      res.json({
        status: "error",
        message: "Email đã được sử dụng trước đó ",
      });
    }
    throw err;
  }

  return res.json({ status: "ok", message: "Tạo tài khoản thành công" });
};

const getUserId = async (req, res) => {
  const { userId } = req.params;

  const user = await User.findById(userId);
  return res.status(200).json({ user });
};

const replaceUser = async (req, res) => {
  const { userId } = req.params;
  const newUser = req.body;
  await User.findByIdAndUpdate(userId, newUser);
  return res.status(200).json({ success: true });
};

const updateUser = async (req, res) => {
  const { userId } = req.params;
  const newUser = req.body;
  await User.findByIdAndUpdate(userId, newUser);
  return res.status(200).json({ success: true });
};

const getUserInfor = async (req, res) => {
  const { userId } = req.params;
  const user = await User.findById(userId).populate("infors");

  return res.status(200).json({ infors: user.infors });
};

const createUserInfor = async (req, res) => {
  const { userId } = req.params;
  const newUserInfor = new UserInfor(req.body);
  const user = await User.findById(userId);
  newUserInfor.owner = user;

  await newUserInfor.save();

  user.infors.push(newUserInfor._id);
  await user.save();
};

module.exports = {
  Login,
  Register,
  UserData,
  getUserId,
  replaceUser,
  updateUser,
  getUserInfor,
  createUserInfor,
};
