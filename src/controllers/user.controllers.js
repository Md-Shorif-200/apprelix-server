import { ObjectId } from "mongodb";
import { getAllUsersService, getSingleUserService } from "../services/users.service.js";

// get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await getAllUsersService();

    res.status(200).json({
      success: true,
      data: users,
    });
  } catch (error) {
    next(error);
  }
};

// get single user
export const getSingleUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = new ObjectId(id);
    const user = await getSingleUserService(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
