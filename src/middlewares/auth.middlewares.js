import { User } from "../models/user.model.js";
import { verifyAccessToken } from "../utils/jwt.js";

export const jwtInterceptor = async (
  req,
  res,
  next
) => {
  try {
    const token =
      req.cookies.accessToken;

    if (!token) {
      return res.status(401).json({
        message:
          "Unauthorized Access",
      });
    }

    const decoded =
      verifyAccessToken(token);

    const user =
      await User.findById(
        decoded.userId
      ).select("-password");

    if (!user) {
      return res.status(401).json({
        message: "User not found",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid Token",
    });
  }
};