import {
  createUser,
  loginUserService,
} from "../../services/auth/auth-service.js";

// register user
export const registerUser = async (req, res, next) => {
  try {
    const user = await createUser(req.body);

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

    res.status(200).json({
      success: true,
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    next(error);
  }
};
