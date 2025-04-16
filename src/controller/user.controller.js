import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password, address, role, profileImage } = req.body;

    // Input validation
    if (!email || !password || !name || !role || !profileImage) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    // Hash the password
    const hashpass = await bcrypt.hash(password, 10);

    // Create and save the new user
    const user = new User({
      name,
      email,
      password: hashpass,
      address,
      role,
      profileImage,
    });

    await user.save();
    console.log(user);
    // Respond with success
    return res.status(200).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};

export const Login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials",
      });
    }
    // সফল লগইন
    res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        email: user.email,
        name: user.name,
      },
    });
  } catch (err) {
    next(err);
  }
};
