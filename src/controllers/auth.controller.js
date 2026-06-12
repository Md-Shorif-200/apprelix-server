import {
  createUser,
  getAllUsersService,
  loginUserService,
} from "../services/auth.service.js";

// register user
export const registerUser = async (req, res, next) => {
  try {
    const user = await createUser(req.body);

    setAuthCookie(res, user.accessToken);

    res.status(201).json({
      success: true,
      message: "User registered successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

// login user
export const loginUser = async (req, res, next) => {
  try {
    const user = await loginUserService(req.body);

    setAuthCookie(res, user.accessToken);

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};

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
