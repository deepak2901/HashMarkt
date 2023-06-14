const User = require("../model/User");
const jwt = require("jsonwebtoken");

exports.signup = async (req, res) => {
  try {
    const { email, firstName, lastName, password } = req.body;

    const emailExist = await User.exists({ email });
    if (emailExist) {
      return res.status(400).send("Email already exists");
    }

    const user = await User.create({ email, firstName, lastName, password });

    res.send(user);
  } catch (err) {
    res.status(400).send(`Error while signing up: ${err}`);
  }
};

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(409).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(409).json({ message: "User not found" });
    }

    const validPassword = await user.comparePassword(password);
    if (!validPassword) {
      return res.status(409).json({ message: "Invalid password" });
    }

    const token = generateToken(user);
    res.cookie("token", token, { httpOnly: true });
    res.status(200).json({ success: true, token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const generateToken = (user) => {
  return jwt.sign({ userId: user._id }, "secret_key", { expiresIn: "24h" });
};

exports.logout = (req, res) => {
  res.clearCookie("token");
  res.status(200).json({
    success: true,
    message: "Logged out",
  });
};
