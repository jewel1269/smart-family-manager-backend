import User from "../models/user.model.js";
import bcrypt from "bcrypt";

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

    // Respond with success
    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    next(err);
  }
};
