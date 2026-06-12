import { User } from "../models/user.model.js";


export const getAllUsersService = async () => {
  const users = await User.find();
  return users;
};


// single user
 export const getSingleUserService = async (id) => {
   const user = await User.findById(id);
    return user;
 }