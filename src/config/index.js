import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGOOSE_URL || process.env.MONGO_URI,
  cookieSecret: process.env.COOKIE_SECRET || "secret",
  jwtSecret: process.env.JWT_SECRET,
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || "7d",
  // cookieName: process.env.COOKIE_NAME || "apprelix-token",
};

export default config;
