import { configDotenv } from "dotenv";
configDotenv();
import User from "../models/User.js";
import Mentor from "../models/Mentor.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  const { username, email, password, role ,joined_date} = req.body;
  try {
    let mentor = await Mentor.findOne({ email });
    let user = await User.findOne({ email });
    if (user) {
      return res.status(403).json({ err: "User already register!!" });
    }
    if (mentor) {
      return res.status(403).json({ err: "Mentor already registerd" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ err: "Password must be at least 6 characters" });
    }
    if (role === "Student") {
      user = new User({
        username,
        email,
        password,
        role,
        joined_date,
      });
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
      await user.save();
    } else if (role === "Mentor") {
      mentor = new Mentor({
        username,
        email,
        password,
        role,
        joined_date
      });
      const salt = await bcrypt.genSalt(10);
      mentor.password = await bcrypt.hash(password, salt);
      await mentor.save();
    }
    // const salt = await bcrypt.genSalt(10);
    // user.password = await bcrypt.hash(password, salt);
    // await user.save();
    res.status(200).json({ msg: "user register successfully!!!" });
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    user = await Mentor.findOne({ email });
  }
  if (!user) {
    return res.status(500).json({ msg: "User not found in database" });
  }
  try {
    if (await bcrypt.compare(password, user.password)) {
    } else {
      res.status(401).json({ err: "Password incorrect " });
    }
    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: 3600 },
      (err, token) => {
        if (err) throw err;
        res.json({ token: token, id: user._id , skills: user.skills});
      }
    );

    // res.json({msg:"login successfully"})
  } catch (error) {
    return res.status(500).json({ errr: error });
  }
};

export default { registerUser, login };
