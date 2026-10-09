const User = require("../Models/UserModel");
const { createSecretToken } = require("../Util/SecretToken");
const bcrypt = require("bcryptjs");

module.exports.Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.json({
        message: "User already exists",
      });
    }

    const user = await User.create({
      email,
      password,
      username,
    });

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
    httpOnly: false,
    sameSite: "lax",
    path: "/"
});

    return res.status(201).json({
      message: "User signed up successfully",
      success: true,
      user,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Signup failed",
      success: false,
    });
  }
};
module.exports.Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.json({
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.json({
        message: "Incorrect email or password",
      });
    }

    const auth = await bcrypt.compare(password, user.password);

    if (!auth) {
      return res.json({
        message: "Incorrect email or password",
      });
    }

    const token = createSecretToken(user._id);

    res.cookie("token", token, {
    httpOnly: false,
    sameSite: "lax",
    path: "/"
});

    return res.status(200).json({
      message: "User logged in successfully",
      success: true,
    });

  } catch (error) {
    console.error(error);

    return res.status(500).json({
      message: "Login failed",
      success: false,
    });
  }
};
module.exports.Logout = (req, res) => {
    res.clearCookie("token");

    return res.status(200).json({
        success: true,
        message: "Logged out successfully"
    });
};
module.exports.GetUser = async (req, res) => {
    try {
        const user = await User.findById(req.userId).select("-password");

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }

        return res.status(200).json({
            success: true,
            user: user
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            success: false,
            message: "Unable to get user"
        });
    }
};