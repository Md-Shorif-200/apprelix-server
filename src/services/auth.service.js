import { User } from "../models/user.model.js";
import bcrypt from "bcrypt";

export const createUser = async (payload) => {
  const existingUser = await User.findOne({ email: payload.email });

  if (existingUser) {
    throw new Error("Email already exists");
  }

  const hashedPassword = await bcrypt.hash(payload.password, 10);

  const newUser = await User.create({
    ...payload,
    password: hashedPassword,
  });

  return newUser;
};

export const getAllUsersService = async () => {
  const users = await User.find();

  return users;
};




// login user 
export const loginUserService = async(payload) => {
  const user = await User.findOne({email: payload.email});

   if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

  const isPasswordValid = await bcrypt.compare(payload.password,user.password);

  if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

  return user;
}