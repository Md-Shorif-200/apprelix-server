import { User } from "../../models/user.model.js";

export const getAllUsersService = async () => {
  const users = await User.find();
  return users;
};

// single user
export const getSingleUserService = async (id) => {
  const user = await User.findById(id);
  return user;
};

export const updateUserService = async (id, payload) => {
  const updateUserData = await User.findByIdAndUpdate(
    id,
    {
      $set: payload,
    },
    {
      new: true,
      runValidators: true,
    },
  );

  return updateUserData;
};
