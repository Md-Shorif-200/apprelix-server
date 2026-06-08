import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 5000,
  mongoUri: process.env.MONGOOSE_URL || process.env.MONGO_URI,
  cookieSecret: process.env.COOKIE_SECRET || "secret",
};

export default config;
