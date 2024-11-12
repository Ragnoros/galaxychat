import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confrimPassword, gender } = req.body;

    if (password !== confrimPassword) {
      return res
        .status(400)
        .json({ error: "Password and Confirm Password do not match!" });
    }
    const user = await User.findOne({ username });
    if (user) {
      return res
        .status(400)
        .json({ error: "Username Already exists, choose another" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const nameSplit = fullName.split(" ");
    const profilePic = `https://avatar.iran.liara.run/username?username=${nameSplit[0]}+${nameSplit[1]}`;

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic,
    });

    if (newUser) {
      await newUser.save();
      res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
      });
    } else {
      res.status(400).json({ error: "Invalid user data" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const login = (req, res) => {
  console.log("LoginUser");
};
export const logout = (req, res) => {
  console.log("LogoutUser");
};
