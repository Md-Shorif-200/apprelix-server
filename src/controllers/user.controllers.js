import { ObjectId } from "mongodb";
import { getAllUsersService, getSingleUserService, updateUserService } from "../services/users.service.js";

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




export const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const {
      fullName,
      phone,
      country,
      city,
      profilePhoto, // optional
      companyName,
      companyWebsite,
      companyAddress,
    } = req.body;

    // only send fields that exist (important clean logic)
    const payload = {};

    if (fullName) payload.fullName = fullName;
    if (phone) payload.phone = phone;
    if (country) payload.country = country;
    if (city) payload.city = city;

    if (profilePhoto) payload.profilePhoto = profilePhoto;

    if (companyName) payload.companyName = companyName;
    if (companyWebsite) payload.companyWebsite = companyWebsite;
    if (companyAddress) payload.companyAddress = companyAddress;

    const updatedUser = await updateUserService(id, payload);

    if (!updatedUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Profile updated successfully",
      data: updatedUser,
    });
  } catch (error) {
    next(error);
  }
};